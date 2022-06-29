import { UsersDTO } from 'src/domain/repository/dto/users-dto';
import UsersRepositoryInterface from 'src/domain/repository/users-repository-interface';
import UsersModel from './users.model';

export default class UsersRepository implements UsersRepositoryInterface {
  async find(): Promise<UsersDTO[]> {
    const usersModel = new UsersModel();
    const allUsers = usersModel.findAllUsers();
    return allUsers;
  }

  findUserById(id: string): Promise<UsersDTO> {
    const usersModel = new UsersModel();
    const findUserById = usersModel.findUserById(id);
    return findUserById;
  }

  findUsersByName(name: string): Promise<UsersDTO[]> {
    const usersModel = new UsersModel();
    const findUsersByName = usersModel.findUsersByName(name);
    return findUsersByName;
  }

  findUsersByRole(role: string): Promise<UsersDTO[]> {
    const usersModel = new UsersModel();
    const findUsersByRole = usersModel.findUsersByRole(role);
    return findUsersByRole;
  }
}
