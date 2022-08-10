import Joi from 'joi';

export const id = Joi.number().integer();
export const costumerId = Joi.number().integer();

export const getOrderByIdSchema = Joi.object({
  id: id.required(),
});

export const createOrderSchema = Joi.object({
  costumerId: costumerId.required(),
});
