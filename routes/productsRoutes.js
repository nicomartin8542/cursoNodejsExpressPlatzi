import express from 'express';
import { faker } from '@faker-js/faker';

const router = express.Router();

//Obtengo productos por get
router.get('/filter', (req, res) => {
  res.send('Soy un filter');
});

//Obtengo todos los productos
router.get('/', (req, res) => {
  let products = [];
  const { size } = req.query;

  const limit = size || 10;

  for (let i = 0; i < limit; i++) {
    products = [
      ...products,
      {
        users: faker.name.findName(),
        price: faker.commerce.price(),
      },
    ];
  }

  res.json(products);
});

//Enviar un parametro en el request
router.get('/:id', (req, res) => {
  const { id } = req.params;

  id != 999
    ? res.status(404).json({ message: 'not found' })
    : res.status(200).json({
        nombre: 'producto 2',
        precio: 20.0,
        id,
      });
});

router.post('/', (req, res) => {
  const body = req.body;

  res.status(201).json({
    message: 'Created',
    data: body,
  });
});

router.put('/:id', (req, res) => {
  const id = req.params;
  const body = req.body;

  res.json({
    message: 'Pruducts update',
    id,
    data: body,
  });
});

router.patch('/:id', (req, res) => {
  const id = req.params;
  const body = req.body;

  res.json({
    message: 'Pruducts update',
    id,
    data: body,
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;

  res.json({ message: 'Pruducts delete', id });
});

export default router;
