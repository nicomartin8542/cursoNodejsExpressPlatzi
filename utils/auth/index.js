import passport from 'passport';
import LocalStrategy from './strategies/local.statregies.js';
import JwtStrategy from './strategies/jwt.statregies.js';

passport.use(LocalStrategy);
passport.use(JwtStrategy);
