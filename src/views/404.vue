<template functional>
  <div>
    <div class="wrap">
      <div style="margin-top:-20px;">
        <h1 class="animated swing">404</h1>
        <h4>We're sorry, but the page you were looking for doesn't exist.</h4>
        <el-button type="primary" icon="el-icon-back" @click="$router.go(-1)" size="small" style="margin-left:-20px">Come Back</el-button>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.wrap {
  height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  h1 {
    text-align: center;
    font-size: 10em;
    font-family: fantasy;
    color: #475669;
    letter-spacing: 40px;
    margin: 0;
  }
  h4 {
    color: #666;
  }
}
</style>
