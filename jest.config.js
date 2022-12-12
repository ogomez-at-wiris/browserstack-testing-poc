module.exports = {
  testTimeout: 90000,
  bail: true,
  testMatch: ['**/?(*.)+(spec|test).[t]s'],
  preset: 'jest-puppeteer',
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  testPathIgnorePatterns: ['/node_modules/', 'dist'],
};
