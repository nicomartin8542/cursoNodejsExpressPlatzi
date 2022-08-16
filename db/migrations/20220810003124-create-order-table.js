'use strict';
import { DataTypes, Sequelize } from 'sequelize';
import { CUSTOMER_TABLE } from '../models/customer.model.js';
import { ORDER_TABLE } from './../models/order.model.js';

export const up = async (queryInterface) => {
  await queryInterface.createTable(ORDER_TABLE, {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    costumerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'costumer_id',
      references: {
        model: CUSTOMER_TABLE,
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      field: 'created_at',
      defaultValue: Sequelize.NOW,
    },
  });
};
export const down = async (queryInterface) => {
  await queryInterface.dropTable(ORDER_TABLE);
};
