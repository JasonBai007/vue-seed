<template>
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
export default {
  name: 'layout',
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
<style lang="scss" scoped>
.con-wrap {
  padding-left: 160px;
  transition: all 0.5s;
  h3 {
    margin-top: 0;
    color: #324157;
  }
  .page-component-wrap {
    padding: 10px;
  }
}
.con-wrap.conCollapse {
  padding-left: 64px;
  transition: all 0.5s;
}
</style>

