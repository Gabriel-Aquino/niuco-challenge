import { Request, Response } from 'express';
import httpStatusCodes from 'src/shared/utils/http-status-codes';
import FindUsersByIdService from 'src/usecases/users/find-users-by-id-service';
import UsersRepository from '../repository/users-repository';

export default class FindUsersByIdController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params
    const usersRepository = new UsersRepository();
    const findUserByIdService = new FindUsersByIdService(usersRepository);
    const user = await findUserByIdService.execute(id);

    return response.status(httpStatusCodes.OK).json(user);
  }
}
