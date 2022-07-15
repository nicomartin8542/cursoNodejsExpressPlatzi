import 'dotenv/config';

const config = {
  env: process.env.NODE_ENV || 'dev',
  port: process.env.PORT || 3000,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST || 'localhost',
  dbPort: process.env.DB_PORT || 5433,
  dbName: process.env.DB_NAME,
};

export default config;
