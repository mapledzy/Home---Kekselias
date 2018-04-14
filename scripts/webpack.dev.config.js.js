const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const webpackConfigBase = require('./webpack.base.config');

const PORT = 6060;

const webpackConfigDev = {
  mode: 'development',
  devtool: '#eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': 'development',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new FriendlyErrorsPlugin(),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    port: PORT,
    hot: true,
  },
};

module.exports = merge(webpackConfigBase, webpackConfigDev);
