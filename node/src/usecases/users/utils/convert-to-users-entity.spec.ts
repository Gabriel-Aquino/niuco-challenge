import { UsersDTO } from 'src/domain/repository/dto/users-dto';
import convertToUsersEntity from './convert-to-users-entity';
import hiddenEmail from './hidden-email';

describe('must validate convertToUsersEntity function', () => {
  const user = {
    id: '111',
    name: 'Aquino',
    email: 'email1@email.com',
    last_activity: 234231222,
    status: 'enabled',
    role: 'admin',
  };
  it('should returns an user entity', async () => {
    const userDTO: UsersDTO = {
      id: '111',
      name: 'Aquino',
      email: hiddenEmail('email1@email.com'),
      lastActivity: new Date(234231222 * 1000),
      isActive: true,
      isPaying: true,
      role: 'admin',
    };
    const userEntity = convertToUsersEntity(user)

    expect(userEntity).toStrictEqual(userDTO)
  })

  it('should throws error if role was not provided', async () => {
    expect(() => {
      convertToUsersEntity({
        id: '111',
        name: 'Aquino',
        email: 'email1@email.com',
        last_activity: 234231222,
        status: null as unknown as string,
        role: 'admin',
      })
    }).toThrowError('status was not provided by service')
  })
})
