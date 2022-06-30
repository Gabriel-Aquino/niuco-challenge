import { UsersDTO } from 'src/domain/repository/dto/users-dto';
import convertToUsersEntity from './convert-to-users-entity';
import hiddenEmail from './hidden-email';

describe('must validate hiddenEmail function', () => {
  const email = 'email1@email.com';
  it('should returns an hidden email', async () => {
    const emailWithoutCharacters = hiddenEmail(email)

    expect(emailWithoutCharacters).toBe('em**l1@email.com')
  })
})
