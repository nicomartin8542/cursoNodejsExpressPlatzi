'use strict';
import { USER_TABLE, UserSchema } from './../models/user.model.js';

export const up = async (queryInterface) => {
  await queryInterface.addColumn(USER_TABLE, 'role', UserSchema.role);
};
export const down = async (queryInterface) => {
  await queryInterface.removeColumn(USER_TABLE, 'role');
};
