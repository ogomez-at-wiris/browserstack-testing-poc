module.exports = {
  env: {
    es2021: true,
    'jest/globals': true,
    node: true
  },
  extends: 'standard-with-typescript',
  plugins: ['jest'],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'commonjs'
  },
  rules: {
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/valid-expect': 'error'
  }
}
