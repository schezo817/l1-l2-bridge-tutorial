const path = require('path');

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  status: {
    errorDetails: true
  },
  resolve: {
    extensions: ['.ts', '.js'],
    fallback: {
      "buffer": false,
      "assert": false,
    }
  }
};
