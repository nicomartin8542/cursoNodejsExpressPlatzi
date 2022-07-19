import boom from '@hapi/boom';
import sequelize from '../libs/sequelize.js';
const { models } = sequelize;

export const getAll = async (req, res, next) => {
  try {
    const data = await models.User.findAll();
    !data && next(boom.badData('La base de datos esta vacia'));
    res.json(data);
  } catch (error) {
    next(error);
  }
};
