const path = require('path');

module.exports = {
  entry: './client/index.js',
  output: {
    path: '/home/stefan/codesmith/scratch2/build/',
    // path: path.resolve('./build'),
    filename: 'webpack-bundle.js',
  },
  devServer: {
    publicPath: "/build/",
    port: 8080
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
};
