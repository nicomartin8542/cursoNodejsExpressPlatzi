import { Model, DataTypes, Sequelize } from 'sequelize';
import { CUSTOMER_TABLE } from '../models/customer.model.js';
export const ORDER_TABLE = 'orders';

export const OrderSchema = {
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
};

export class Order extends Model {
  static associate(models) {
    this.belongsTo(models.Customer, {
      as: 'costumer',
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: ORDER_TABLE,
      modelName: 'Order',
      timestamps: false,
    };
  }
}
