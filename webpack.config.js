const path = require('path');

const config = {
  mode:"development",
  context: path.resolve(__dirname, 'src'),  
  entry: {
    // removing 'src' directory from entry point, since 'context' is taking care of that
    panic: './panic.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './[name].bundle.js'
  },
  target: 'web',
  node: {
    fs: "empty"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: /src/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['env']
          }
        }
      }
    ]
  }
};

module.exports = config;