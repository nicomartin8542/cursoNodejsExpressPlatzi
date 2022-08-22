import express from 'express';
import passport from 'passport';
import {
  crear,
  borrar,
  getAll,
  getFindId,
  actualizar,
} from '../services/producto.services.js';
import validatorHandler from '../middlewares/validator.handler.js';
import {
  createProductSchema,
  getProductSchema,
  updateProductSchema,
  queryProductSchema,
} from '../schema/product.schema.js';
import { authRoles } from '../middlewares/auth.handler.js';

const router = express.Router();

//Enviar un parametro en el request
router.get(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  authRoles('all'),
  validatorHandler(getProductSchema, 'params'),
  getFindId
);

router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  authRoles('all'),
  validatorHandler(queryProductSchema, 'query'),
  getAll
);

router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  authRoles('admin'),
  validatorHandler(createProductSchema, 'body'),
  crear
);

router.put(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  authRoles('admin'),
  validatorHandler(getProductSchema, 'params'),
  validatorHandler(updateProductSchema, 'body'),
  actualizar
);

router.delete('/:id', borrar);

export default router;
