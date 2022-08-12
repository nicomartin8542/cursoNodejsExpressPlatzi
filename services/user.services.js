import sequelize from '../libs/sequelize.js';
import boom from '@hapi/boom';
const { models } = sequelize;

export const getByid = async (req, res, next) => {
  const { id } = req.params;
  try {
    const data = await models.User.findByPk(id, {
      include: ['customer'],
    });
    if (!data) throw boom.notFound('User not found');
    res.json(data);
  } catch (error) {
    next(error);
  }
};

export const getAll = async (req, res, next) => {
  try {
    const data = await models.User.findAll({
      include: ['customer'],
    });
    delete data.password;
    res.json(data);
  } catch (error) {
    next(error);
  }
};

export const createUserPost = async (req, res, next) => {
  const body = req.body;
  try {
    const data = await models.User.create(body);
    res.json(data);
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
