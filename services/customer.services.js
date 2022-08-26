import sequelize from '../libs/sequelize.js';
import boom from '@hapi/boom';
import { singToken } from './auth.services.js';
const { models } = sequelize;

export const getByid = async (req, res, next) => {
  try {
    const user = await models.Customer.findByPk(req.params.id, {
      include: [
        {
          model: models.User,
          as: 'user',
          attributes: { exclude: ['password'] },
        },
      ],
    });
    if (!user) throw boom.notFound('User not found');
    res.json(user);
  } catch (error) {
    next(error);
  }
};

export const getAll = async (req, res, next) => {
  try {
    const users = await models.Customer.findAll();
    res.json(users);
  } catch (error) {
    next(error);
  }
};

export const createCustomer = async (req, res, next) => {
  try {
    const newCustomer = await models.Customer.create(req.body, {
      include: ['user'],
    });
    const token = singToken(newCustomer.user);
    res.json({ newCustomer, token });
  } catch (error) {
    next(error);
  }
};

export const updateCustomer = async (req, res, next) => {
  try {
    const customer = await models.Customer.findByPk(req.params.id);
    if (!customer) throw boom.notFound('User not found');
    const rta = await customer.update(req.body);
    res.json(rta);
  } catch (error) {
    next(error);
  }
};

export const deleteCustomer = async (req, res, next) => {
  try {
    const customer = await models.Customer.findByPk(req.params.id);
    if (!customer) throw boom.notFound('User not found');
    await customer.destroy();
    res.json({ message: 'Customer deleted! ', email: customer.email });
  } catch (error) {
    next(error);
  }
};
