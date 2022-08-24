import sequelize from '../libs/sequelize.js';
import boom from '@hapi/boom';
const { models } = sequelize;

export const getByid = async (req, res, next) => {
  try {
    const userInclude = {
      model: models.User,
      as: 'user',
      attributes: { exclude: ['password'] },
    };
    const order = await models.Order.findByPk(req.params.id, {
      include: [
        {
          association: 'costumer',
          include: [userInclude],
        },
        'items',
      ],
    });
    if (!order) throw boom.notFound('Order not found');
    res.json(order);
  } catch (error) {
    next(error);
  }
};

export const getByUser = async (req, res, next) => {
  try {
    const userId = req.user.sub;
    const userInclude = {
      model: models.User,
      as: 'user',
      attributes: { exclude: ['password'] },
    };
    const orders = await models.Order.findAll({
      where: {
        '$costumer.user.id$': userId,
      },
      include: [
        {
          association: 'costumer',
          include: [userInclude],
        },
        'items',
      ],
    });
    res.json(orders);
  } catch (error) {
    next(error);
  }
};

export const getAll = async (req, res, next) => {
  try {
    const orders = await models.Order.findAll();
    console.log(orders);
    res.json(orders);
  } catch (error) {
    next(error);
  }
};

export const createOrder = async (req, res, next) => {
  try {
    const userId = req.user.sub;
    const customer = await models.Customer.findOne({
      where: { userId },
    });
    if (!customer) throw boom.notFound('User not found with customer');
    const newOrder = await models.Order.create({ costumerId: customer.id });
    res.json(newOrder);
  } catch (error) {
    next(error);
  }
};

export const addItems = async (req, res, next) => {
  try {
    const newItem = await models.OrderProduct.create(req.body);
    res.json(newItem);
  } catch (error) {
    next(error);
  }
};
