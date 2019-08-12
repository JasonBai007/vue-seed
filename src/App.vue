<template>
  <div id="app">
    <router-view></router-view>
    <!-- 如果不同路由渲染同一组件，会导致数据不更新，这时候可以巧妙的加一个不同的Key -->
    <!-- <router-view :key="$route.fullpath"></router-view> -->
  </div>
</template>
<script>
import router from "./router/index";
import generateRoutes from "./router/parse";
export default {
  name: "app",
  // 在SPA初始化时，立刻从本地存储中拿到原始数据，解析后注入到路由实例中【吐血】
  created() {
    if (localStorage.menu) {
      const menu = JSON.parse(localStorage.menu);
      const _routes = generateRoutes(menu);
      router.addRoutes(_routes);
    }
  }
};
</script>

<style lang="scss">
// 此处的lang必须是scss，
// 如果是普通的css的话，最开始，下方全局的样式将不会被换肤插件抽离出来，修改后刷新页面才可以。
// 所以，只能改成scss了，但是是全局的
html,
body {
  height: 100%;
}

body {
  margin: 0;
  padding: 0;
  font-family: "Helvetica Neue", Helvetica, Arial, "Microsoft Yahei", sans-serif;
}
body #app {
  height: 100%;
}

/* 覆盖左侧导航样式 */
.el-menu {
  width: 100%;
  border-right: none !important;
}

.el-menu-item [class^="el-icon-"] {
  color: #333;
}

.el-menu .el-submenu__title i {
  color: #333;
}
.el-menu-item.is-active {
  background: #f8e8ea;
  border-right: 3px solid #bb162b;
}
.el-submenu.is-opened .el-menu {
  background: #fafafa;
}

/* 登录页覆盖账号输入框样式 */
.bg form .el-input__inner {
  background: transparent;
  color: #fff;
  border: none;
  border-bottom: 1px solid #aaa;
  border-radius: 0;
}
</style>
