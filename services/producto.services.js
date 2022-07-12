import { faker } from '@faker-js/faker';

const upload = () => {
  let products = [];

  for (let i = 0; i < 100; i++) {
    products = [
      ...products,
      {
        id: faker.datatype.number(),
        users: faker.name.findName(),
        price: faker.commerce.price(),
      },
    ];
  }

  return products;
};

//Obtener producto por id
const getFindId = async (req, res) => {
  const products = upload();
  res.json(products.filter((prod) => prod.id === req.params.id));
};

//Obtener todos los productos
const getAll = async (req, res) => {
  res.json(upload());
};

//Crear producto
const crear = async (req, res) => {
  const body = req.body;
  try {
    res.status(201).json({
      message: 'Created',
      data: body,
    });
  } catch (error) {
    res.status(400).json({
      menssage: 'No se pudo crear',
      error,
    });
  }
};

//Actualizar producto
const actualizar = async (req, res) => {
  const id = req.params;
  const body = req.body;

  res.json({
    message: 'Pruducts update',
    id,
    data: body,
  });
};

//Borrar producto
const borrar = async (req, res) => {
  const { id } = req.params;
  res.json({ message: 'Pruducts delete', id });
};

export default {
  borrar,
  actualizar,
  crear,
  getAll,
  getFindId,
};
