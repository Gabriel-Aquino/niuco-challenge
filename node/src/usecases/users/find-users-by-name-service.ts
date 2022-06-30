import { UsersDTO } from 'src/domain/repository/dto/users-dto';
import UsersRepositoryInterface from 'src/domain/repository/users-repository-interface';
import 'express-async-errors'
import AppError from 'src/shared/errors/app-error';
import httpStatusCodes from 'src/shared/utils/http-status-codes';
import convertToUsersEntity from './utils/convert-to-users-entity';

export default class FindUsersByNameService {
  constructor(private usersRepository: UsersRepositoryInterface) {}

  public async execute(name: string): Promise<UsersDTO[]> {
    const userFound = await this.usersRepository.findUsersByName(name);
    if (!userFound) {
      throw new AppError('There is no user with name provided', httpStatusCodes.NOT_FOUND, 'NOT_FOUND')
    }
    return userFound.map((user) => convertToUsersEntity(user))
  }
}
