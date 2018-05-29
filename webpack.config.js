//const path = require('path');
//const HtmlWebpackPlugin = require('html-webpack-plugin');
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

//module.exports = {
export default {
  target: 'web',
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
      { enforce: "pre", test: /\.js$/, exclude: /node_modules/, loader: "eslint-loader" },
      { test: /\.(js|jsx)$/, exclude: /node_modules/, use: 'babel-loader' },
      { test: /\.css$/, loaders: ['style-loader', 'css-loader'] },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' })
  ]
}