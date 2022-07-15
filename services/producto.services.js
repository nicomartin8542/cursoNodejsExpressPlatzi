import { faker } from '@faker-js/faker';
import products from '../utils/data.js';
import boom from '@hapi/boom';
import pull from '../libs/postgres.pool.js';

//Obtener producto por id
export const getFindId = async (req, res) => {
  res.json(products.filter((prod) => prod.id === parseInt(req.params.id)));
};

//Obtener todos los productos
export const getAll = async (req, res, next) => {
  try {
    const rta = await pull.query('SELECT * FROM task '); //await client.query('select * from task');
    res.json(rta.rows);
  } catch (error) {
    next(error);
  }
};

//Crear producto
export const crear = async (req, res) => {
  const body = req.body;

  const newProduct = {
    id: faker.datatype.number(),
    ...body,
  };
  try {
    products.push(newProduct);

    res.status(201).json({
      message: 'Created',
      data: newProduct,
    });
  } catch (error) {
    res.status(400).json({
      menssage: 'No se pudo crear',
      error,
    });
  }
};

//Actualizar producto
export const actualizar = async (req, res) => {
  const id = req.params;
  const body = req.body;

  res.json({
    message: 'Pruducts update',
    id,
    data: body,
  });
};

//Borrar producto
export const borrar = async (req, res) => {
  const { id } = req.params;
  res.json({ message: 'Pruducts delete', id });
};
