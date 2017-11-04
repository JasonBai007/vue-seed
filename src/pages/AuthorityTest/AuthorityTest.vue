<template>
    <div style="text-align:center;padding:250px" v-title="'权限测试'">
        <el-button class="animated rollIn" type="primary" size="large" @click="setAdmin"><i class="fa fa-user"></i>&nbsp;&nbsp;我是管理员</el-button>
        <el-button class="animated rollIn rythm rythm-high" size="large" @click="setUser"><i class="fa fa-user-o"></i>&nbsp;&nbsp;我是吃瓜群众</el-button>
    </div>
</template>
<script>

export default {
  name: "tpl",
  data() {
    return {};
  },
  created() {},
  methods: {
    setAdmin() {
      let menu = JSON.parse(localStorage.menu);
      menu[0].children.push({
        name: "报名列表",
        router: "/enroll-list",
        icon: "el-icon-document"
      });
      localStorage.menu = JSON.stringify(menu);
      this.$router.go(0);
    },
    setUser() {
      let menu = JSON.parse(localStorage.menu);
      menu[0].children.pop();
      localStorage.menu = JSON.stringify(menu);
      this.$router.go(0);
    }
  }
};
</script>
<style scoped lang="less">

</style>
