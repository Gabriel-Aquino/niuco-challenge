import { UsersBackendDTO } from 'src/domain/repository/dto/users-backend-dto'
import { UsersDTO } from 'src/domain/repository/dto/users-dto';
import { Users } from 'src/domain/users/entity/users-entity'
import AppError from 'src/shared/errors/app-error';
import httpStatusCodes from 'src/shared/utils/http-status-codes';
import CheckIfIsPaying from './check-if-is-paying';
import hiddenEmail from './hidden-email';

const convertToUsersEntity = (user: UsersBackendDTO): UsersDTO => {
  if (user.status === null || user.status === undefined) {
    throw new AppError('status was not provided by service', httpStatusCodes.INTERNAL_SERVER, 'SERVER_ERROR');
  }
  const checkIfIsPaying = new CheckIfIsPaying();
  const isActive = (user.status !== 'disabled');
  const lastActivity = new Date(user.last_activity * 1000);
  const isPaying = (isActive === true ? checkIfIsPaying.isPaying(user.role) : false)
  const email = hiddenEmail(user.email);

  const usersEntity = new Users(
    user.id,
    user.name,
    email,
    lastActivity,
    isActive,
    isPaying,
    user.role,
  )
  return {
    id: usersEntity.id,
    name: usersEntity.name,
    email: usersEntity.email,
    lastActivity,
    isActive: usersEntity.isActive,
    isPaying: usersEntity.isPaying,
    role: usersEntity.role,
  }
}

export default convertToUsersEntity
