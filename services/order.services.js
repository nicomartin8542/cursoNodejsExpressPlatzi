import sequelize from '../libs/sequelize.js';
import boom from '@hapi/boom';
const { models } = sequelize;

export const getByid = async (req, res, next) => {
  try {
    const order = await models.Order.findByPk(req.params.id, {
      include: [
        {
          association: 'costumer',
          include: ['user'],
        },
      ],
    });
    if (!order) throw boom.notFound('Order not found');
    res.json(order);
  } catch (error) {
    next(error);
  }
};

export const getAll = async (req, res, next) => {
  try {
    const orders = await models.Order.findAll({
      include: [
        {
          association: 'costumer',
          include: ['user'],
        },
      ],
    });
    res.json(orders);
  } catch (error) {
    next(error);
  }
};

export const create = async (req, res, next) => {
  try {
    const newOrder = await models.Order.create(req.body);
    res.json(newOrder);
  } catch (error) {
    next(error);
  }
};