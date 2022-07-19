import express from 'express';
import { getAll } from '../services/user.services.js';

const router = express.Router();

//Query params
router.get('/', getAll);

export default router;
