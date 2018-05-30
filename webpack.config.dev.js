const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.config.common');

module.exports = merge (common, {
  mode: 'development',
  target: 'web',
  devtool: 'inline-source-map',
  devServer: {
    compress: true,
    quiet: false
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
});
