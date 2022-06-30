import FakeUsersRepository from 'src/infra/repository/fakes/fake-users-repository'
import AppError from 'src/shared/errors/app-error'
import httpStatusCodes from 'src/shared/utils/http-status-codes'
import FindUsersByIdService from './find-users-by-id-service'
import convertToUsersEntity from './utils/convert-to-users-entity'

describe('must validate find by id users service', () => {
  const usersRepository = new FakeUsersRepository()

  it('should returns an user', async () => {
    const user2 = await usersRepository.create({
      id: '222',
      name: 'GABRIEL',
      email: 'EMAIL2@email.com',
      last_activity: 22222222,
      status: 'disabled',
      role: 'system',
    })
    const userEntity2 = convertToUsersEntity(user2);
    const findByIdService = new FindUsersByIdService(usersRepository)
    const userFound = await findByIdService.execute(user2.id);

    expect(userFound).toStrictEqual(userEntity2)
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

      const findByIdService = new FindUsersByIdService(usersRepository)
      const userFound = await findByIdService.execute('non-existing-id');
    }).rejects.toEqual(new AppError('There is no user with provided id', httpStatusCodes.NOT_FOUND, 'NOT_FOUND'))
  })
})
