const base = require("../../base.jest.config.js");

module.exports = {
  ...base,
  moduleNameMapper: {
    '^components(.*)': '<rootDir>/components$1',
    '^domains(.*)': '<rootDir>/domains$1',
    '^pages(.*)': '<rootDir>/pages$1',
    '^utils(.*)': '<rootDir>/utils$1',
    '^__mocks__(.*)': '<rootDir>/__mocks__$1',
    '^middleware(.*)': '<rootDir>/middleware$1'
  },
  testPathIgnorePatterns: [
    '<rootDir>/.fttemplates/',
  ],
};
