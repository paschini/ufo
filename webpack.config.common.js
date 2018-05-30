const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.[name].js'
  }
}

//I can use es6 style here if I use an express server and webpack middleware.
