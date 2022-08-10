import express from 'express';
import validatorHandler from '../middlewares/validator.handler.js';
import {
  getOrderByIdSchema,
  createOrderSchema,
} from '../schema/order.schema.js';
import { getByid, create, getAll } from '../services/order.services.js';

//Instancio router de express
const router = express.Router();

//Get by id
router.get('/:id', validatorHandler(getOrderByIdSchema, 'params'), getByid);

//Get all
router.get('/', getAll);

//Post Create
router.post('/', validatorHandler(createOrderSchema, 'body'), create);

export default router;
