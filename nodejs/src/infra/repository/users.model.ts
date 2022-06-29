import axios from 'axios';
import { UsersDTO } from 'src/domain/repository/dto/users-dto';
import AppError from 'src/shared/errors/app-error';
import httpStatusCodes from 'src/shared/utils/http-status-codes';

export default class UsersModel {
  async findAllUsers(): Promise<UsersDTO[]> {
    try {
      const usersAPI = await axios.get(
      process.env.URL as string,
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      },
      )

      const users = usersAPI.data;
      return users;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new AppError(`Unexpected error ${error.message}`, error.response!.status, error.code!, error.response!.data)
      }
      throw new AppError('Internal Server Error', httpStatusCodes.INTERNAL_SERVER, 'SERVER ERROR');
    }
  }

  async findUserById(id: string): Promise<UsersDTO> {
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

  async findUsersByName(name: string): Promise<UsersDTO[]> {
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

  async findUsersByRole(role: string): Promise<UsersDTO[]> {
    try {
      const userAPI = await axios.get(
        `${process.env.URL}?role_like=${role}`,
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
