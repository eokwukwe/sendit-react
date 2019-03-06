const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env, argv) => ({
  entry: {
    bundle: "./src/index.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main_bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.(png|jpg|gif|woff|woff2|eot|ttf|otf|svg)$/,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
      {
        test: /\.(css|scss|sass)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "../src/components"),
    },
    extensions: ["*", ".js", ".json", ".jsx", ".css", ".scss"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
    }),
  ],
  devServer: {
    port: 3000,
    contentBase: path.join(__dirname, "public"),
    historyApiFallback: true,
  },
  devtool: argv.mode === "development" ? "cheap-eval-source-map" : "source-map",
});
