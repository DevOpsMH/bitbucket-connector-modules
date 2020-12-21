const path = require("path");
const NodemonPlugin = require('nodemon-webpack-plugin');
const nodeExternals = require("webpack-node-externals");

const {NODE_ENV = "production"} = process.env;

const webpackConfig = {
  entry: "./src/index.ts",
  mode: NODE_ENV,
  target: "node",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
  },
  resolve: {
    extensions: [".ts", ".js"],
    alias: {
      "@src": path.resolve(__dirname, "src"),
    },
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ["ts-loader"],
      },
    ],
  },
  watch: false,
  externals: [],
  plugins: [],
  stats: {
    warningsFilter: /^(?!CriticalDependenciesWarnings$)/,
  },
};

if (NODE_ENV === "development") {
  webpackConfig.watch = true;
  webpackConfig.externals.push(nodeExternals());
  webpackConfig.plugins.push(
    new NodemonPlugin(),
  );
}

module.exports = webpackConfig;
