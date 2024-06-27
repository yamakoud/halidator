const path = require('path');

module.exports = {
  entry: './src/browser/index.ts',
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
  },
  output: {
    filename: 'halidator.min.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'Halidator',
    libraryTarget: 'umd',
    libraryExport: 'default',
    globalObject: 'this',
  },
};