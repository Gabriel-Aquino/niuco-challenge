import type { Config } from '@jest/types';
// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  roots: [
    '<rootDir>/src',
  ],
  modulePaths: [
    '<rootDir>',
    '/src/infra/repository',
  ],
  moduleDirectories: [
    'node_modules', 'src',
  ],
};
export default config;
