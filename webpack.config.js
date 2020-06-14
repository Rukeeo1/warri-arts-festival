const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const rules = [
  {
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
    },
  },
  {
    test: /\.css$/,
    exclude: /node_modules/,
    use: ['style-loader', 'css-loader'],
  },
];
// __dirname,'src','index.js'
module.exports = {
  entry: { main: './src/index.js' },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'build'),
  },
  module: { rules },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
