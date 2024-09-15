module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'eslint:recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier', 'unused-imports'],
  rules: {
    'no-unused-vars': 'off', // Desative a regra padrão para usar a do plugin
    '@typescript-eslint/no-unused-vars': 'off', // Desative a regra do TypeScript
    'unused-imports/no-unused-imports': 'error', // Regra para imports não utilizados
    'unused-imports/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: false,
      },
    ],
    'prefer-const': 'error',
    'no-var': 'error',
    'no-console': 'error',
    'react/jsx-uses-vars': 'error',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-react': 'off',
    eqeqeq: ['error', 'always'],
    curly: ['error', 'multi'],
    'no-duplicate-imports': 'error',
    'no-else-return': ['error', { allowElseIf: false }],
    'no-lonely-if': 'error',
    'object-shorthand': ['error', 'always'],
    'prefer-destructuring': ['error', { object: true, array: true }],
    'react/jsx-no-duplicate-props': ['error', { ignoreCase: true }],
    'react/jsx-no-useless-fragment': 'error',
    'react/self-closing-comp': 'error',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  overrides: [
    {
      files: ['.eslintrc.{js,cjs}'],
      env: {
        node: true,
      },
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
};
