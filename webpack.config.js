const path = require('path');

module.exports = {
  entry: './client/main.js',
  output: {
    filename: 'webpack-bundle.js',
    path: path.resolve(__dirname, 'build'),
  }
};
