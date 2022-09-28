module.exports = {
  env: {
    browser: true,
    node: true,
    es2020: true
  },
  overrides: [
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: [
      '@typescript-eslint',
      'import',
  ],
  settings: {
      'import/resolver': {
          typescript: {
              extensions: ['.ts', '.tsx', '.js', '.jsx', '.d.ts'],
          },
      },
  },
  rules: {
    'import/no-extraneous-dependencies': [
        'error', 
        {devDependencies: true},
    ]
  }
}
