import UsersRepository from 'src/infra/repository/users-repository'
import FindAllUsersService from './find-all-users-service'

describe('must validate users service', () => {
  it('should returns all users', () => {
    const usersTest = [
      {
        id: '213',
        name: 'Gabriel',
        email: 'email@email.com',
        lastActivity: new Date(),
        isPaying: true,
        isActive: true,
        role: 'admin',
      },
      {
        id: '111',
        name: 'Aquino',
        email: 'email1@email.com',
        lastActivity: new Date(234231222),
        isPaying: false,
        isActive: true,
        role: 'viewer',
      },
    ]
    const usersRepository = new UsersRepository()
    const findAllUsersService = new FindAllUsersService(usersRepository)
    const allUsers = findAllUsersService.execute();

    expect(allUsers).toStrictEqual(usersTest)
  })
})
