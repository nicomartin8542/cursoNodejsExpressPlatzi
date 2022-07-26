import Joi from 'joi';

const id = Joi.number().integer();
const email = Joi.string().email().max(100);
const password = Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'));
const role = Joi.string().string();

export const createUsers = Joi.object({
  email: email.required(),
  password: password.required(),
  role: role.required(),
});

export const updateUsers = Joi.object({
  email: email,
  role: role,
});

export const getByIdUsers = Joi.object({
  id: id.required(),
});
