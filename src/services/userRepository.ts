import { User } from '../entity/User';

export interface IUserRepository {
  get(): Promise<User[] | null>;
  //getById(id: number): Promise<User | null>;
  add(user: User): Promise<User | null>;
  //delete(id: number): Promise<User | null>;
}
