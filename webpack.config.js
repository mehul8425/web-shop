const path = require('path');

module.exports = {
  mode: 'development',                      // <--- Add this line
  entry: './src/client/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.ejs$/,
        use: ['ejs-compiled-loader']
      }
    ]
  }
};
