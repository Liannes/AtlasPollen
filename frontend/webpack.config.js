const path = require('path');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('@gzaripov/webpack-pwa-manifest');
const TerserPlugin = require('terser-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

const paths = require('./config/paths');
const template = require('./config/template.js');

module.exports = function (env, options) {
  console.log(options);
  const isProduction = options.mode === 'production';
  const isDev = !isProduction;
  const isDevServer = isDev && process.argv.includes('serve');

  const webpackConfig = {
    mode: isProduction ? 'production' : 'development',
    target: isDevServer ? 'web' : 'browserslist',
    bail: isProduction,
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'build'),
      // this places all images processed in an image folder
      assetModuleFilename: 'images/[hash][ext][query]',
      publicPath: '',
    },
    devtool: isProduction ? false : 'source-map',
    optimization: {
      minimize: isProduction,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            format: {
              comments: false,
            },
          },
          extractComments: false,
        }),
        // Css конвектор
        new CssMinimizerPlugin(),
      ],
    },
    performance: {
      maxAssetSize: 650 * 1024,
      maxEntrypointSize: 650 * 1024,
    },
    resolve: {
      extensions: ['.js', '.jsx'],
      alias: {
        Shared: path.resolve(__dirname, 'src/shared/'),
        Assets: path.resolve(__dirname, 'src/assets/'),
      },
    },
    module: {
      rules: [
        {
          //Загрузка scss
          test: /\.(s[ac]|c)ss$/i,
          use: [
            isProduction && {
              loader: MiniCssExtractPlugin.loader,
            },
            isDev && require.resolve('style-loader'),
            'css-loader',
            'postcss-loader',
            'sass-loader',
          ].filter(Boolean),
        },
        {
          // Загрузка svg
          test: /\.svg$/,
          issuer: /\.[jt]sx?$/,
          use: ['@svgr/webpack'],
        },

        // Images: Copy image files to build folder
        {
          test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'images/design/[name].[hash:6][ext]',
          },
        },

        // Fonts and SVGs: Inline files
        { test: /\.(woff|woff2|eot|ttf|otf)$/i, type: 'asset/resource' },
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: {
            // without additional settings, this will reference .babelrc
            loader: 'babel-loader',
            options: {
              plugins: [isDevServer && 'react-refresh/babel'].filter(Boolean),
              cacheDirectory: true,
            },
          },
        },
      ],
    },

    plugins: [
      new CleanWebpackPlugin({
        verbose: true,
        cleanOnceBeforeBuildPatterns: ['**/*', '!stats.json'],
      }),
      new ESLintPlugin(),
      new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css',
        chunkFilename: '[name].[contenthash].css',
      }),
      new HtmlWebpackPlugin({
        inject: true,
        //template: path.resolve(__dirname, "public/index.html"),
        title: template.title,
        favIcon: paths.public + '/favicon.ico',
        template: paths.appHtml, // template file
        filename: 'index.html', // output file
        meta: template.HtmlWebpackPluginMeta,
        ...(isProduction && {
          minify: {
            removeComments: true,
            collapseWhitespace: true,
            removeRedundantAttributes: true,
            useShortDoctype: true,
            removeEmptyAttributes: true,
            removeStyleLinkTypeAttributes: true,
            keepClosingSlash: true,
            minifyJS: true,
            minifyCSS: true,
            minifyURLs: true,
          },
        }),
      }),
      new WebpackPwaManifest(template.WebpackPwaManifest),
      isDevServer && new ReactRefreshWebpackPlugin(),
    ].filter(Boolean),
  };

  const devServer = {
    //contentBase: "./public",
    static: {
      directory: paths.public,
      //staticOptions: {},
      // Don't be confused with `devMiddleware.publicPath`, it is `publicPath` for static directory
      // publicPath: ['/static-public-path-one/', '/static-public-path-two/'],
      //publicPath: paths.public,
      // serveIndex: {} (options for the `serveIndex` option you can find https://github.com/expressjs/serve-index)
      serveIndex: true,
      // watch: {} (options for the `watch` option you can find https://github.com/paulmillr/chokidar)
      watch: true,
    },
    compress: true,
    historyApiFallback: true,
    //historyApiFallback: { disableDotRule: true },
    //host: "local-ip",
    port: 3000,
    hot: true,
    open: true,
  };

  return isDevServer ? { ...webpackConfig, devServer } : webpackConfig;
};
