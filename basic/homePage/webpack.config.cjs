const path = require("node:path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  
  // webpack will start from this file and bundle all the dependencies
  entry: "./src/index.js",

  // where the bundled file will be stored
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true, 
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ],

  devServer: {
    static: "./dist",
    port: 8800,
    hot: true,
  },
};
