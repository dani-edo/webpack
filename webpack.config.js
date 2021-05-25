var path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { AngularWebpackPlugin } = require("@ngtools/webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/main.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      { test: /\.ts$/, loader: "@ngtools/webpack" },
      { test: /\.css$/, loader: "raw-loader" },
      { test: /\.html$/, loader: "raw-loader" },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + "/index.html",
      output: __dirname + "/dist",
      inject: "head",
    }),
    new AngularWebpackPlugin({
      tsConfigPath: "./tsconfig.json",
      entryModule: path.join(__dirname, "src/app/app.module#AppModule"),
      sourceMap: true,
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: "src/assets", to: "assets" }],
    }),
  ],
};
