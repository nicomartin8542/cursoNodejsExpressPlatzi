import { Strategy } from 'passport-local';
import { getValidUserPassword } from '../../../services/auth.services.js';

const LocalStrategy = new Strategy(
  {
    usernameField: 'email',
    passwordField: 'password',
  },
  async (email, password, done) => {
    try {
      const user = await getValidUserPassword(email, password);
      done(null, user);
    } catch (error) {
      done(error, false);
    }
  }
);
export default LocalStrategy;
