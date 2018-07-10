# Vue-Element-Admin
![build](https://img.shields.io/travis/rust-lang/rust.svg)
![license](https://img.shields.io/badge/license-MIT-blue.svg)
![Prs](https://img.shields.io/badge/Prs-welcome-brightgreen.svg)
![author](https://img.shields.io/badge/author-jasonbai-orange.svg)

## Build Setup

``` bash
# install dependencies
yarn install

# serve with hot reload at localhost:8082
yarn run dev

# build for production with minification
yarn run build

# visualize output files
yarn run analysis

# copy output files to docs folder
yarn run copy

# preview output files
yarn add http-server -g
cd dist
http-server
```

## Tech Stack
* Vue @ 2.5.9
* Vue-Router
* Vue-i18n
* Vuex
* Axios
* jsonp
* eCharts @ 3.7.2
* Vue-cli
* ES6
* Element-UI @ 2.4.3
* Flex
* Less
* Animate.CSS
* MomentJS
* Font-Awesome
* js-cookie
* screenfull
* MockJS
* Yarn

## Others Maybe Need
* vue-qr  二维码生成插件
* vuedraggable  拖拽功能
* vue-particles  粒子星空效果
* xlsx  读取excel表

## Useful Links
* [饿了么组件](http://element.eleme.io/#/zh-CN/component/installation)
* [Vue官网](https://cn.vuejs.org/v2/guide/)
* [axios官网](https://github.com/mzabriskie/axios)
* [Vue-loader使用指南](http://vue-loader.vuejs.org/en/)
* [Vue-cli使用指南](http://vuejs-templates.github.io/webpack/)

## Folder Instructions
| Name | Remark |
| - | - |
| .vscode | VScode的sftp插件配置文件，用于将编译后文件传输到服务器上 |
| docs | github或coding上，用于生成预览页面的文件，公司项目中可删除 |
| dist | 打包后的文件所在目录 |
| screenshot | github上README页面上的预览图片，可删除 |

## Best Practice
* 安装或删除模块请使用Yarn命令 ！！！！！！！！
* 安装依赖包：Yarn add XXX
* 安装依赖包：Yarn upgrade XXX@x.x.x
* 卸载依赖包：Yarn remove XXX
* 所有组件文件名首字母大写
* 公共组件请放到components文件夹下
* 代码缩进采用2个空格

## Change Log
2018-07-10
* 统一打包后的目录结构
* 实现可视化打包后文件
* 修复bug一枚
* 在入口处引入mock.js
* 删除左侧导航动画效果
* 优化项目打包脚本
* 优化文件名

## Screen Shot

0、文件地图
![image](https://github.com/jasonBai007/vue-seed/raw/master/screenshot/map.png)
1、登录页
![image](https://github.com/jasonBai007/vue-seed/raw/master/screenshot/login.jpg)
2、气象页
![image](https://github.com/jasonBai007/vue-seed/raw/master/screenshot/weather.png)
3、魔方页
![image](https://github.com/jasonBai007/vue-seed/raw/master/screenshot/cube.png)
