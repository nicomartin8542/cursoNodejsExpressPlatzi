const { DataTypes, Sequelize } = require('sequelize');
const { USER_TABLE } = require('./../models/user.model.js');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(USER_TABLE, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },

      email: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
      },

      password: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      createAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'created_at',
        defaultValue: Sequelize.NOW,
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(USER_TABLE);
  },
};
