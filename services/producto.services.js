import boom from '@hapi/boom';
import sequelize from '../libs/sequelize.js';
const { models } = sequelize;

//Obtener producto por id
export const getFindId = async (req, res, next) => {
  try {
    const product = await models.Product.findByPk(req.params.id, {
      include: ['category'],
    });
    if (!product) throw boom.notFound('Product not found');
    res.json(product);
  } catch (error) {
    next(error);
  }
};

//Obtener todos los productos
export const getAll = async (req, res, next) => {
  try {
    const pruducts = await models.Product.findAll({
      include: ['category'],
    });
    res.json(pruducts);
  } catch (error) {
    next(error);
  }
};

//Crear producto
export const crear = async (req, res, next) => {
  try {
    const product = await models.Product.create(req.body);
    res.json(product);
  } catch (error) {
    next(error);
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
