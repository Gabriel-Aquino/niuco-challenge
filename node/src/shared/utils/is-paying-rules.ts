const isPayingRules = [
  {
    role: 'admin',
    isPaying: true,
  },
  {
    role: 'editor',
    isPaying: true,
  },
  {
    role: 'system',
    isPaying: false,
  },
  {
    role: 'viewer',
    isPaying: false,
  },
  {
    role: '',
    isPaying: false,
  },
]

export default isPayingRules
