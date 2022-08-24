import express from 'express';
import passport from 'passport';
import { authRoles } from '../middlewares/auth.handler.js';
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
router.get(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  authRoles('all'),
  validatorHandler(getCustomerSchema, 'params'),
  getByid
);

//Get
router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  authRoles('all'),
  getAll
);

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
  passport.authenticate('jwt', { session: false }),
  authRoles('admin'),
  validatorHandler(deleteCustomerSchema, 'params'),
  deleteCustomer
);

export default router;
