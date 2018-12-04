<!-- 顶部导航组件 -->
<!-- 使用说明：<top-bar></top-bar> -->
<template>
    <div id="topbar-wrap" :class="{ topCollapsed: isCollapse }">
        <el-row type="flex" justify="space-between">
            <el-col :span="5">
                <i :class="[isCollapse ? 'icon-spread': 'icon-recovery','iconfont']" @click="toggleSiderBar"></i>
            </el-col>
            <el-col :span="12">
                <el-row type="flex" class="row-right" justify="end">
                    <el-col :span="5">
                        <a class="animated fadeIn">{{$t('m.topbar.sayHi')}}，{{userName}}</a>
                    </el-col>
                    <el-col :span="2">
                        <i class="fa fa-language" title="切换语言" @click="toggleLanguage"></i>
                    </el-col>
                    <el-col :span="2">
                        <i :class="[isFullscreen? 'fa-compress': 'fa-arrows-alt','fa ']" title="切换全屏" @click="toggleFullscreen"></i>
                    </el-col>
                    <el-col :span="3">
                        <i class="fa fa-sign-out logout" title="退出" @click.prevent="logout"></i>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import screenfull from 'screenfull'
import bus from '@/bus'
import '../../static/css/iconfont.css'
export default {
  name: 'topbar',
  data() {
    return {
      userName: localStorage.userName || '',
      isFullscreen: false
    }
  },
  computed: {
    isCollapse() {
      return this.$store.state.common.isCollapse
    }
  },
  methods: {
    toggleSiderBar() {
      this.$store.commit('toggleSiderBar')
    },
    toggleLanguage() {
      let locale = this.$i18n.locale
      locale === 'zh' ? (this.$i18n.locale = 'en') : (this.$i18n.locale = 'zh')
      let info = locale === 'en' ? '切换成功' : 'change language successfully'
      this.$message.success(info)
    },
    toggleFullscreen() {
      if (!screenfull.enabled) {
        this.$message.warning('您的浏览器不支持全屏')
        return false
      }
      screenfull.toggle()
      // isFullscreen 居然是反的
      this.isFullscreen = !screenfull.isFullscreen
    },
    logout() {
      localStorage.clear()
      bus.$emit('stopMusic')
      this.$router.push('signin')
    }
  },
  watch: {
    $route(to, from) {
      this.pathName = this.$route.path.substring(1)
      this.nowPath = this.$route.path
    }
  }
}
</script>
<style scoped lang="less">
#topbar-wrap {
  overflow: hidden;
  border-bottom: 1px solid #ddd;
  background: #fff;
  color: #353d47;
  padding: 0 15px;
  z-index: 4;
  box-sizing: border-box;
  .logo {
    color: #fff;
    font-weight: bold;
    line-height: 60px;
    margin: 0;
    letter-spacing: 1px;
  }
  .freeBtn {
    margin-top: 12px;
    text-align: right;
  }
  .name {
    font-weight: 600;
  }
  .fa {
    font-size: 24px;
    transition: all 0.5s;
    &:hover {
      cursor: pointer;
    }
  }
  a {
    line-height: 60px;
  }
  a.logout {
    color: #353d47;
    text-decoration: none;
    &:hover {
      color: #20a0ff;
    }
  }
  i {
    font-size: 20px;
    line-height: 60px;
  }
  .logout {
    color: #353d47;
    &:hover {
      color: #20a0ff;
    }
  }
}
.iconfont:hover {
  cursor: pointer;
}
.row-right > div {
  text-align: center;
}
</style>
