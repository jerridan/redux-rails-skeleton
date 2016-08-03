const webpack = require('webpack');

module.exports = {
  entry: [
    "./src/index.jsx"
  ],
  output: {
    path: "dist",
    filename: "bundle.js",
    publicPath: "dist"
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css" },
      { test: /\.(js|jsx)$/, exclude: /node_modules/, loaders: ["react-hot", "babel"] }
    ]
  },
  resolve: {
    extensions: ["", ".js", ".jsx"]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};