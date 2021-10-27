module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
  ],
  parserOptions: {
    project: 'tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  ignorePatterns: ['*.js'],
  rules: {
    // https://stackoverflow.com/questions/42640636/react-must-be-in-scope-when-using-jsx-react-react-in-jsx-scope
    'react/react-in-jsx-scope': 0,

    // https://stackoverflow.com/questions/59265981/typescript-eslint-missing-file-extension-ts-import-extensions
    'import/extensions': 0,

    // https://stackoverflow.com/questions/55614983/jsx-not-allowed-in-files-with-extension-tsxeslintreact-jsx-filename-extensio
    'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.tsx'] }],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-spreading.md
    'react/jsx-props-no-spreading': 0,

    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
    'import/no-extraneous-dependencies': [
      'error', 
      { 
        devDependencies: ['__tests__/**', '**/test.tsx', '**/test.ts'], 
        packageDir: ['../..', '.']
      },
    ],

    // https://stackoverflow.com/questions/63696724/eslint-problem-with-default-props-in-functional-component-typescript-react
    'react/prop-types': 0,

    'react/require-default-props': 0,

    // https://github.com/yannickcr/eslint-plugin-react/issues/1555#issuecomment-377339656
    'react/button-has-type': 0,

    // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/issues/402
    "jsx-a11y/anchor-is-valid": [ "error", {
      "components": [ "Link" ],
      "specialLink": [ "hrefLeft", "hrefRight" ],
      "aspects": [ "invalidHref", "preferButton" ]
    }],

    // https://dev.to/otamnitram/sorting-your-imports-correctly-in-react-213m
    'import/order': [
      'error',
      {
        groups: [['builtin', 'external'], 'internal'],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],

    'import/prefer-default-export': 0,
    'no-underscore-dangle': ["error", { "allow": ["_getData"] }],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        paths: ['.'],
      },
    },
  },
};
