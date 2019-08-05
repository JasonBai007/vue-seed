# Vue-Element-Admin
[![LICENSE](https://img.shields.io/badge/license-Anti%20996-blue.svg)](https://github.com/996icu/996.ICU/blob/master/LICENSE)
![Prs](https://img.shields.io/badge/Prs-welcome-brightgreen.svg)
![author](https://img.shields.io/badge/author-jasonbai-orange.svg)

## Theme
1. [dark-version](http://lubanseven.gitee.io/dark-version/#/signin) ( master )
2. [light-version](http://lubanseven.gitee.io/show/#/signin)( light-version )
3. [color-version](http://lubanseven.gitee.io/show/#/signin)( color-version )

## Build Setup

``` bash
# install dependencies
yarn install

# serve with hot reload at localhost:1024
yarn run dev

# build for production with minification
yarn run build

# visualize output files
yarn run analysis

# preview output files
yarn add http-server -g
cd dist
http-server
```

## Tech Stack
* Vue @ 2.5.9
* Vue-Router
* Vue-cli
* Vue-i18n
* Vuex
* ES6
* Axios
* jsonp
* eCharts @ 4.2.1
* Element-UI @ 2.11.1
* Sass
* Animate.CSS
* vue-count-to
* Font-Awesome
* MockJS
* Yarn
* babel-polyfill 兼容IE垫片

## Others Maybe Need
* intro.js 引导页
* vue-qr  二维码生成模块
* vuedraggable  拖拽功能
* vue-particles  粒子星空效果
* xlsx  读取excel表
* js-cookie 读写cookie模块
* dayjs 日期处理模块
* rythm.js 音频节奏可视化模块
* vuescroll.js 一个滚动条插件
* crypto-js 加密算法，登录时使用
* clipboard.js 复制粘贴
* vue-baidu-map 封装的百度地图插件

## Notes
1. 登录页已兼容IE浏览器
2. 配置webpack.base.conf.js中的alias的vue字段，可以解决IE浏览器中的报错问题。（这块儿不用动了，已调整好）
3. node-sass经常安装失败，需要多次尝试，如果实在不行，最好翻墙后再次 yarn install。
4. 如果要覆盖饿了么组件的样式变量，就编辑assets/scss/element-variables.scss文件。
5. 默认初始的主题色是：$--color-primary: #bb162b;
