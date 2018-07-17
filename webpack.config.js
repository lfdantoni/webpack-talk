const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HelloWorld = require('./src/plugins/notify')

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      { test: /\.hbs$/, loader: "handlebars-loader" },
      { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' },
      { 
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, // WARNING only enable that on production mode, otherwise you can't use HMR
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              includePaths: ['./node_modules'],
            }
          }
        ]
      },
      {
        test: /\.ts$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          },
          'ts-loader',
          './src/loaders/hate-console-logs'
        ]
      }
      ]},
      resolve: {
        extensions: ['.ts', '.js', '.json']
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: 'index.html'
        }),
        new MiniCssExtractPlugin({
          filename: "[name].css"
        }),
        new HelloWorld()
      ]
};