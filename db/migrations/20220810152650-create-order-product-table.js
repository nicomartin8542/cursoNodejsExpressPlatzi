'use strict';
import {
  ORDER_PRODUCT_TABLE,
  OrderProductSchema,
} from './../models/order-product.model.js';

export const up = async (queryInterface) => {
  await queryInterface.createTable(ORDER_PRODUCT_TABLE, OrderProductSchema);
};
export const down = async (queryInterface) => {
  await queryInterface.dropTable(ORDER_PRODUCT_TABLE);
};
