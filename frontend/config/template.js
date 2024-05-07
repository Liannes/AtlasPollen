const path = require('path');

const title = 'Атлас пыльцы растений';
const titleShort = 'Атлас пыльцы растений';

const HtmlWebpackPluginMeta = {
  httpEquiv: {
    httpEquiv: 'Content-Type',
    content: 'text/html; charset=UTF-8',
  },
  charset: {
    charset: 'utf-8',
  },
  viewport: 'width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1.0',
  description: '',
  keywords: '',
};

const WebpackPwaManifest = {
  // Check https://github.com/arthurbergmz/webpack-pwa-manifest for more usage expamles
  filename: 'manifest.json',
  start_url: '.',
  publicPath: null,
  dir: 'ltr', //'ltr', 'rtl', 'auto'
  orientation: 'portrait', //'any', 'natural', 'landscape', 'landscape-primary', 'landscape-secondary', 'portrait', 'portrait-primary', 'portrait-secondary', 'omit'
  display: 'standalone', //'fullscreen', 'standalone', 'minimal-ui', 'browser'
  name: title,
  short_name: titleShort,
  description: 'description',
  background_color: '#000000',
  theme_color: '#ffffff',
  crossorigin: null, // null, 'use-credentials', 'anonymous'
  inject: true,
  fingerprints: true,
  ios: {
    'apple-mobile-web-app-title': title,
    'apple-mobile-web-app-status-bar-style': 'black',
  },
  includeDirectory: true,
  icons: [
    {
      src: path.resolve('public/icon-16.png'),
      sizes: '16x16', // multiple sizes
    },
    {
      src: path.resolve('public/icon-32.png'),
      size: '32x32', // you can also use the specifications pattern
    },
    {
      src: path.resolve('public/icon-96.png'),
      size: '96x96',
    },
  ],
};
//Object.assign(template.WebpackPwaManifest, WebpackPwaManifest)
module.exports.HtmlWebpackPluginMeta = HtmlWebpackPluginMeta;
module.exports.WebpackPwaManifest = WebpackPwaManifest;
module.exports.title = title;
