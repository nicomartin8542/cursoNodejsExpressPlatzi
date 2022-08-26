import Joi from 'joi';

const email = Joi.string().email().max(100);

export const recoveryPassword = Joi.object({
  email: email.required(),
});
