import express from 'express';
import passport from 'passport';
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
router.get(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  validatorHandler(getOrderByIdSchema, 'params'),
  getByid
);

//Get all
router.get('/', passport.authenticate('jwt', { session: false }), getAll);

//Post Create
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  validatorHandler(createOrderSchema, 'body'),
  create
);

//Post create items
router.post(
  '/orderItems',
  passport.authenticate('jwt', { session: false }),
  validatorHandler(createItem, 'body'),
  addItems
);

export default router;
