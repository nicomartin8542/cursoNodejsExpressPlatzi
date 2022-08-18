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

const router = express.Router();

//Enviar un parametro en el request
router.get('/:id', validatorHandler(getProductSchema, 'params'), getFindId);

router.get('/', validatorHandler(queryProductSchema, 'query'), getAll);

router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  validatorHandler(createProductSchema, 'body'),
  crear
);

router.put(
  '/:id',
  validatorHandler(getProductSchema, 'params'),
  validatorHandler(updateProductSchema, 'body'),
  actualizar
);

router.delete('/:id', borrar);

export default router;
