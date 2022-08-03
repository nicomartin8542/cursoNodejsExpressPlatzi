'use strict';
import { CustomerSchema, CUSTOMER_TABLE } from '../models/customer.model.js';

export const up = async (queryInterface) => {
  await queryInterface.createTable(CUSTOMER_TABLE, CustomerSchema);
};
export const down = async (queryInterface) => {
  await queryInterface.dropTable(CUSTOMER_TABLE);
};
