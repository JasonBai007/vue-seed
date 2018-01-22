<template>
    <!-- 如果路由信息中的meta中的hidden等于true，就隐藏下面的视图 -->
    <div>
        <!-- 这是侧导航 -->
        <side-bar></side-bar>
        <div class="con-wrap" :class="{conCollapse: isCollapse}">
            <!-- 这是顶部导航 -->
            <top-bar></top-bar>
            <!-- 这是组件要插入的地方 -->
            <router-view class="page-component-wrap animated fadeIn"></router-view>
        </div>
    </div>
</template>
<script>
import TopBar from 'comp/TopBar'
import SideBar from 'comp/SideBar'
import 'directives/customTitle.js'
import 'filters/handleNum.js'
export default {
  name: 'app',
  computed: {
    isCollapse() {
      return this.$store.state.common.isCollapse
    }
  },
  components: {
    'top-bar': TopBar,
    'side-bar': SideBar
  }
}
</script>
<style lang="less">
// 左侧导航图表垂直方向对齐
// 宽度还得自己设定，坑死
.el-menu {
  width: 100%;
}
.el-menu-item [class^='el-icon-'] {
  vertical-align: middle;
  color: #ddd;
}
.el-submenu [class^='el-icon-'] {
  color: #ddd;
}
.el-submenu__title i {
  vertical-align: middle;
  color: #ddd;
}

// 自定义必填项的左上角红色星号
.required-self label.el-form-item__label:before {
  content: '*';
  color: #ff4949;
  margin-right: 4px;
}
</style>
