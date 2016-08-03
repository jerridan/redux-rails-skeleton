const nodeExternals = require('webpack-node-externals');
const config = require('./webpack.config');

module.exports = {
  target: 'node',              // in order to ignore built-in modules like path, fs, etc.
  externals: [nodeExternals()] // in order to ignore all modules in node_modules folder
};

module.exports = config;