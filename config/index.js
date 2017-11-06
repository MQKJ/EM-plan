// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')
var EVN = require('./evn')

var target = {}

if (EVN === 'test') {
  target.api1 = 'seedshop-mss.mobile.taikang.com:8080'
  target.api2 = 'frtest.group.taikang.com:8080'
} else if (EVN === 'localTest') {
  target.api1 = '10.136.81.139:8088'
  target.api2 = 'frtest.group.taikang.com:8080'
} else {
  target.api1 = 'seedshop.mobile.taikang.com:8080'
  target.api2 = 'fr.group.taikang.com:8080'
}

module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: './',
    productionSourceMap: true,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  },
  dev: {
    env: require('./dev.env'),
    port: 8080,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      '/api1': {
          target: target.api1,
          changeOrigin: true,
          pathRewrite: {
            '^/api1': ''
          }
      },
      '/api2': {
          target: target.api2,
          changeOrigin: true,
          pathRewrite: {
            '^/api2': ''
          }
      }
    },
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false
  }
}
