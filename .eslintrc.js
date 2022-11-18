module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true // required to remove module error in .eslintrc
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'standard-with-typescript',
    'prettier' // use eslint-config-prettier to turn off all rules that conflicts with prettier
  ],
  overrides: [
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    },
    project: './tsconfig.eslint.json'
  },
  plugins: [
    '@typescript-eslint',
    'react'
  ],
  rules: {
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  ignorePatterns: ['*.config.js', '**/dist/**']
}
