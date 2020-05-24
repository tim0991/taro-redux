const a11yOff = Object.keys(require('eslint-plugin-jsx-a11y').rules)
.reduce((acc, rule) => { acc[`jsx-a11y/${rule}`] = 'off'; return acc }, {})

module.exports = {
  extends: [
    'airbnb',
    'taro'
  ],
  parser:"babel-eslint",
  parserOptions: {
    sourceType: 'module',
  },
  rules: {
    ...a11yOff,
    'import/prefer-default-export':'warn',
    'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx'] }],
    'react/state-in-constructor': 'off',
    "no-unused-vars": ["error", { "varsIgnorePattern": "Taro" }],
    'class-methods-use-this': 'off',
    'react/destructuring-assignment': 'off',
    'react/prop-types':'warn'
  },
  settings: {

  },
};
