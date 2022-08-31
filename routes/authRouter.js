import express from 'express';
import passport from 'passport';
import validatorHandler from '../middlewares/validator.handler.js';
import { recoveryPassword, changePassword } from '../schema/auth.schema.js';
import {
  authRecovery,
  authLogin,
  resetPassword,
} from '../services/auth.services.js';
const router = express.Router();

router.post(
  '/login',
  passport.authenticate('local', { session: false }),
  authLogin
);

router.post(
  '/recovery',
  validatorHandler(recoveryPassword, 'body'),
  authRecovery
);

router.post(
  '/reset-password',
  validatorHandler(changePassword, 'body'),
  resetPassword
);

export default router;
