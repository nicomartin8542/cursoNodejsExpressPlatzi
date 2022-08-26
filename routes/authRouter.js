import express from 'express';
import passport from 'passport';
import validatorHandler from '../middlewares/validator.handler.js';
import { recoveryPassword } from '../schema/auth.schema.js';
import { authRecovery, authLogin } from '../services/auth.services.js';
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

export default router;
