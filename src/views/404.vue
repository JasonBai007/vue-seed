<template>
  <div>
    <div class="wrap">
      <h1 class="animated fadeIn">404</h1>
    </div>
    <div class="back animated fadeInUp">
      <i title="返回" class="fa fa-reply-all" @click="goBack"></i>
    </div>
  </div>
</template>
<script>
export default {
  name: "notfound",
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>
<style scoped lang="scss">
.wrap {
  height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  h1 {
    text-align: center;
    font-size: 12em;
    font-family: fantasy;
    color: #475669;
    letter-spacing: 40px;
  }
}

.back {
  position: fixed;
  right: 10vw;
  bottom: 8vw;
  i {
    font-size: 2em;
    color: #475669;
    &:hover {
      cursor: pointer;
      color: #324057;
    }
  }
}
</style>
