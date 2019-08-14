const path = require('path')

module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: {
    'easy-select': './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/public/',
    filename: '[name].js',
    library: 'easySelect',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.(j|t)s$/,
        loader: 'babel-loader?cacheDirectory=true',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  }
}
