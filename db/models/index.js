import { User, UserSchema } from './user.model.js';

const setUpModels = (sequelize) => {
  User.init(UserSchema, User.config(sequelize));
};

export default setUpModels;
