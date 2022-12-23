const path = require('path');
const postcss = require('postcss');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devtool: 'source-map',
  devServer: {
    port: '3000',
    historyApiFallback: true,
    open: true,
    hot: true,
    liveReload: true
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'main.js'
  },
  plugins: [
    new Dotenv(),
    new HtmlWebPackPlugin({
      template: './src/index.html'
    })
  ],
  resolve: {
    modules: [path.join(__dirname, 'src'), 'node_modules'],
    extensions: ['.js', '.jsx', '.json', '.scss'],
    alias: {
      '@api': path.resolve(`${__dirname}/src/api`),
      '@components': path.resolve(`${__dirname}/src/components`),
      '@stores': path.resolve(`${__dirname}/src/stores`),
      '@styles': path.resolve(`${__dirname}/src/styles`),
      '@ui': path.resolve(`${__dirname}/src/ui`),
      '@utils': path.resolve(`${__dirname}/src/utils`),
      '@views': path.resolve(`${__dirname}/src/views`),
      process: 'process/browser'
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          'isomorphic-style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: {
                localIdentName: '[name]_[local]_[hash:base64:5]'
              },
              url: false,
              esModule: false
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  postcss([
                    require('postcss-advanced-variables')(),
                    require('postcss-nested')(),
                    require('postcss-preset-env')()
                  ]),
                  require('postcss-hexrgba')()
                ],
                parser: 'postcss-scss',
                modules: true
              }
            }
          }
        ]
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};