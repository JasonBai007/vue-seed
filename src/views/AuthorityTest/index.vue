<template>
    <div style="text-align:center;padding:250px" v-title="'权限测试'">
        <el-button class="animated rollIn" type="primary" size="large" @click="setAdmin" :disabled="isAdminAble"><i class="fa fa-user"></i>&nbsp;&nbsp;我是管理员</el-button>
        <el-button class="animated rollIn rythm rythm-high" size="large" @click="setUser" :disabled="!isAdminAble"><i class="fa fa-user-o"></i>&nbsp;&nbsp;我是吃瓜群众</el-button>
    </div>
</template>
<script>
export default {
  name: "tpl",
  computed: {
    isAdminAble() {
      let menu = JSON.parse(localStorage.menu);
      if (menu[0].children.length === 2) {
        return true;
      } else {
        return false;
      }
    }
  },
  methods: {
    setAdmin() {
      let menu = JSON.parse(localStorage.menu);
      menu[0].children.push({
        name: "关于作者",
        name_en: 'About',
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
