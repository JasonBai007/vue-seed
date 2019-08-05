<template>
  <div>
    <key-index :data="keyIndexArr"></key-index>
    <section class="wrap">
      <div class="item1">You</div>
      <div class="item2">Can</div>
      <div class="item3">Start</div>
      <div class="item4">From</div>
      <div class="item5">Here</div>
    </section>
  </div>
</template>

<script>
import KeyIndex from "@/components/KeyIndex";
export default {
  name: "dashboard",
  components: {
    KeyIndex
  },
  data() {
    return {
      keyIndexArr: []
    };
  },
  computed: {},
  mounted() {
    this.getKeyIndexData();
  },
  methods: {
    async getKeyIndexData() {
      this.keyIndexArr = await this.$http.get("getKeyIndexData");
    }
  }
};
</script>

<style lang="scss" scoped>
.wrap {
  margin-top: 20px;
  display: grid;
  grid-gap: 20px 20px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 200px);
  & > div {
    background: #fff;
    text-align: center;
    line-height: 200px;
  }
  .item4 {
    grid-column: 1/3;
  }
}
</style>


