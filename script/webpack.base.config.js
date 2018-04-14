const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// const webpack = require('webpack');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

function resolve(relaredPath) {
  return path.join(__dirname, relaredPath);
}

const webpackConfigBase = {
  entry: {
    client: resolve('../dist'),
  },
  output: {
    path: resolve('../dist'),
    filename: '[name].[hash:4].js',
    chunkFilename: 'chunks/[name].[hash:4].js',
  },
  resolve: {
    extensions: ['.js', '.json'], // TODO: jsx
    alias: {
      style: path.join(__dirname, './../src/scss'),
      images: path.join(__dirname, './../src/img'),
    },
  },
  resolveLoader: {
    moduleExtensions: ['-loader'],
  },
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        exclude: resolve('../node_modules/'),
        loader: 'babel',
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [
            { loader: 'css-loader' },
            { loader: 'sass-loader' },
          ],
          fallback: 'style-loader',
        }),
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('style.[hash:4].css'),
  ],
};

module.exports = webpackConfigBase;
