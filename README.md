<h1 align="center">Vue-Seed</h1>

<div align="center">
An out-of-box UI solution for enterprise applications as a Vue boilerplate.

![author](https://img.shields.io/badge/author-jasonbai-orange.svg)
![Prs](https://img.shields.io/badge/Prs-welcome-brightgreen.svg)
[![LICENSE](https://img.shields.io/badge/license-Anti%20996-blue.svg)](https://github.com/996icu/996.ICU/blob/master/LICENSE)
</div>

## Themes Preview
1. [dark-version](http://lubanseven.gitee.io/dark-version/#/signin)  ( Branch: master )
2. [light-version](http://lubanseven.gitee.io/show/#/signin) ( Branch: light-version )
3. [color-version](http://lubanseven.gitee.io/color-version/#/signin) ( branch: color-version )

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
* Vue-cli @ 2.x
* Vue-i18n
* Vuex
* ES6
* Element-UI @ 2.8.2
* eCharts @ 4.2.1
* Axios
* Jsonp
* Sass
* Animate.CSS
* Typed.js
* Font-Awesome
* MockJS
* Yarn
* babel-polyfill ( Compatible with IE )

## Other Plugins Maybe Need
* intro.js 引导页
* vue-qr  二维码生成模块
* vuedraggable  拖拽功能
* vue-particles  粒子效果
* js-cookie 读写cookie模块
* dayjs 日期处理模块
* rythm.js 音频节奏可视化模块
* vuescroll.js 一个滚动条插件
* crypto-js 加密算法，登录时使用
* clipboard.js 复制粘贴
* vue-baidu-map 封装的百度地图插件

## Notes
1. 登录页已兼容IE浏览器
2. dark-version主题中登录页引入了rythm.js，导致其不兼容IE，删除Siderbar.vue里面关于rythm.js的代码就可以了。
4. 背景音乐的歌名是：Romeo's Tune。
5. node-sass经常安装失败，可能需要多次 install，如果实在不行，最好翻墙后再次 yarn install。
6. 如果要覆盖饿了么组件的样式变量，就编辑assets/scss/element-variables.scss文件。
7. 因为谷歌浏览器升级到71版本，导致screenfull.js源码98行有问题，已经将改动后的文件复制到了assets/libs文件夹下。
8. 彻底重写了图表组件，提高了组件的扩展性，图表配置需要在使用组件的父组件中编写。


## Login Logic
1. 请求登录接口，获取到token、用户ID等信息，保存到localStorage或Cookie里
2. 请求左侧菜单信息。（如果菜单是固定的，这步忽略）
3. 登录成功后，导航到首页
4. 在main.js里设置全局请求拦截，在所有请求的header里加上token信息，证明当前已登录
5. 在main.js里设置全局接收拦截，如果服务器端的token已过期，返回401，就清空localStorage并重定向到登录页面
6. 在路由配置表里，设置全局路由拦截，如果token存在并且要去往登录页面，就不让去，并且重定向到首页

## Logout Logic
1. 点击退出按钮，清空localStorage，并导航到登录页面

## First Open Logic
1. 配置路由表，'/'重定向到首页
2. 如果没有登录（本地没有token），首页的请求就会是401，这时候，就会导航到登录页
3. 如果已经登录过，本地有token，就待在首页，不用再登录一遍了

## License
Anti-996
