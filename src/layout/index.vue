<template>
  <div>
    <!-- 这是侧导航 -->
    <side-bar></side-bar>
    <div class="con-wrap" :class="{conCollapse: isCollapse}">
      <!-- 这是顶部导航 -->
      <top-bar></top-bar>
      <!-- 这是组件要插入的地方 -->
      <div class="page-component-wrap">
        <header>
          <h2>{{$route.meta.title}}</h2>
        </header>
        <router-view class="animated fadeIn"></router-view>
      </div>
    </div>
  </div>
</template>
<script>
import TopBar from "@/components/TopBar";
import SideBar from "@/components/SideBar";
export default {
  name: "layout",
  computed: {
    isCollapse() {
      return this.$store.state.common.isCollapse;
    }
  },
  components: {
    "top-bar": TopBar,
    "side-bar": SideBar
  }
};
</script>
<style lang="scss" scoped>
.con-wrap {
  padding-left: 180px;
  transition: all 0.3s;
  h2 {
    color: #fff;
  }
  .page-component-wrap {
    position: relative;
    padding: 0px 25px 20px;
    overflow: hidden;
    &::before {
      background-color: #8c99e0;
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 150px;
      z-index: -1;
    }
  }
}
.con-wrap.conCollapse {
  padding-left: 64px;
  transition: all 0.3s;
}
</style>

