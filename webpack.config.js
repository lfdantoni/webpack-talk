const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      { 
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader, // WARNING only enable that on production mode, otherwise you can't use HMR
          'css-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
      ]},
      plugins: [
        new HtmlWebpackPlugin({
          template: 'index.html'
        }),
        new MiniCssExtractPlugin({
          filename: "[name].css"
        })
      ]
};