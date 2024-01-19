import { IService } from './IService';
import { User } from '../entity/User';
import APIError from '../global/response/apierror';
import Err from '../global/response/errorcode';
import { AppDataSource } from '../data-source';

export class UserService implements IService {
  async get(): Promise<User[] | null> {
    try {
      const users = await AppDataSource.manager.find(User);

      return users;
    } catch (error) {
      return null;
    }
  }

  async add(model: User): Promise<User | null> {
    const { username, role, password, email } = model;
    const user = new User();
    user.username = username;
    user.role = role;
    user.password = password;
    user.email = email;
    try {
      const savedUser = await AppDataSource.manager.save(user);

      return savedUser;
    } catch (e) {
      console.log(e);
      return Promise.reject(
        new APIError('User Already exists', Err.EmailAlreadyExists)
      );
    }
  }
}
