const { UserSchema, USER_TABLE } = require('./../models/user.model.js');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(USER_TABLE, UserSchema);
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(USER_TABLE);
  },
};
