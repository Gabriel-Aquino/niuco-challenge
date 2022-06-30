import FakeUsersRepository from 'src/infra/repository/fakes/fake-users-repository'
import FindAllUsersService from './find-all-users-service'
import convertToUsersEntity from './utils/convert-to-users-entity'

describe('must validate find all users service', () => {
  it('should returns all users', async () => {
    const usersRepository = new FakeUsersRepository()
    const user1 = await usersRepository.create({
      id: '111',
      name: 'Aquino',
      email: 'email1@email.com',
      last_activity: 234231222,
      status: 'enabled',
      role: 'admin',
    });

    const user2 = await usersRepository.create({
      id: '222',
      name: 'GABRIEL',
      email: 'EMAIL2@email.com',
      last_activity: 22222222,
      status: 'disabled',
      role: 'system',
    })
    const userEntity1 = convertToUsersEntity(user1);
    const userEntity2 = convertToUsersEntity(user2);
    const findAllUsersService = new FindAllUsersService(usersRepository)
    const allUsers = await findAllUsersService.execute();

    expect(allUsers).toHaveLength(2)
    expect(allUsers).toContainEqual(userEntity1)
    expect(allUsers).toContainEqual(userEntity2)
  })

  it('should check if email is hidden', async () => {
    const usersRepository = new FakeUsersRepository()
    const user1 = await usersRepository.create({
      id: '111',
      name: 'Aquino',
      email: 'email1@email.com',
      last_activity: 234231222,
      status: 'enabled',
      role: 'admin',
    });

    const userEntity = convertToUsersEntity(user1);

    expect(userEntity.email).toContain('*')
  })

  it('should check if isPaying is false if isActive is false', async () => {
    const usersRepository = new FakeUsersRepository()
    const user1 = await usersRepository.create({
      id: '111',
      name: 'Aquino',
      email: 'email1@email.com',
      last_activity: 234231222,
      status: 'disabled',
      role: 'admin',
    });

    const userEntity = convertToUsersEntity(user1);

    expect(userEntity.isPaying).toBe(false)
  })
})
