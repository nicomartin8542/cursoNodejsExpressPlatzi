import Joi from 'joi';

const email = Joi.string().email().max(100);
const password = Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'));
const token = Joi.string().min(3).max(200);

export const recoveryPassword = Joi.object({
  email: email.required(),
});

export const changePassword = Joi.object({
  password: password.required(),
  token: token.required(),
});
