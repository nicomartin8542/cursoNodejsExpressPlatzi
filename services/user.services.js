import sequelize from '../libs/sequelize.js';
import boom from '@hapi/boom';
import { singToken } from './auth.services.js';
const { models } = sequelize;

export const getByid = async (req, res, next) => {
  const { id } = req.params;
  try {
    const data = await models.User.findByPk(id, {
      attributes: { exclude: ['password'] },
      include: ['customer'],
    });
    if (!data) throw boom.notFound('User not found');
    delete data.password;
    res.json(data);
  } catch (error) {
    next(error);
  }
};

export const findeOne = async (id) => {
  try {
    const user = await models.User.findByPk(id);
    if (!user) throw boom.notFound('User not found');
    return user;
  } catch (error) {
    return error;
  }
};

export const getByEmail = async (email) => {
  try {
    const user = await models.User.findOne({
      where: { email },
    });

    if (!user) throw boom.notFound('User not found');

    return user;
  } catch (error) {
    return error;
  }
};

export const getAll = async (req, res, next) => {
  try {
    const data = await models.User.findAll({
      attributes: { exclude: ['password'] },
      order: [['id', 'ASC']],
      include: ['customer'],
    });
    res.json(data);
  } catch (error) {
    next(error);
  }
};

export const createUserPost = async (req, res, next) => {
  const body = req.body;
  try {
    const user = await models.User.create(body);
    const token = singToken(user);
    res.json({ user, token });
  } catch (error) {
    next(error);
  }
};

export const updateUserPatch = async (req, res, next) => {
  const { id } = req.params;
  const body = req.body;

  try {
    const user = await models.User.findByPk(id);
    if (!user) throw boom.notFound('User not found');
    const rta = await user.update(body);
    delete rta.dataValues.password;
    res.json(rta);
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await models.User.findByPk(id);
    if (!user) throw boom.notFound('User not found');
    await user.destroy();
    res.json({ message: 'User deleted! ', email: user.email });
  } catch (error) {
    next(error);
  }
};
