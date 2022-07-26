import config from '../config/config';

//Variables de entorno
const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const DIALECT = config.dbDialect;
const URI = `${DIALECT}://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

export default {
  development: {
    url: URI,
    dialect: DIALECT,
  },
  production: {
    url: URI,
    dialect: DIALECT,
  },
};
