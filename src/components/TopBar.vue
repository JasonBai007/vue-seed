<!-- 顶部导航组件 -->
<!-- 使用说明：<top-bar></top-bar> -->
<template>
    <div id="topbar-wrap" :class="{ topCollapsed: isCollapse }">
        <el-row type="flex" justify="space-between">
            <el-col :span="5">
                <i :class="[isCollapse? 'nav-rotate': '','fa fa-bars']" @click="toggleSiderBar"></i>
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
                        <i class="fa fa-arrows-alt" title="切换全屏" @click="toggleFullscreen"></i>
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
import Cookies from 'js-cookie'
export default {
  name: 'topbar',
  data() {
    return {
      userName: localStorage.userName || ''
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
        this.$message({
          message: '您的浏览器不支持全屏',
          type: 'warning'
        })
        return false
      }
      screenfull.toggle()
    },
    logout() {
      Cookies.set('isLogin', '0')
      localStorage.clear()
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
  border-bottom: 1px solid #e7eaec;
  background: #324157;
  color: #fff;
  padding: 0 15px;
  z-index: 4;
  box-sizing: border-box;
  transition: all 0.3s;
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
  .el-icon-setting {
    transition: 1s;
    &:hover {
      transform: rotate(180deg);
      cursor: pointer;
    }
  }
  .fa {
    font-size: 24px;
    transition: all 0.3s;
    &:hover {
      cursor: pointer;
    }
  }
  a {
    line-height: 60px;
  }
  a.logout {
    color: #fff;
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
    color: #fff;
    &:hover {
      color: #20a0ff;
    }
  }
}
.fa.nav-rotate {
  transform: rotate(90deg);
}
.row-right > div {
  text-align: center;
}
</style>
