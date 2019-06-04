<template>
  <div>
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
</style>

