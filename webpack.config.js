'use strict'

var path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    path: '/',
    publicPath: '/static/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: path.resolve(__dirname, 'node_modules/angular/angular.js'),
        loader: 'exports?window.angular'
      }
    ]
  },
  devServer: {
    contentBase: 'public/',
    stats: { chunkModules: false, colors: true }
  }
}
