const path = require("path");

module.exports = {
  entry: {
    apps: "./front/index.js",
  },
  output: {
    path: path.resolve(__dirname, "static/dist"),
    publicPath: "/static/dist/",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
