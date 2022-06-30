import { Request, Response } from 'express';
import httpStatusCodes from 'src/shared/utils/http-status-codes';
import FindUsersByNameService from 'src/usecases/users/find-users-by-name-service';
import UsersRepository from '../repository/users-repository';

export default class FindUsersByNameController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const usersRepository = new UsersRepository();
    const findUserByNameService = new FindUsersByNameService(usersRepository);

    const user = await findUserByNameService.execute(request.query.name as string);

    return response.status(httpStatusCodes.OK).json(user);
  }
}
