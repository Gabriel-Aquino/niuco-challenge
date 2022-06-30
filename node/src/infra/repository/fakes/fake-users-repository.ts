import { UsersBackendDTO } from 'src/domain/repository/dto/users-backend-dto';
import UsersRepositoryInterface from 'src/domain/repository/users-repository-interface';

export default class FakeUsersRepository implements UsersRepositoryInterface {
  private usersModel: UsersBackendDTO[] = [];

  async find(): Promise<UsersBackendDTO[]> {
    return this.usersModel.map((user) => user)
  }

  async create(user: UsersBackendDTO): Promise<UsersBackendDTO> {
    this.usersModel.push(user)
    return user;
  }

  async findUserById(id: string): Promise<UsersBackendDTO | undefined> {
    const userFound = this.usersModel.find((user) => user.id === id)
    return userFound;
  }

  async findUsersByName(name: string): Promise<UsersBackendDTO[] | undefined> {
    const findUsersByName = this.usersModel.filter((user) => user.name === name)
    return findUsersByName;
  }
}
