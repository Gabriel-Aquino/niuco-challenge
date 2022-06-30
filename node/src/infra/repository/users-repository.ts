import { UsersBackendDTO } from 'src/domain/repository/dto/users-backend-dto';
import UsersRepositoryInterface from 'src/domain/repository/users-repository-interface';
import UsersModel from './users.model';

export default class UsersRepository implements UsersRepositoryInterface {
  async find(): Promise<UsersBackendDTO[]> {
    const usersModel = new UsersModel();
    const allUsers = usersModel.findAllUsers();
    return allUsers;
  }

  findUserById(id: string): Promise<UsersBackendDTO | undefined> {
    const usersModel = new UsersModel();
    const findUserById = usersModel.findUserById(id);
    return findUserById;
  }

  findUsersByName(name: string): Promise<UsersBackendDTO[] | undefined> {
    const usersModel = new UsersModel();
    const findUsersByName = usersModel.findUsersByName(name);
    return findUsersByName;
  }
}
