<template>
  <section>
    <div class="item" v-for="(item,index) in $attrs.data" :key="index">
      <countTo class="num" :startVal="0" :endVal="item.num" :duration="3000"></countTo>
      <div class="title">{{item.title}}</div>
    </div>
  </section>
</template>

<script>
import countTo from "vue-count-to";
export default {
  name: "keyindex",
  components: { countTo },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
section {
  display: flex;
  .item {
    flex-grow: 1;
    text-align: center;
    padding: 25px 0;
    background: #fff;
    margin-right: 20px;
    &:last-child {
      margin-right: 0;
    }
    &:hover {
      box-shadow: 0px 0px 10px #ddd;
    }
    .num {
      font-size: 30px;
      color: #bb162b;
    }
    .title {
      margin-top: 7px;
      font-size: 12px;
    }
  }
}
</style>


