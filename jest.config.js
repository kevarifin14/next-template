const { loadEnvConfig } = require('@next/env');

loadEnvConfig(process.env.PWD);

module.exports = {
  moduleNameMapper: {
    '^actions(.*)': '<rootDir>/actions$1',
    '^components(.*)': '<rootDir>/components$1',
    '^contexts(.*)': '<rootDir>/contexts$1',
    '^domains(.*)': '<rootDir>/domains$1',
    '^generated(.*)': '<rootDir>/generated$1',
    '^middleware(.*)': '<rootDir>/middleware$1',
    '^__mocks__(.*)': '<rootDir>/__mocks__$1',
    '^pages(.*)': '<rootDir>/pages$1',
    '^utils(.*)': '<rootDir>/utils$1',
    'idl.json': '<rootDir>/idl.json',
  },
  testEnvironment: '<rootDir>/jestEnv.js',
  testPathIgnorePatterns: [
    '<rootDir>/.fttemplates/',
  ],
  // setupFiles: [
  //   "./setupJest.js"
  // ]
};
