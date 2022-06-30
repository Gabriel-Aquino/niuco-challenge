import { Users } from './users-entity'

describe('must validate users entity', () => {
  it('should returns an user', () => {
    const user = {
      id: '123',
      name: 'Gabriel',
      email: 'email@email.com',
      lastActivity: new Date(1648487089 * 1000),
      isPaying: true,
      isActive: true,
      role: 'admin',
    }

    const createdUser = new Users(user.id, user.name, user.email, user.lastActivity, user.isPaying, user.isActive, user.role);
    expect({
      id: createdUser.id,
      name: createdUser.name,
      email: createdUser.email,
      lastActivity: createdUser.lastActivity,
      isPaying: createdUser.isPaying,
      isActive: createdUser.isActive,
      role: createdUser.role,
    }).toStrictEqual(user)
  })

  it('should throws an error if ID was not provided', () => {
    expect(() => {
      const user = {
        id: '',
        name: 'Gabriel',
        email: 'email@email.com',
        lastActivity: new Date(1648487089 * 1000),
        isPaying: true,
        isActive: true,
        role: 'admin',
      }

      const createdUser = new Users(user.id, user.name, user.email, user.lastActivity, user.isPaying, user.isActive, user.role);
    }).toThrowError('ID was not provided');
  })

  it('should throws an error if name was not provided', () => {
    expect(() => {
      const user = {
        id: '123',
        name: '',
        email: 'email@email.com',
        lastActivity: new Date(1648487089 * 1000),
        isPaying: true,
        isActive: true,
        role: 'admin',
      }

      const createdUser = new Users(user.id, user.name, user.email, user.lastActivity, user.isPaying, user.isActive, user.role);
    }).toThrowError('Name was not provided');
  })

  it('should throws an error if email was not provided', () => {
    expect(() => {
      const user = {
        id: '123',
        name: 'Gabriel',
        email: '',
        lastActivity: new Date(1648487089 * 1000),
        isPaying: true,
        isActive: true,
        role: 'admin',
      }

      const createdUser = new Users(user.id, user.name, user.email, user.lastActivity, user.isPaying, user.isActive, user.role);
    }).toThrowError('Email was not provided');
  })

  it('should throws an error if lastActivity was not provided', () => {
    expect(() => {
      const user = {
        id: '123',
        name: 'Gabriel',
        email: 'email@email.com',
        lastActivity: null as unknown as Date,
        isPaying: true,
        isActive: true,
        role: 'admin',
      }

      const createdUser = new Users(user.id, user.name, user.email, user.lastActivity, user.isPaying, user.isActive, user.role);
    }).toThrowError('lastActivity was not provided');
  })

  it('should throws an error if isPaying was not provided', () => {
    expect(() => {
      const user = {
        id: '123',
        name: 'Gabriel',
        email: 'email@email.com',
        lastActivity: new Date(1648487089 * 1000),
        isPaying: null as unknown as boolean,
        isActive: true,
        role: 'admin',
      }

      const createdUser = new Users(user.id, user.name, user.email, user.lastActivity, user.isPaying, user.isActive, user.role);
    }).toThrowError('isPaying was not provided');
  })

  it('should throws an error if isActive was not provided', () => {
    expect(() => {
      const user = {
        id: '123',
        name: 'Gabriel',
        email: 'email@email.com',
        lastActivity: new Date(1648487089 * 1000),
        isPaying: true,
        isActive: null as unknown as boolean,
        role: 'admin',
      }

      const createdUser = new Users(user.id, user.name, user.email, user.lastActivity, user.isPaying, user.isActive, user.role);
    }).toThrowError('isActive was not provided');
  })
})
