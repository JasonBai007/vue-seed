<template>
  <div class="bread-wrap">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/dashboard' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item v-for="(item,index) in list" :key="index">{{item}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: "bread",
  components: {},
  data() {
    return {
      list: []
    };
  },
  mounted() {
    this.generateList(this.$route.meta.bread);
  },
  computed: {},
  methods: {
    generateList(str) {
      // 判断是否是多级的面包屑
      if (str.indexOf("&") === -1) {
        this.list = [str];
      } else {
        this.list = str.split("&");
      }
    }
  },
  watch: {
    $route(n, o) {
      this.generateList(n.meta.bread);
    }
  }
};
</script>

<style lang="scss" scoped>
.bread-wrap {
  background: #fff;
  padding: 20px 15px;
}
</style>


