import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 如果当前环境是开发环境，就开启debug模式
const debug = process.env.NODE_ENV !== 'production'

// 使用webpack提供的API，构造一个上下文files，相当于引入modules文件夹下所有js文件
// 具体文档请参照：
// https://webpack.js.org/guides/dependency-management/#requirecontext
// files不是一个数组，是一个context，具体是啥，我也不知道。。。
// 通过下面奇怪的写法，就不用一个一个引入模块了
const files = require.context('./modules', false, /\.js$/)
const modules = {}

// 使用下面这种具体的写法，构造modules对象
// 为啥这么写？我也不知道，因为大神们都这么写
files.keys().forEach(key => {
  modules[key.replace(/(\.\/|\.js)/g, '')] = files(key).default
})

export default new Vuex.Store({
  strict: debug,
  modules,
})
