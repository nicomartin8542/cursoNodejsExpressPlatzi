import express from 'express';
import { authHandler } from '../middlewares/auth.handler.js';
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
router.get('/:id', validatorHandler(getByIdUsers, 'params'), getByid);

//Get
router.get('/', authHandler, getAll);

//Post Create
router.post('/', validatorHandler(createUsers, 'body'), createUserPost);

//Put
router.patch(
  '/:id',
  validatorHandler(getByIdUsers, 'params'),
  validatorHandler(updateUsers, 'body'),
  updateUserPatch
);

//Delete
router.delete('/:id', validatorHandler(getByIdUsers, 'params'), deleteUser);

export default router;
