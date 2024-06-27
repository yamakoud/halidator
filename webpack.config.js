const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/halidator.ts',
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    fallback: {
      "vm": false,
      "url": false,
      "util": false,
      "http": false,
      "https": false,
      "buffer": false,
      "string_decoder": false,
    }
  },
  output: {
    filename: 'halidator.min.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'Halidator',
    libraryTarget: 'umd',
    libraryExport: 'default',
    globalObject: 'this',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
};