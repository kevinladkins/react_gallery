<<<<<<< HEAD
var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var precss = require('precss');
=======
var path = require("path");
var webpack = require("webpack");
>>>>>>> 6b783ca151f566f87c537becd58f1b015d3a9b5f

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
<<<<<<< HEAD
    'webpack/hot/only-dev-server',
=======
>>>>>>> 6b783ca151f566f87c537becd58f1b015d3a9b5f
    './src/index'
  ],
  output: {
    path: path.resolve(__dirname, './build'),
    publicPath: '/build/',
    filename: "bundle.js"
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
<<<<<<< HEAD
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.LoaderOptionsPlugin({
        test: /\.scss$/,
         options: {
           postcss: function() {
             return [autoprefixer, precss]
           }
         }
       })

  ],
  module: {
    rules: [
=======
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
>>>>>>> 6b783ca151f566f87c537becd58f1b015d3a9b5f
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel-loader']
<<<<<<< HEAD
      }, {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'postcss-loader']
=======
>>>>>>> 6b783ca151f566f87c537becd58f1b015d3a9b5f
      }
    ]
  }
};
