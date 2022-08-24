import Joi from 'joi';

export const id = Joi.number().integer();
export const costumerId = Joi.number().integer();
export const orderId = Joi.number().integer();
export const productId = Joi.number().integer();
export const amount = Joi.number().integer().min(1);

export const getOrderByIdSchema = Joi.object({
  id: id.required(),
});

//export const createOrderSchema = Joi.object({
//  costumerId: costumerId.required(),
//});

export const createItem = Joi.object({
  orderId: orderId.required(),
  productId: productId.required(),
  amount: amount.required(),
});
