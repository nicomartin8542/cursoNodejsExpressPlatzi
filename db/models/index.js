import { User, UserSchema } from './user.model.js';
import { CustomerSchema, Customer } from './customer.model.js';
import { Category, CategorySchema } from './category.model.js';
import { Product, ProductSchema } from './product.model.js';
import { Order, OrderSchema } from './order.model.js';
import { OrderProduct, OrderProductSchema } from './order-product.model.js';

const setUpModels = (sequelize) => {
  User.init(UserSchema, User.config(sequelize));
  Customer.init(CustomerSchema, Customer.config(sequelize));
  Category.init(CategorySchema, Category.config(sequelize));
  Product.init(ProductSchema, Product.config(sequelize));
  Order.init(OrderSchema, Order.config(sequelize));
  OrderProduct.init(OrderProductSchema, OrderProduct.config(sequelize));

  // Associations
  User.associate(sequelize.models);
  Customer.associate(sequelize.models);
  Category.associate(sequelize.models);
  Product.associate(sequelize.models);
  Order.associate(sequelize.models);
};

export default setUpModels;
