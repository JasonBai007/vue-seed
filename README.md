# Vue-Seed

An out-of-box UI solution for enterprise applications as a Vue boilerplate.

![author](https://img.shields.io/badge/author-jasonbai-orange.svg)
![Prs](https://img.shields.io/badge/Prs-welcome-brightgreen.svg)
[![LICENSE](https://img.shields.io/badge/license-Anti%20996-blue.svg)](https://github.com/996icu/996.ICU/blob/master/LICENSE)

## Themes Preview
1. [dark-version](http://lubanseven.gitee.io/dark-version/#/signin)  ( Branch: master )
2. [light-version](http://lubanseven.gitee.io/show/#/signin) ( Branch: light-version )
3. [color-version](http://lubanseven.gitee.io/color-version/#/signin) ( branch: color-version )

## Features
1. 三套主题模板任你选
2. 第三套主题实现了换肤功能
3. 实现了动态路由功能
4. 完整的登录登出逻辑
5. 炫酷的登录页
6. 支持配置饿了么组件库主题色
7. 实现了国际化
8. 附带天气预报功能
9. 附带动感音乐
10. 封装了图表组件

## Build Setup

``` bash
# install dependencies
npm install

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
1. 由于第三套主题中使用了flex布局，导致只能兼容到IE10，在删除grid布局的情况下。
2. dark-version主题中登录页引入了rythm.js，导致其不兼容IE，删除Siderbar.vue里面关于rythm.js的代码就可以了。
3. node-sass经常安装失败，可能需要多次 install，如果实在不行，最好翻墙后再次 yarn install。
4. 如果要覆盖饿了么组件的样式变量，就编辑assets/scss/element-variables.scss文件。
5. 因为谷歌浏览器升级到71版本，导致screenfull.js源码98行有问题，已经将改动后的文件复制到了assets/libs文件夹下。
6. 彻底重写了图表组件，提高了组件的扩展性，图表配置需要在使用组件的父组件中编写。
7. 切换到 color-version 分支后，需要重新 yarn install 安装独有插件
8. 背景音乐的歌名是：Romeo's Tune。


## Login Logic
1. 请求登录接口，获取到token、用户ID等信息，保存到localStorage或Cookie里
2. 请求左侧菜单信息。（如果菜单是固定的，这步忽略）
3. 登录成功后，导航到首页
4. 在main.js里设置全局请求拦截，在所有请求的header里加上token信息，证明当前已登录
5. 在main.js里设置全局接收拦截，如果服务器端的token已过期，返回401，就清空localStorage并重定向到登录页面
6. 在路由配置表里，设置全局路由拦截，如果token存在并且要去往登录页面，就不让去，并且重定向到首页

## Logout Logic
1. 点击退出按钮，清空localStorage，并导航到登录页面

## First Visit Logic
1. 配置路由表，'/'重定向到首页
2. 如果没有登录（本地没有token），首页的请求就会是401，这时候，就会导航到登录页
3. 如果已经登录过，本地有token，就待在首页，不用再登录一遍了

## Switch Theme Color Logic
1. 安装 [webpack-theme-color-replacer](https://www.npmjs.com/package/webpack-theme-color-replacer) 插件
2. 在 /build/webpack.base.conf.js 中引入 [参考](https://github.com/JasonBai007/vue-seed/blob/color-version/build/webpack.base.conf.js#L5-L6)
3. 在楼上的文件中配置 [plugins](https://github.com/JasonBai007/vue-seed/blob/color-version/build/webpack.base.conf.js#L65-L74)
4. 在颜色选择器所在的组件中，引入步骤一中的[插件](https://github.com/JasonBai007/vue-seed/blob/color-version/src/components/ColorsPicker.vue#L7)
5. 在步骤四中的文件中，添加插件的逻辑代码，构建options对象，然后调用changeColor方法 [参考](https://github.com/JasonBai007/vue-seed/blob/color-version/src/components/ColorsPicker.vue#L36-L50)

## Dynamic Routers Logic
1. 登录后，从后端请求一个信息数组 arr
2. 编写解析函数，将这个 arr 解析成 路由信息数组 routes 和 菜单数组 menuArr
3. menuArr 注入到 sidebar.vue中，渲染出菜单
4. routes数组 作为参数，传入到 router.addRoutes() 方法中，生成真正的路由树
5. 404路由作为最后一项
6. 由于实现起来过于复杂，我也懵逼了，还是参考网上的[教程](https://juejin.im/post/5c83ccb75188257e342db5c9)吧

## License
Anti-996
