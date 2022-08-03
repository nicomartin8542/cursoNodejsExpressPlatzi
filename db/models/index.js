import { User, UserSchema } from './user.model.js';
import { CustomerSchema, Customer } from './customer.model.js';

const setUpModels = (sequelize) => {
  User.init(UserSchema, User.config(sequelize));
  Customer.init(CustomerSchema, Customer.config(sequelize));

  // Associations
  Customer.associate(sequelize.models);
};

export default setUpModels;
