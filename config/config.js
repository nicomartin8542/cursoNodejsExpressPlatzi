import 'dotenv/config';

const config = {
  env: process.env.NODE_ENV || 'dev',
  port: process.env.PORT || 3000,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbPort: process.env.DB_PORT,
  dbName: process.env.DB_NAME,
  dbDialect: process.env.DB_DIALECT,
  jwtSecret: process.env.JWT_SECRET,
  jwtExpiration: process.env.JWT_EXPIRES,
  portMail: process.env.PORT_MAIL,
  sftpMail: process.env.SFTP_MAIL,
  userMail: process.env.USER_MAIL,
  passMail: process.env.PASSWORD_MAIL,
  jwtSecretEmail: process.env.JWT_SECRET_EMAIL,
};

export default config;
