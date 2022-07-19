import { Sequelize } from 'sequelize';
import config from '../config/config.js';
import setUpModels from '../db/models/index.js';

//Variables de entorno
const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const sequelize = new Sequelize(URI, {
  dialect: 'postgres',
  logQueryParameters: true,
});

//Configuracion inicial de cada modelo
setUpModels(sequelize);

//Hagarro los modelos y crea la esctructura en la base de datos
sequelize.sync();

export default sequelize;
