const path = require('path');
const webpack = require('webpack');

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
    fallback: {
      "buffer": require.resolve("buffer/"),
      "stream": require.resolve("stream-browserify"),
      "util": require.resolve("util/"),
      "process": require.resolve("process/browser"),
    },
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      './node/dom': path.resolve(__dirname, 'src/browser/dom.ts'),
    },
  },
  plugins: [
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
      process: 'process/browser',
    }),
  ],
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