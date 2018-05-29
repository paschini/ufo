const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = merge (common, {
  devtool: 'source-map',
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true
      }),
      new OptimizeCSSAssetsPlugin({})
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new MiniCssExtractPlugin({
          filename: "[name].css",
          chunkFilename: "[id].css"
    }),
    new webpack.DefinePlugin({       
      'process.env.NODE_ENV': JSON.stringify('production')
    })
   ],
   module: {
     rules: [
       {
         test: /\.css$/,
         use: [
           MiniCssExtractPlugin.loader,
           "css-loader"
         ]
       }
     ]
   } 
});