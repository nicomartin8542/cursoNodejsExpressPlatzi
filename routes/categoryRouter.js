import express from 'express';
import validatorHandler from '../middlewares/validator.handler.js';
import {
  createCategorySchema,
  getCategorySchema,
  updateCategorySchema,
} from '../schema/category.schema.js';
import {
  createCategory,
  getAll,
  getByid,
  updateCategory,
} from '../services/category.services.js';

const router = express.Router();

router.get('/:id', validatorHandler(getCategorySchema, 'params'), getByid);
router.get('/', getAll);
router.post(
  '/',
  validatorHandler(createCategorySchema, 'body'),
  createCategory
);
router.put(
  '/:id',
  validatorHandler(getCategorySchema, 'params'),
  validatorHandler(updateCategorySchema, 'body'),
  updateCategory
);

export default router;
