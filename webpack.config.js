module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: "./src/js/index.js",
  output: {
    filename: "script.js",
    path: __dirname + "/dist"
  },
  devServer: {
    contentBase: "./dist"
  }
};
