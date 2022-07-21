import Joi from 'joi';

const id = Joi.number().integer();
const email = Joi.string().email().max(100);
const password = Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'));

export const createUsers = Joi.object({
  email: email.required(),
  password: password.required(),
});

export const updateUsers = Joi.object({
  email: email,
  password: password,
});

export const getByIdUsers = Joi.object({
  id: id.required(),
});
