const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const webpack = require('webpack');


function resolve(dir) {
  return path.join(__dirname, '..', dir);
}

const webpackConfigBase = {
  entry: {
    app: resolve('src/index.jsx'),
  },
  output: {
    path: resolve('../dist'),
    filename: '[name].[hash:4].js',
    chunkFilename: 'chunks/[name].[hash:4].js',
    // publicPath: 'dist/',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'], // TODO: jsx
    alias: {
      style: resolve('src/scss'),
      images: resolve('src/img'),
      '@': resolve('src'),
    },
  },
  resolveLoader: {
    moduleExtensions: ['-loader'],
  },
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        exclude: resolve('node_modules'),
        include: resolve('src'),
        loader: 'babel',
      },
      {
        test: /\.(scss|css)$/,
        use: ExtractTextPlugin.extract({
          use: [
            { loader: 'css-loader' },
            { loader: 'sass-loader' },
          ],
          fallback: 'style-loader',
        }),
      },
      {
        test: /\.(png|jpe?g|gif|jpg)(\?.*)$/,
        loader: 'url',
        options: {
          limit: 10000,
          name: 'img/[name].[hash:4].[ext]',
        },
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('css/style.[hash:4].css'),
    new HtmlWebpackPlugin({
      template: resolve('index.html'),
    }),
  ],
};

module.exports = webpackConfigBase;
