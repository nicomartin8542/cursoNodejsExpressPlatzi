import express from 'express';
import productsService from '../services/producto.services.js';

const { crear, borrar, getAll, getFindId, actualizar } = productsService;
const router = express.Router();

//Enviar un parametro en el request
router.get('/:id', getFindId);

router.get('/', getAll);

router.post('/', crear);

router.put('/:id', actualizar);

router.delete('/:id', borrar);

export default router;
