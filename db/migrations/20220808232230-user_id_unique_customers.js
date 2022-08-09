'use strict';
import { DataTypes } from 'sequelize';
import { CUSTOMER_TABLE } from '../models/customer.model.js';

export const up = async (queryInterface) => {
  await queryInterface.changeColumn(CUSTOMER_TABLE, 'user_id', {
    field: 'user_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    unique: true,
  });
};
export const down = async (queryInterface) => {
  await queryInterface.dropTable(CUSTOMER_TABLE);
};
