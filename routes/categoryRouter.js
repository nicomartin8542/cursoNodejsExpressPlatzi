import express from 'express';
import passport from 'passport';
import { authRoles } from '../middlewares/auth.handler.js';
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

router.get(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  authRoles('all'),
  validatorHandler(getCategorySchema, 'params'),
  getByid
);
router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  authRoles('all'),
  getAll
);
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  authRoles('all'),
  validatorHandler(createCategorySchema, 'body'),
  createCategory
);
router.put(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  authRoles('all'),
  validatorHandler(getCategorySchema, 'params'),
  validatorHandler(updateCategorySchema, 'body'),
  updateCategory
);

export default router;
