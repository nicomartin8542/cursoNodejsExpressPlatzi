'use strict';
import { DataTypes, Sequelize } from 'sequelize';
import { CUSTOMER_TABLE } from '../models/customer.model.js';
import { USER_TABLE } from '../models/user.model.js';

export const up = async (queryInterface) => {
  await queryInterface.createTable(CUSTOMER_TABLE, {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },

    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },

    lastName: {
      allowNull: false,
      type: DataTypes.STRING,
      field: 'last_name',
    },

    phone: {
      allowNull: true,
      type: DataTypes.STRING,
    },

    createAt: {
      allowNull: false,
      type: DataTypes.DATE,
      field: 'created_at',
      defaultValue: Sequelize.NOW,
    },

    userId: {
      field: 'user_id',
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: USER_TABLE,
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    },
  });
};
export const down = async (queryInterface) => {
  await queryInterface.dropTable(CUSTOMER_TABLE);
};
