var path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    path: __dirname,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: path.join(__dirname, 'node_modules'),
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
}
