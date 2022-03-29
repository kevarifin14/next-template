const { loadEnvConfig } = require("@next/env");

loadEnvConfig(process.env.PWD);

module.exports = {
  collectCoverageFrom: [
    "**/*.{js,jsx,ts,tsx}",
    "!*.{js,ts}",
    "!**/pages/**",
    "!**/coverage/**",
    "!**/dist/**",
    "!**/.next/**",
    "!**/lib/index.ts",
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  setupFilesAfterEnv: ["./setupTest.js"],
};
