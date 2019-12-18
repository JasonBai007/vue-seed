<!-- 顶部导航组件 -->
<!-- 使用说明：<top-bar></top-bar> -->
<template>
  <div id="topbar-wrap" :class="{ topCollapsed: isCollapse }">
    <el-row type="flex" justify="space-between">
      <el-col :span="6">
        <i class="iconfont icon-spread toggle-btn" :style="iconStyle"  @click="toggleSiderBar"></i>
        <campaign-select></campaign-select>
      </el-col>
      <el-col :span="12">
        <el-row type="flex" class="row-right" justify="end" style="margin-right:-15px" align="middle">
          <el-col :span="5">
            <a class="animated fadeIn">{{$t('m.topbar.sayHi')}}，{{userName}}</a>
          </el-col>
          <el-col :span="2">
            <lang-switcher></lang-switcher>
          </el-col>
          <el-col :span="2">
            <colors-picker style="margin-top:3px"></colors-picker>
          </el-col>
          <el-col :span="2">
            <i class="fa fa-power-off logout" title="退出" @click.prevent="logout"></i>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import "../../static/css/iconfont.css";
import CampaignSelect from "./CampaignSelect";
import ColorsPicker from "./ColorsPicker";
import LangSwitcher from "./LangSwitcher";
export default {
  name: "topbar",
  data() {
    return {
      userName: localStorage.userName || ""
    };
  },
  components: {
    ColorsPicker,
    LangSwitcher,
    CampaignSelect
  },
  computed: {
    isCollapse() {
      return this.$store.state.common.isCollapse;
    },
    iconStyle() {
      return {
        transform: this.isCollapse ? "rotate(0deg)" : "rotate(180deg)"
      };
    }
  },
  mounted() {},
  methods: {
    toggleSiderBar() {
      this.$store.commit("toggleSiderBar");
    },
    logout() {
      let _temp = localStorage.curColor;
      localStorage.clear();
      localStorage.curColor = _temp;
      this.$router.push("signin");
    }
  }
};
</script>
<style scoped lang="scss">
#topbar-wrap {
  overflow: hidden;
  border-bottom: 1px solid #efefef;
  background: #fff;
  color: #353d47;
  padding: 0 15px;
  z-index: 4;
  box-sizing: border-box;
  a {
    line-height: 60px;
  }
  i {
    font-size: 20px;
    line-height: 60px;
    transition: all 0.5s;
    &:hover {
      color: #bb162b;
      cursor: pointer;
    }
  }
  .toggle-btn {
    vertical-align: middle;
    display: inline-block;
    margin-right: 20px;
  }

  .logout {
    text-decoration: none;
  }
}
.row-right > div {
  text-align: center;
}
</style>
