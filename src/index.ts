import * as http from 'http';
import { app } from './app';
import { AppDataSource } from './data-source';
import { settings } from './settings';

AppDataSource.initialize()
  .then(async () => {
    const server = http
      .createServer(app)
      .listen(settings.EXPRESS_PORT, async () => {
        console.log(
          'info',
          `Sample app listening on ${JSON.stringify(server.address())}`
        );
      });
  })
  .catch((error) => console.log(error));
