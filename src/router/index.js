import Vue from "vue";
import Router from "vue-router";

// 登录
const Signin = resolve => require(["@/views/Signin"], resolve);

// 非登录页的包裹组件
const Layout = resolve => require(["@/views/Layout"], resolve);

// 项目信息
const ProjectInfo = resolve => require(["@/views/ProjectInfo"], resolve);

// 关于作者
const About = resolve => require(["@/views/About"], resolve);

// 天气预报
const Weather = resolve => require(["@/views/Weather"], resolve);
// 立方体
const Cube = resolve => require(["@/views/Cube"], resolve);
// 权限测试
const AuthorityTest = resolve => require(["@/views/AuthorityTest"], resolve);
// 404
const Notfound = resolve => require(["@/views/Notfound"], resolve);

Vue.use(Router);

const router = new Router({
  routes: [
    // 首先是登录页的路由
    {
      path: "/signin",
      name: "Signin",
      meta: {
        requireAuth: false,
        title: "Auto Vue"
      },
      component: Signin
    },
    // 然后就是嵌套路由了，也就是登陆后的各个页面
    {
      path: "/",
      meta: {
        requireAuth: true
      },
      component: Layout,
      // redirect: '/notes', // 重定向到第一个子路由，否则只渲染Layout组件，这块儿使用时解除注释
      redirect: "/signin", // 这里重定向到登录页面，是为了展示使用，实际用这个项目开发时，需要注释这行，解除上一行的注释
      children: [
        {
          path: "notes",
          meta: {
            requireAuth: true,
            title: "开发备忘"
          },
          component: ProjectInfo
        },
        {
          path: "about",
          meta: {
            requireAuth: true,
            title: "关于作者"
          },
          component: About
        },
        {
          path: "weather",
          meta: {
            requireAuth: true,
            title: "天气预报"
          },
          component: Weather
        },
        {
          path: "cube",
          meta: {
            requireAuth: true,
            title: "魔幻立方"
          },
          component: Cube
        },
        {
          path: "authority",
          meta: {
            requireAuth: true,
            title: "权限测试"
          },
          component: AuthorityTest
        }
      ]
    },
    // 最后是404页面
    {
      path: "*",
      meta: {
        requireAuth: false,
        title: "404"
      },
      component: Notfound
    }
  ]
});

// 当一个导航触发时，全局的 before 钩子按照创建顺序调用。钩子是异步解析执行，此时导航在所有钩子 resolve 完之前一直处于等待中。
router.beforeEach((to, from, next) => {
  // 自动化修改页面标签的 title
  document.title = to.meta.title;
  // 如果已经登录，并且要去登录页，就不让TA去登录页，重定向到首页
  if (to.path === "/signin" && localStorage.token) {
    next("/notes");
  } else {
    next();
  }
});

export default router;
