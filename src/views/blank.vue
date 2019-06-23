<template>
  <div class="wrap">
    Now,
    <span class="type"></span>
  </div>
</template>
<script>
import Typed from "typed.js";
export default {
  name: "blank",
  data() {
    return {};
  },
  mounted() {
    let typed = new Typed(".type", {
      strings: [" you can start from here."],
      typeSpeed: 100,
      startDelay: 500,
      loop: true,
      showCursor: true,
      cursorChar: "|",
      autoInsertCss: true
    });
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
.wrap {
  background: #fff;
  min-height: 120px;
  border-radius: 5px;
  padding: 20px;
  box-sizing: border-box;
}
</style>

