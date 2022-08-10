import express from 'express';
import validatorHandler from '../middlewares/validator.handler.js';
import {
  getOrderByIdSchema,
  createOrderSchema,
  createItem,
} from '../schema/order.schema.js';
import {
  getByid,
  create,
  getAll,
  addItems,
} from '../services/order.services.js';

//Instancio router de express
const router = express.Router();

//Get by id
router.get('/:id', validatorHandler(getOrderByIdSchema, 'params'), getByid);

//Get all
router.get('/', getAll);

//Post Create
router.post('/', validatorHandler(createOrderSchema, 'body'), create);

//Post create items
router.post('/orderItems', validatorHandler(createItem, 'body'), addItems);

export default router;
