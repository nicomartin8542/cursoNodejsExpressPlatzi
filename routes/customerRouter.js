import express from 'express';
import validatorHandler from '../middlewares/validator.handler.js';
import {
  getCustomerSchema,
  createCustomerSchema,
  updateCustomerSchema,
  deleteCustomerSchema,
} from '../schema/customer.schema.js';
import {
  getByid,
  getAll,
  createCustomer,
  updateCustomer,
  deleteCustomer,
} from '../services/customer.services.js';

const router = express.Router();

//Get by id
router.get('/:id', validatorHandler(getCustomerSchema, 'params'), getByid);

//Get
router.get('/', getAll);

//Post Create
router.post(
  '/',
  validatorHandler(createCustomerSchema, 'body'),
  createCustomer
);

//Patch
router.patch(
  '/:id',
  validatorHandler(getCustomerSchema, 'params'),
  validatorHandler(updateCustomerSchema, 'body'),
  updateCustomer
);

//delete
router.delete(
  '/:id',
  validatorHandler(deleteCustomerSchema, 'params'),
  deleteCustomer
);

export default router;
