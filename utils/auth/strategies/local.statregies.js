import { Strategy } from 'passport-local';
import boom from '@hapi/boom';
import bcrypt from 'bcrypt';
import { getByEmail } from '../../../services/user.services.js';

const LocalStrategy = new Strategy(
  {
    usernameField: 'email',
    passwordField: 'password',
  },
  async (email, password, done) => {
    try {
      const user = await getByEmail(email);

      // Verify that the user exists
      if (!user) return done(boom.unauthorized(), false);

      // Verify that the password is correct
      const isValid = await bcrypt.compare(password, user.password);
      if (!isValid) return done(boom.unauthorized(), false);

      delete user.dataValues.password;
      done(null, user);
    } catch (error) {
      done(error, false);
    }
  }
);
export default LocalStrategy;
