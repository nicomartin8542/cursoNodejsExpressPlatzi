const express = require('express');
import { faker } from '@faker-js/faker';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hola mi server en express');
});
app.get('/nueva_ruta', (req, res) => {
  res.send('Hola esta es mi nueva ruta');
});

app.get('/products', (req, res) => {
  let products = [];

  for (let i = 0; i < 100; i++) {
    products.push({
      name: faker.name.findName(),
    });
  }
  res.json(products);
});

//Enviar un parametro en el request
app.get('/products/:id', (req, res) => {
  const { id } = req.params;

  res.json({
    nombre: 'producto 2',
    precio: 20.0,
    id,
  });
});

//Enviar mas de un parametro en el request
app.get('/categories/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;

  res.json({
    categoryId,
    productId,
  });
});

//Query params
app.get('/users', (req, res) => {
  const { limit, offset } = req.query;
  if (limit && offset) {
    return res.json({
      limit,
      offset,
    });
  }

  res.send('No hay parametros');
});

app.listen(port, () => {
  console.log('Esta corriendo en el puerto: ' + port);
});
