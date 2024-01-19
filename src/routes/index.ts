import { Router } from 'express';
import user from './userRouter';

const routes = Router();

routes.use('/v1/user', user);

export { routes };
