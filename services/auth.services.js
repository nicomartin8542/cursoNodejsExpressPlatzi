import jwt from 'jsonwebtoken';
import config from '../config/config.js';
import boom from '@hapi/boom';
import bcrypt from 'bcrypt';
import { getByEmail } from './user.services.js';
import { sendMail } from '../utils/nodemailer/config.js';

export const singToken = (user) => {
  const jwtConfig = { expiresIn: config.jwtExpiration };
  const payload = {
    sub: user.id,
    role: user.role,
  };
  const token = jwt.sign(payload, config.jwtSecret, jwtConfig);
  return token;
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

    const dataMail = {
      to: email,
      subject: 'Probando desde node',
      text: 'Este es el cuerpo ',
      html: '<b>Hello world?</b>',
    };

    //Send mail
    sendMail(dataMail);
  } catch (error) {
    next(error);
  }
};
