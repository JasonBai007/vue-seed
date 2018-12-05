// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill' // 必须在最开始引入垫片
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './store'
import VueParticles from 'vue-particles'
import i18n from './lang' // Internationalization
import * as utils from '@/utils'
import 'font-awesome/less/font-awesome.less'
// 引入定制标题的指令
import 'directives/customTitle.js'
// 在入口处引入模拟的假数据
import '@/mock'
// 引入完整的饿了么组件库
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
// 使用登录页粒子效果插件
Vue.use(VueParticles)
// 将axios绑定到vue原型上
Vue.prototype.$axios = axios
// Vue 的全局配置
Vue.config.productionTip = false
// 上线全局请求配置
axios.defaults.baseURL = 'api/v1/'

// http request 拦截器
axios.interceptors.request.use(
    config => {
        // 如果本地存储中有token字段， 就为所有请求加上Authorization请求头
        if (localStorage.token) {
            config.headers["Authorization"] = `Bearer ${localStorage.token}`
        }
        return config;
    },
    error => {
        console.log(error) // for debug
        Promise.reject(error)
    }
)

// http response 拦截器
axios.interceptors.response.use(
    response => {
        return response
    },
    error => {
        if (error.response) {
            switch (error.response.status) {
                // 如果后端返回没有权限
                case 401:
                    // 清除token信息并跳转到登录页面
                    localStorage.clear()
                    router.replace("/signin");
            }
        }
        return Promise.reject(error.response.data) // 返回接口返回的错误信息
    }
)

new Vue({
    el: '#app',
    i18n,
    router,
    store,
    template: '<App/>',
    components: { App }
})
