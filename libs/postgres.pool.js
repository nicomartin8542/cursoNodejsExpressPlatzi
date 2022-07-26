import pg from 'pg';
import boom from '@hapi/boom';
import config from '../config/config.js';
const { Pool } = pg;

// Variables de entorno
const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

// Inicializo conexion con la base de datos
const pool = new Pool({ connectionString: URI });

pool.on('error', (err) => {
  boom.conflict(err);
});

export default pool;
