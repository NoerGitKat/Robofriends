const HTMLWebpackPlugin = require("html-webpack-plugin");

const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: __dirname + "/src/index.html",
  filename: "index.html",
  inject: "body"
});

module.exports = {
  entry: __dirname + "/src/index.js",
  output: {
    filename: "transformed.js",
    path: __dirname + "/build"
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ["es2015", "react"]
        }
      },
      {
        test: /\.(s*)css$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: "file-loader"
      }
    ]
  },
  plugins: [HTMLWebpackPluginConfig]
};
