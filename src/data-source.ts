import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { User } from './entity/User';
import { settings } from './settings';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: settings.MYSQL_HOST,
  port: 3306,
  username: 'root',
  password: settings.MYSQL_PASSWORD,
  database: settings.MYSQL_DATABASE,
  synchronize: settings.MYSQL_SYNCHRONIZE,
  logging: settings.MYSQL_LOGGING,
  entities: [User],
  migrations: [],
  subscribers: [],
});
