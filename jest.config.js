module.exports = {
  testTimeout: 90000,
  bail: true,
  testMatch: ['**/?(*.)+(spec|test).[j]s'],
  testPathIgnorePatterns: ['/node_modules/', 'dist']
}
