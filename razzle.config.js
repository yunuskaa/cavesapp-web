const path = require('path');

module.exports = {
  plugins: ['scss'],
  modify: config => {
    config.resolve.modules.unshift(path.resolve(__dirname, './src'));

    return config;
  },
};
