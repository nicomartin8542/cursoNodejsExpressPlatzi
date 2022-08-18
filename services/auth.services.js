import jwt from 'jsonwebtoken';
import config from '../config/config.js';

export const authLogin = async (req, res, next) => {
  try {
    const { user } = req;
    const jwtConfig = { expiresIn: 1800 };
    const payload = {
      sub: user.id,
      role: user.role,
    };
    const token = jwt.sign(payload, config.jwtSecret, jwtConfig);
    res.json({
      status: 'success',
      token,
    });
  } catch (error) {
    next(error);
  }
};
