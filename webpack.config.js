var path = require("path");

module.exports = {
  context: __dirname,
  entry: "./lib/create.js",
  output: {
    path: path.resolve(__dirname),
    filename: "./lib/webpack.js"
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  devtool: 'source-maps',
  resolve: {
    extensions: [".js", ".jsx", "*"]
  }
};
