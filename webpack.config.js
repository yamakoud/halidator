const path = require('path');

module.exports = {
  target: 'web',
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'halidator.browser.js',
    path: path.resolve(__dirname, 'dist'),
    library: {
      name: 'Halidator',
      type: 'umd',
      export: 'default',
    },
    globalObject: 'this',
  },
};