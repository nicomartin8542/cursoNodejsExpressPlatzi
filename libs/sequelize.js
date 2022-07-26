import { Sequelize } from 'sequelize';
import config from '../config/config.js';
import setUpModels from '../db/models/index.js';

//Variables de entorno
const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const DIALECT = encodeURIComponent(config.dbDialect);
const URI = `${DIALECT}://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const sequelize = new Sequelize(URI, {
  dialect: DIALECT,
  logQueryParameters: true,
});

// Configuracion inicial de cada modelo
setUpModels(sequelize);

// Hagarro los modelos y crea la esctructura en la base de datos - No recomendable
//sequelize.sync();

export default sequelize;
