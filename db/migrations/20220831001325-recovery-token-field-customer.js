'use strict';
import { DataTypes } from 'sequelize';
import { USER_TABLE } from './../models/user.model.js';

export const up = async (queryInterface) => {
  // -->> nombre Tabla --> nombre campo en base de datos --> nombre campo en modelo
  await queryInterface.addColumn(USER_TABLE, 'recovery_token', {
    field: 'recovery_token',
    allowNull: true,
    type: DataTypes.STRING,
  });
};
export const down = async (queryInterface) => {
  await queryInterface.removeColumn(USER_TABLE, 'recovery_token');
};
