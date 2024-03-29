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

  //Campo virtual, no existe en la base de datos, sirver para sacar totales
  //total: {
  //  type: DataTypes.VIRTUAL,
  //  get() {
  //    if (this.items.length > 0) {
  //      return this.items.reduce((total, item) => {
  //        return total + item.price * item.OrderProduct.amount;
  //      }, 0);
  //    }
  //  },
  //},
};

export class Order extends Model {
  static associate(models) {
    this.belongsTo(models.Customer, {
      as: 'costumer',
    });
    this.belongsToMany(models.Product, {
      as: 'items',
      through: models.OrderProduct,
      foreignKey: 'orderId',
      otherKey: 'productId',
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
