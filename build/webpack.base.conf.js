var path = require('path')
var utils = require('./utils')
var config = require('../config')
var vueLoaderConfig = require('./vue-loader.conf')
const ThemeColorReplacer = require('webpack-theme-color-replacer')
const forElementUI = require('webpack-theme-color-replacer/forElementUI')

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: {
    app: './src/main.js'
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production' ?
      config.build.assetsPublicPath : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      vue$: 'vue/dist/vue.js',
      '@': resolve('src')
    }
  },
  module: {
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader',
      options: vueLoaderConfig
    }, {
      test: /\.js$/,
      loader: 'babel-loader',
      include: [
        resolve('src'),
        resolve('test'),
        resolve('node_modules/vue-particles')
      ]
    }, {
      test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      loader: 'url-loader',
      query: {
        limit: 10000,
        name: utils.assetsPath('img/[name].[ext]')
      }
    }, {
      test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
      loader: 'url-loader',
      query: {
        limit: 10000,
        name: utils.assetsPath('fonts/[name].[ext]')
      }
    }, {
      test: /\.mp3(\?.*)?$/,
      loader: 'url-loader',
      query: {
        limit: 10000,
        name: utils.assetsPath('audio/[name].[ext]')
      }
    }]
  },
  plugins: [
    //生成仅包含颜色的替换样式（主题色等）
    new ThemeColorReplacer({
      // 官网的文件名，会导致编译后的文件名不对：fileName: 'css/theme-colors-[contenthash:8].css'
      // 不要添加 [contenthash:8]
      fileName: 'css/theme-colors.css',
      matchColors: [...forElementUI.getElementUISeries('#bb162b')], //需要替换的颜色数组，里面都是目标颜色
      changeSelector: forElementUI.changeSelector,
    })
  ]
}
