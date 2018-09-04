var path = require("path");

var config = {
  mode: 'development',
  devtool: "inline-source-map",
  entry: ["./router.tsx"],
  // entry: ["./app.tsx"],
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js"
  },
  watch: true,
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['ts-loader'],
        exclude: /node_modules/
      },
      { 
        test:/\.(s*)css$/, 
        use: ['style-loader','css-loader', 'sass-loader'] 
      },
    ]
  },
  devServer: { historyApiFallback: true }
};

module.exports = config;
