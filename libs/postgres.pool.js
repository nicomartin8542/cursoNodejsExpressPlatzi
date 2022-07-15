import pg from 'pg';
import boom from '@hapi/boom';
import config from '../config/config.js';

const { Pool } = pg;
const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;
const pool = new Pool({ connectionString: URI });

pool.on('error', (err) => {
  boom.conflict(err);
});

export default pool;
