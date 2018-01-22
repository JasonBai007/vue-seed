<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>
<script>
export default {
  name: 'app'
}
</script>
<style lang="less">
// 注意以下是全局样式
html,
body {
  height: 100%;
}
body {
  margin: 0;
  padding: 0;
  background: #f3f3f4;
  #app {
    height: 100%;
    .con-wrap {
      padding-left: 160px;
      transition: all 0.3s;
      h3 {
        margin-top: 0;
        color: #324157;
      }
      .page-component-wrap {
        padding: 15px;
      }
    }
    .con-wrap.conCollapse {
      padding-left: 64px;
      transition: all 0.3s;
    }
  }
}
</style>
