module.exports = {
  // ... 他の設定 ...
  plugins: ['jest'],
  env: {
    // ... 他の環境設定 ...
    'jest/globals': true
  },
  extends: [
    // ... 他の extends ...
    'plugin:jest/recommended'
  ]
};