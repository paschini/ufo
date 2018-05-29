const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  target: 'web',
  entry: [ 
    path.resolve(__dirname, 'src/index') 
  ],
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.[name].js'
  },
  module: {
    rules: [
      { enforce: "pre", test: /\.js$/, exclude: /node_modules/, loader: "eslint-loader" },
      { test: /\.(js|jsx)$/, exclude: /node_modules/, use: 'babel-loader' },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' })
  ]
}

//I can use es6 style here if I use an express server and webpack middleware.