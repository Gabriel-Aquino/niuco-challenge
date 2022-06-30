import FakeUsersRepository from 'src/infra/repository/fakes/fake-users-repository'
import AppError from 'src/shared/errors/app-error'
import httpStatusCodes from 'src/shared/utils/http-status-codes'
import FindUsersByNameService from './find-users-by-name-service'
import convertToUsersEntity from './utils/convert-to-users-entity'

describe('must validate find by name users service', () => {
  const usersRepository = new FakeUsersRepository()

  it('should returns an user', async () => {
    const user1 = await usersRepository.create({
      id: '112323',
      name: 'GABRIEL',
      email: 'AQUINO@email.com',
      last_activity: 111111111123,
      status: 'enabled',
      role: 'admin',
    })

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
    const findByNameService = new FindUsersByNameService(usersRepository)
    const userFound = await findByNameService.execute(userEntity1.name);

    expect(userFound).toHaveLength(2)
    expect(userFound[0]).toStrictEqual(userEntity1)
    expect(userFound[1]).toStrictEqual(userEntity2)
  })

  it('should throws error if user was not found', async () => {
    expect(async () => {
      await usersRepository.create({
        id: '222',
        name: 'GABRIEL',
        email: 'EMAIL2@email.com',
        last_activity: 22222222,
        status: 'disabled',
        role: 'system',
      })

      const findByIdService = new FindUsersByNameService(usersRepository)
      const userFound = await findByIdService.execute('non-existing-name');
    }).rejects.toEqual(new AppError('There is no user with name provided', httpStatusCodes.NOT_FOUND, 'NOT_FOUND'))
  })
})
