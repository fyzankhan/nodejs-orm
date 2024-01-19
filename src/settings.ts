import 'dotenv/config';

console.log('logging environment variables');
console.log(process.env);

export const settings = {
  ENVIRONMENT: process.env.ENVIRONMENT,
  MYSQL_HOST: process.env.MYSQL_HOST,
  MYSQL_PORT: process.env.MYSQL_PORT,
  //MYSQL_USER: process.env.MYSQL_USER,
  MYSQL_PASSWORD: process.env.MYSQL_PASSWORD,
  MYSQL_DATABASE: process.env.MYSQL_DATABASE,
  MYSQL_SYNCHRONIZE: true,
  MYSQL_LOGGING: false,
  EXPRESS_PORT: process.env.EXPRESS_PORT,
};
