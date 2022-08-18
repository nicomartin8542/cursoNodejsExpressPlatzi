import express from 'express';
import passport from 'passport';
import { authLogin } from '../services/auth.services.js';
const router = express.Router();

router.post(
  '/login',
  passport.authenticate('local', { session: false }),
  authLogin
);

export default router;
