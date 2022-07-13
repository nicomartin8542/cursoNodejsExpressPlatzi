import express from 'express';
import {
  crear,
  borrar,
  getAll,
  getFindId,
  actualizar,
} from '../services/producto.services.js';

const router = express.Router();

//Enviar un parametro en el request
router.get('/:id', getFindId);

router.get('/', getAll);

router.post('/', crear);

router.put('/:id', actualizar);

router.delete('/:id', borrar);

export default router;
