import { UsersDTO } from 'src/domain/repository/dto/users-dto';
import UsersRepositoryInterface from 'src/domain/repository/users-repository-interface';
import 'express-async-errors'
import convertToUsersEntity from './utils/convert-to-users-entity';

export default class FindAllUsersService {
  constructor(private usersRepository: UsersRepositoryInterface) {}

  public async execute(): Promise<UsersDTO[]> {
    const apiUsers = await this.usersRepository.find();
    return apiUsers.map((user) => convertToUsersEntity(user))
  }
}
