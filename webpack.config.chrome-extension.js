const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'production',  // または 'development'
  entry: {
    background: './src/chromeExtension/background.ts',
    content: './src/chromeExtension/content.ts',
    popup: './src/chromeExtension/popup.ts',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist/chromeExtension'),
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: 'src/chromeExtension/manifest.json', to: 'manifest.json' },
        { from: 'src/chromeExtension/popup.html', to: 'popup.html' },
        { from: 'dist/halidator.browser.js', to: 'halidator.browser.js' },
      ],
    }),
  ],
};