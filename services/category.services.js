import sequelize from '../libs/sequelize.js';
import boom from '@hapi/boom';
const { models } = sequelize;

export const getByid = async (req, res, next) => {
  try {
    const category = await models.Category.findByPk(req.params.id, {
      include: ['products'],
    });
    if (!category) throw boom.notFound('User not found');
    res.json(category);
  } catch (error) {
    next(error);
  }
};

export const getAll = async (req, res, next) => {
  try {
    const categories = await models.Category.findAll();
    res.json(categories);
  } catch (error) {
    next(error);
  }
};

export const createCategory = async (req, res, next) => {
  try {
    const newCategory = await models.Category.create(req.body);
    res.json(newCategory);
  } catch (error) {
    next(error);
  }
};

export const updateCategory = async (req, res, next) => {
  try {
    const category = await models.Category.findByPk(req.params.id);
    if (!category) throw boom.notFound('User not found');
    const rta = await category.update(req.body);
    res.json(rta);
  } catch (error) {
    next(error);
  }
};

export const deleteCategory = async (req, res, next) => {
  try {
    const category = await models.category.findByPk(req.params.id);
    if (!category) throw boom.notFound('User not found');
    await category.destroy();
    res.json({ message: 'category deleted! ' });
  } catch (error) {
    next(error);
  }
};
