<!-- 左侧导航组件 -->
<!-- 使用说明：<side-bar></side-bar> -->
<template>
  <div id="sidebar-wrap" :class="{ collapsed: toggSiderBar }">
    <!-- 顶部图标 -->
    <h3 class="logo">
      <span>{{toggSiderBar || langType === 'en' ? 'SIP': '销售洞察平台'}}</span>
    </h3>

    <!-- 循环生成侧栏菜单 -->
    <!-- <el-menu background-color="#3f4d67" text-color="#fff" :default-active="$route.path" :unique-opened="true" :router="true" mode="vertical" :collapse="toggSiderBar"> -->
    <el-menu :default-active="$route.path" :unique-opened="true" :router="true" mode="vertical" :collapse="toggSiderBar">
      <template v-for="item in menu">
        <!-- 多级菜单外壳 -->
        <el-submenu v-if="item.children.length !== 0" :index="item.router" :key="item.router">
          <!-- 一级菜单包裹层 -->
          <template slot="title">
            <i :class="item.icon"></i>
            <span slot="title">{{langType === 'en'? item.name_en: item.name}}</span>
          </template>

          <!-- 二级菜单选项 -->
          <el-menu-item v-for="child in item.children" :index="child.router" :key="child.router">
            <!-- <i class="fa fa-long-arrow-right"></i> -->
            <span slot="title">{{langType === 'en'? child.name_en: child.name}}</span>
          </el-menu-item>
        </el-submenu>

        <!-- 单级菜单 -->
        <el-menu-item v-else :index="item.router" :key="item.router">
          <i :class="item.icon"></i>
          <span slot="title">{{langType === 'en'? item.name_en: item.name}}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: "sidebar",
  data() {
    return {
      isMusicOn: false,
      menu: localStorage.menu ? JSON.parse(localStorage.menu) : []
    };
  },
  computed: {
    toggSiderBar() {
      return this.$store.state.common.isCollapse;
    },
    langType() {
      return this.$i18n.locale;
    }
  },
  created() {},
  methods: {}
};
</script>
<style scoped lang="scss">
#sidebar-wrap {
  width: 180px;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 5;
  transition: all 0.3s;
  background: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  &.collapsed {
    width: 64px;
    transition: all 0.3s;
  }
  .logo {
    color: #333;
    letter-spacing: 1px;
    text-align: center;
    padding: 18px 0;
    margin: 0;
    height: 60px;
    box-sizing: border-box;
    border-bottom: 1px solid #efefef;
  }
}

.el-menu {
  height: 100%;
}

// 美化左侧导航的留白
.el-submenu .el-menu-item {
  padding: 0 20px;
  min-width: 160px;
  padding-left: 52px !important;
  i {
    padding-right: 10px;
  }
}
</style>
