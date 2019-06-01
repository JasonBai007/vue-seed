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
// 这里是坑啊，文件路径中好像不能用@符号
// 引入全局样式
@import "./assets/scss/global.scss";
</style>
