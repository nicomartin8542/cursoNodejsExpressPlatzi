'use strict';
import { ORDER_TABLE, OrderSchema } from './../models/order.model.js';

export const up = async (queryInterface) => {
  await queryInterface.createTable(ORDER_TABLE, OrderSchema);
};
export const down = async (queryInterface) => {
  await queryInterface.dropTable(ORDER_TABLE);
};
