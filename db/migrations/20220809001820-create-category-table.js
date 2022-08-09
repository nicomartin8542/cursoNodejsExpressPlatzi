'use strict';
import { CATEGORY_TABLE, CategorySchema } from './../models/category.model.js';

export const up = async (queryInterface) => {
  await queryInterface.createTable(CATEGORY_TABLE, CategorySchema);
};
export const down = async (queryInterface) => {
  await queryInterface.dropTable(CATEGORY_TABLE);
};
