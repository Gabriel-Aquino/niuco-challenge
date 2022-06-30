import { UsersDTO } from 'src/domain/repository/dto/users-dto';
import UsersRepositoryInterface from 'src/domain/repository/users-repository-interface';
import 'express-async-errors'
import AppError from 'src/shared/errors/app-error';
import httpStatusCodes from 'src/shared/utils/http-status-codes';
import convertToUsersEntity from './utils/convert-to-users-entity';

export default class FindUsersByIdService {
  constructor(private usersRepository: UsersRepositoryInterface) {}

  public async execute(id: string): Promise<UsersDTO | undefined> {
    const userFound = await this.usersRepository.findUserById(id);
    if (!userFound) {
      throw new AppError('There is no user with provided id', httpStatusCodes.NOT_FOUND, 'NOT_FOUND')
    }
    return convertToUsersEntity(userFound)
  }
}
