// 1. entry point
// 2. which transformations to take
// 3. output file location

// loaders //

// svg-inline-loader --save-dev
// css-loader --save-dev
// style-loader --save-dev
// babel-loader

// htmlwebpackplugin
// html-webpack-plugin --save-dev

// loaders //

const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./app/index.js",
  module: {
    rules: [
      { test: /\.svg$/, use: "svg-inline-loader" },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      { test: /\.js$/, use: "babel-loader" },
    ],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index_bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin(),
    // new webpack.EnvironmentPlugin({
    //   NODE_ENV: "production",
    // }),
  ],
  mode: "production",
};
