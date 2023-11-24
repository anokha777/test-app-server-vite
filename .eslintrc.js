module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-var-requires': 0,
    'prettier/prettier': [
      'error',
      { singleQuote: true },
      { doubleQuote: true },
    ],
    // '@typescript-eslint/no-explicit-any': 0,
    // '@typescript-eslint/no-explicit-any': 0,
    // 'function-paren-newline': ['error', 'never'],
    // 'max-len': 'off',
    // 'comma-dangle': ['error', { functions: 'never' }],
    // 'function-call-argument-newline': 'off',
  },
};
