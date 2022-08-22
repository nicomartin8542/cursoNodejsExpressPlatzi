import express from 'express';
import passport from 'passport';
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
  validatorHandler(getCustomerSchema, 'params'),
  getByid
);

//Get
router.get('/', passport.authenticate('jwt', { session: false }), getAll);

//Post Create
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  validatorHandler(createCustomerSchema, 'body'),
  createCustomer
);

//Patch
router.patch(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  validatorHandler(getCustomerSchema, 'params'),
  validatorHandler(updateCustomerSchema, 'body'),
  updateCustomer
);

//delete
router.delete(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  validatorHandler(deleteCustomerSchema, 'params'),
  deleteCustomer
);

export default router;
