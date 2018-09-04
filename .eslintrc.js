module.exports = {
  env: { browser: false, commonjs: true, es6: true },
  parser: 'babel-eslint',
  extends: ['airbnb'],
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: false
    },
    sourceType: 'module'
  }
};
