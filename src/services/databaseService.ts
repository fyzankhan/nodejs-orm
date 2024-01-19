import EventEmitter = require('events');
import { createConnection } from 'typeorm';

//import config from '../../config/config';
//import { Logger } from '../../lib/logger';
import { User } from '../entity/User';

class DatabaseService {
  public static emitter: EventEmitter = new EventEmitter();
  public static isConnected = false;
  //public static logger: any = new Logger();

  public static async getConnection(callback = null, wait = false) {
    DatabaseService.handleConnectionError();
    return await DatabaseService.createConnectionlocal();
  }

  public static async createConnectionlocal() {
    console.log('in createConnection');

    return await createConnection({
      type: 'mysql',
      host: 'db',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'mydatabase',
      synchronize: true,
      logging: false,
      entities: [User],
      migrations: [],
      subscribers: [],
    })
      .then(() => {
        DatabaseService.isConnected = true;
        console.log('info', 'database connected successfully');
      })
      .catch((err: Error) => {
        console.log('info', 'database connection error...retrying');

        console.log(err.message);
        DatabaseService.emitter.emit('DB_CONNECT_ERROR');
      });
  }
  public static async handleConnectionError() {
    console.log('in handleconnectionerror');
    DatabaseService.emitter.on('DB_CONNECT_ERROR', async () => {
      console.log('info', 'database connection error...retrying');
      setTimeout(async () => {
        await DatabaseService.createConnectionlocal();
      }, 3000);
    });
  }
}

export { DatabaseService };
