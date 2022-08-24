import express from 'express';
import passport from 'passport';
import { getByUser } from '../services/order.services.js';

const router = express.Router();

router.get(
  '/my-orders',
  passport.authenticate('jwt', { session: false }),
  getByUser
);

export default router;
