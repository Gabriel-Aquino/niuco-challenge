import axios from 'axios';
import { UsersBackendDTO } from 'src/domain/repository/dto/users-backend-dto';
import AppError from 'src/shared/errors/app-error';
import httpStatusCodes from 'src/shared/utils/http-status-codes';
import { config } from 'dotenv';
import path from 'path';

config({ path: `${path.resolve('./')}/.env` });

export default class UsersModel {
  async findAllUsers(): Promise<UsersBackendDTO[]> {
    try {
      const usersAPI = await axios.get(
      process.env.URL as string,
      {
        proxy: undefined,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      },
      );

      const users = usersAPI.data;

      return users;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new AppError(`Unexpected error ${error.message}`, error.response!.status, error.code!, error.response!.data)
      }
      throw new AppError('Internal Server Error', httpStatusCodes.INTERNAL_SERVER, 'SERVER ERROR');
    }
  }

  async findUserById(id: string): Promise<UsersBackendDTO | undefined> {
    try {
      const userAPI = await axios.get(
        `${process.env.URL}/${id}`,
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        },
      )

      const userFound = userAPI.data;
      return userFound;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new AppError(`Unexpected error ${error.message}`, error.response!.status, error.code!, error.response!.data)
      }
      throw new AppError('Internal Server Error', httpStatusCodes.INTERNAL_SERVER, 'SERVER ERROR');
    }
  }

  async findUsersByName(name: string): Promise<UsersBackendDTO[] | undefined> {
    try {
      const userAPI = await axios.get(
        `${process.env.URL}?name_like=${name}`,
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        },
      )

      const userFound = userAPI.data;
      return userFound;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new AppError(`Unexpected error ${error.message}`, error.response!.status, error.code!, error.response!.data)
      }
      throw new AppError('Internal Server Error', httpStatusCodes.INTERNAL_SERVER, 'SERVER ERROR');
    }
  }
}
