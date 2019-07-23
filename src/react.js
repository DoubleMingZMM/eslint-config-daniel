/*
 * @Descripttion: daniel eslint npm react config
 * @version: 1.0.0
 * @Author: Daniel
 * @Date: 2019-07-23 12:13:25
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-07-23 12:33:32
 */
module.exports = {
  // 以当前目录为根目录，不再向上查找 .eslintrc.js
  root: true,
  env: {
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: ['plugin:react/essential', './index.js'],
  rules: {
    // 基本配置
    'strict': 0,
    'valid-jsdoc': 2,
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    'react/react-in-jsx-scope': 2,
  },
};