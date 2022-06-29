import UsersRepositoryInterface from 'src/domain/repository/users-repository-interface';
import { Users } from 'src/domain/users/entity/users-entity';
import CheckIfIsPaying from '../utils/check-if-is-paying';

export default class FindAllUsersService {
  constructor(private usersRepository: UsersRepositoryInterface) {}

  public async execute(): Promise<Users[]> {
    const checkIfIsPaying = new CheckIfIsPaying();
    const apiUsers = await this.usersRepository.find();
    console.log(apiUsers)
    return apiUsers.map((user) => {
      const isActive = (user.status === 'enabled');
      const lastActivity = new Date(user.last_activity);
      const isPaying = checkIfIsPaying.isPaying(user.role)
      return new Users(
        user.id,
        user.name,
        user.email,
        lastActivity,
        isActive,
        isPaying,
        user.role,
      )
    })
  }
}
