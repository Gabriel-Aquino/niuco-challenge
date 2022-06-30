import CheckIfIsPaying from './check-if-is-paying'

describe('must validate checkIfIsPaying function', () => {
  const checkIfIsPaying = new CheckIfIsPaying()
  it('should returns true if role is admin', async () => {
    const isPaying = checkIfIsPaying.isPaying('admin')

    expect(isPaying).toBe(true)
  })

  it('should returns false if role is system', async () => {
    const isPaying = checkIfIsPaying.isPaying('system')

    expect(isPaying).toBe(false)
  })

  it('should throws error if role was not provided', async () => {
    expect(() => {
      const isPaying = checkIfIsPaying.isPaying(null as unknown as string)
    }).toThrowError('Backend returned an invalid role, please try again later')
  })
})
