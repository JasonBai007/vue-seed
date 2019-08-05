<template>
  <div>
    <!-- 这是侧导航 -->
    <side-bar></side-bar>
    <div class="con-wrap" :class="{conCollapse: isCollapse}">
      <!-- 这是顶部导航 -->
      <top-bar></top-bar>
      <bread v-if="$route.path !== '/dashboard'"></bread>
      <!-- 这是组件要插入的地方 -->
      <transition name="slide-fade">
        <router-view class="page-component-wrap"></router-view>
      </transition>
    </div>
  </div>
</template>
<script>
import TopBar from "@/components/TopBar";
import SideBar from "@/components/SideBar";
import Bread from "@/components/Bread";
export default {
  name: "layout",
  computed: {
    isCollapse() {
      return this.$store.state.common.isCollapse;
    }
  },
  components: {
    "top-bar": TopBar,
    "side-bar": SideBar,
    Bread
  }
};
</script>
<style lang="scss" scoped>
.con-wrap {
  position: relative;
  background: #f0f2f5;
  min-height: 100vh;
  padding-left: 180px;
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
/* 可以设置不同的进入和离开动画 */
.slide-fade-enter-active {
  transition: all 0.6s;
}
.slide-fade-leave-active {
  // transition: all .3s;
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(-5px);
  opacity: 0;
}
</style>

