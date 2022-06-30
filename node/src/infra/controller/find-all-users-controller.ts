import { Request, Response } from 'express';
import httpStatusCodes from 'src/shared/utils/http-status-codes';
import FindAllUsersService from 'src/usecases/users/find-all-users-service';
import UsersRepository from '../repository/users-repository';

export default class FindAllUsersController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const usersRepository = new UsersRepository();
    const findAllUsersService = new FindAllUsersService(usersRepository);
    const allUsers = await findAllUsersService.execute();

    return response.status(httpStatusCodes.OK).json(allUsers);
  }
}
