module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/, // Match CSS files
        use: ["style-loader", "css-loader"], // Process CSS files
      },
      {
        test: /\.styl$/, // Match Stylus files
        use: ["style-loader", "css-loader", "stylus-loader"], // Process Stylus files
      },
      { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }
    ],
  },
};