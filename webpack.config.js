const path = require('path');

const config = {
  entry: path.resolve(__dirname, 'src', 'index.jsx'),
  output : {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devServer: {
    publicPath: path.resolve(__dirname, '/dist/'),
    contentBase:  path.resolve(__dirname),
    port: 8080,
    open: true,
    proxy: {
      '/api/' : 'http://localhost:3000',
    },
  },
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: "pre",
        use: ["source-map-loader"],
      },
      {
        test: /.jsx?/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env', '@babel/preset-react',
            ],
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /.css$/,
        use: ['style-loader', 'css-loader'],
        exclude: /node_modules/,
      },
      {
        test: /.(pdf|png|jp(e*)g|svg|mp3|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'images/[hash]-[name].[ext]',
          }
        },
        exclude: /node_modules/,
      },
    ],
  },
};

module.exports = config;
