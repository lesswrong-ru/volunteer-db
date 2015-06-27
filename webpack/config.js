var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var fs = require('fs');

var nodeModules = {};
fs.readdirSync('node_modules')
.filter(function(x) {
  return ['.bin', 'normalize.css'].indexOf(x) === -1;
})
.forEach(function(mod) {
  nodeModules[mod] = 'commonjs ' + mod;
});

var root = path.resolve(__dirname, '..');

module.exports = {
  entry: {
    app: './server/app',
  },

  target: 'node',

  output: {
    path: root,
    filename: 'build/server.js',
  },

  resolve: {
    extensions: ['', '.js', '.jsx'],
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(root, 'common'),
          path.resolve(root, 'server'),
        ],
        loader: 'babel',
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', 'css!autoprefixer!sass'),
      },
      {
        test: /\.(png|woff)$/,
        loader: 'url?limit=100000',
      },
    ],
  },
  externals: nodeModules,

  plugins: [
    new ExtractTextPlugin('public/main.css'),
  ],

  devtool: 'sourcemap',
};
