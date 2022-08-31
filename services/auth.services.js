import jwt from 'jsonwebtoken';
import config from '../config/config.js';
import boom from '@hapi/boom';
import bcrypt from 'bcrypt';
import { getByEmail, findeOne } from './user.services.js';
import { sendMail } from '../utils/nodemailer/config.js';

export const singToken = (user) => {
  const jwtConfig = { expiresIn: config.jwtExpiration };
  const payload = {
    sub: user.id,
    role: user.role,
  };
  const token = jwt.sign(payload, config.jwtSecret, jwtConfig);
  return { token };
};

export const getValidUserPassword = async (email, password) => {
  const user = await getByEmail(email);

  // Verify that the user exists
  if (!user) throw boom.unauthorized();

  // Verify that the password is correct
  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) throw boom.unauthorized();
  delete user.dataValues.password;

  return user;
};

export const authLogin = async (req, res, next) => {
  try {
    const { user } = req;
    res.json(singToken(user));
  } catch (error) {
    next(error);
  }
};

export const authRecovery = async (req, res, next) => {
  try {
    const { email } = req.body;
    const user = await getByEmail(email);
    // Verify that the user exists
    if (!user) throw boom.unauthorized();

    //Armo variables para armar el jwt
    const options = { expiresIn: '10min' };
    const payload = { sub: user.id };
    const token = jwt.sign(payload, config.jwtSecretEmail, options);
    const link = `http://www.myApp.com/recovery?token=${token}`;

    //Guardo el token para recuperar la password
    await user.update({ recoveryToken: token });

    const dataMail = {
      to: email,
      subject: 'Recupero de contraseña',
      //text: 'Este es el cuerpo ',
      html: `<b>Hola ${user.email}, segun lo solicitado se envia link para recuperar la contraseña: </b>
             <br/> 
             <br/> 
             <text type='text/plain'>${token}</text>
             <br/>
             <button type='button'><a href="${link}">Reset</a></button>`,
    };

    //Send mail
    sendMail(dataMail);
    res.json({ message: 'send mail success' });
  } catch (error) {
    next(error);
  }
};

export const resetPassword = async (req, res, next) => {
  try {
    const { password, token } = req.body;
    const payload = jwt.verify(token, config.jwtSecretEmail);
    const user = await findeOne(payload.sub);

    //verify token
    user.recoveryToken !== token && boom.unauthorized();

    const hastNewpassword = await bcrypt.hash(password, 10);

    await user.update({ recoveryToken: null, password: hastNewpassword });

    const dataMail = {
      to: user.email,
      subject: 'Cambio de contraseña',
      //text: 'Este es el cuerpo ',
      html: `<b>Hola ${user.email}, segun lo solicitado se realizo el cambio de contraseña de manera exitosa!</b>`,
    };

    //Send mail
    sendMail(dataMail);

    res.json({ message: 'reset password success' });
  } catch (error) {
    next(error);
  }
};
