'use strict';
import { PRODUCT_TABLE, ProductSchema } from './../models/product.model.js';

export const up = async (queryInterface) => {
  await queryInterface.createTable(PRODUCT_TABLE, ProductSchema);
};
export const down = async (queryInterface) => {
  await queryInterface.dropTable(PRODUCT_TABLE);
};
