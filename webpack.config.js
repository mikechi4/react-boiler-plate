const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './src/app.jsx',
  output:{ path: __dirname, filename: 'bundle.js'},
  module: {
    loaders:[
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets:['es2015', 'react']
        }
      }
    ]
  }
};
