const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool:  'inline-source-map',
  entry: [ 
    path.resolve(__dirname, 'src/index') 
  ],
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.css$/, loaders: ['style-loader', 'css-loader'] },
      { test: /\.(js|jsx)$/, exclude: /node_modules/, use: 'babel-loader' },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' })
  ]
}