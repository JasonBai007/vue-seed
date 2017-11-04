import Vue from 'vue'
import Router from 'vue-router'
import Cookies from 'js-cookie'

// 登录
const Signin = resolve => require(['pages/Signin/Signin'], resolve)

// 项目信息
const ProjectInfo = resolve => require(['pages/ProjectInfo/ProjectInfo'], resolve)

// 报名列表
const EnrollList = resolve => require(['pages/EnrollList/EnrollList'], resolve)

// 天气预报
const Weather = resolve => require(['pages/Weather/Weather'], resolve)
// 立方体
const Cube = resolve => require(['pages/Cube/Cube'], resolve)
// 权限测试
const AuthorityTest = resolve => require(['pages/AuthorityTest/AuthorityTest'], resolve)
// 404
const Notfound = resolve => require(['pages/Notfound/Notfound'], resolve)

Vue.use(Router)

const router = new Router({
    routes: [{
        path: '/',
        meta: {
            hidden: true,
            requireAuth: true
        },
        redirect: '/project-info'
    }, {
        path: '/signin',
        name: 'Signin',
        meta: {
            hidden: true,
            requireAuth: false
        },
        components: {
            loginview: Signin
        }
    }, {
        path: '/project-info',
        meta: { requireAuth: true },
        component: ProjectInfo
    }, {
        path: '/enroll-list',
        meta: { requireAuth: true },
        component: EnrollList
    }, {
        path: '/weather',
        meta: { requireAuth: true },
        component: Weather
    }, {
        path: '/cube',
        meta: { requireAuth: true },
        component: Cube
    }, {
        path: '/authority-test',
        meta: { requireAuth: true },
        component: AuthorityTest
    }, {
        path: '*',
        meta: { requireAuth: true },
        component: Notfound
    }]
})

// 当一个导航触发时，全局的 before 钩子按照创建顺序调用。钩子是异步解析执行，此时导航在所有钩子 resolve 完之前一直处于等待中。
router.beforeEach((to, from, next) => {
    // 判断该路由是否需要登录权限
    if (to.meta.requireAuth) {
        // 判断是否是登录状态
        if (Cookies.get('isLogin') == '1') {
            next()
        } else {
            // 否则跳回登录页
            next('/signin')
        }
    } else {
        // 如果不需要登录权限，就直接resolve这个钩子
        next()
    }
})

export default router
