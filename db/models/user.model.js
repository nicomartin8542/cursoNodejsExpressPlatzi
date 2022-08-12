import { Sequelize, Model, DataTypes } from 'sequelize';
import bcrypt from 'bcrypt';

//Nombre de la tabla en la base de datos
export const USER_TABLE = 'users';

//Campos de la tabla en la base de datos
export const UserSchema = {
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

  role: {
    allowNull: true,
    type: DataTypes.STRING,
    defaultValue: 'customer',
  },

  createAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  },
};

export class User extends Model {
  static associate(models) {
    this.hasOne(models.Customer, { as: 'customer', foreignKey: 'userId' });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: 'User',
      timestamps: false,
      hooks: {
        beforeCreate: async (user) => {
          user.password = await bcrypt.hash(user.password, 10);
        },
        afterCreate: async (user) => {
          delete user.dataValues.password;
        },
      },
    };
  }
}
