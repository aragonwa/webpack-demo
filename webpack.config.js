var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
// https://medium.com/@rajaraodv/webpack-the-confusing-parts-58712f8fcad9
module.exports = {
  // look for utils and app in js dir
  context: path.resolve('js'),
  // List of files that are entry points
  // entry: ["./utils", "./app"],
  entry: ["./app"],
  output: {
    // build files in build/js
    path: path.resolve('build/'),
    // Where to serve file on web server
    // Matches index.html
    // WHen request for /public/assets/js/ comes in it looks in build/js
    publicPath: '/public/assets/',
    // filename: "bundle.js"
    // matches the entry name above
    filename: 'bundle.js'
  },
  // Plugins are additional node modules that usually work on the resulting bundle.
  plugins: [
    new ExtractTextPlugin('styles.css')
  ],

  // any request for the root go to public folder eg. index.html
  devServer: {
    contentBase: 'public'
  },

  module: {
    rules: [
      {
        test: /\.(es6|js)$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({use:['css-loader', 'autoprefixer-loader']})
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({use:['css-loader', 'autoprefixer-loader','sass-loader']})
      },
      {
        test: /\.(png|jpg|ttf|eot)$/,
        exclude: /node_modules/,
        use: 'url-loader?limit=10000'
      },
      
    ]
  },

  // Allows you import files/modules without ext
  resolve: {
    extensions: ['.js', '.es6']
  }
};
