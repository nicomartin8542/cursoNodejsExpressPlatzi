import express from 'express';
import passport from 'passport';
import { authRoles } from '../middlewares/auth.handler.js';
import validatorHandler from '../middlewares/validator.handler.js';
import {
  createUsers,
  getByIdUsers,
  updateUsers,
} from '../schema/users.schema.js';
import {
  createUserPost,
  deleteUser,
  getAll,
  getByid,
  updateUserPatch,
} from '../services/user.services.js';

const router = express.Router();

//Get by id
router.get(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  authRoles('all'),
  validatorHandler(getByIdUsers, 'params'),
  getByid
);

//Get
router.get('/', passport.authenticate('jwt', { session: false }), getAll);

//Post Create
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  authRoles('admin'),
  validatorHandler(createUsers, 'body'),
  createUserPost
);

//Put
router.patch(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  authRoles('admin'),
  validatorHandler(getByIdUsers, 'params'),
  validatorHandler(updateUsers, 'body'),
  updateUserPatch
);

//Delete
router.delete(
  '/:id',
  validatorHandler(getByIdUsers, 'params'),
  authRoles('admin'),
  deleteUser
);

export default router;
