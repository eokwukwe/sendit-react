const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env, argv) => ({
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main_bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html"
    })
  ],
  devServer: {
    port: 3000,
    contentBase: path.join(__dirname, "public"),
    historyApiFallback: true
  },
  devtool: argv.mode === "development" ? "cheap-eval-source-map" : "source-map"
});
