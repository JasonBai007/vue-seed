<template>
  <i class="fa fa-language" title="切换语言" @click="toggleLanguage"></i>
</template>

<script>
export default {
  name: "langSwitcher",
  data() {
    return {};
  },
  methods: {
    toggleLanguage() {
      let locale = this.$i18n.locale;
      locale === "zh" ? (this.$i18n.locale = "en") : (this.$i18n.locale = "zh");
      let info = locale === "en" ? "切换成功" : "change language successfully";
      this.$message.success(info);
    }
  }
};
</script>

<style lang="scss" scoped>
.fa-language:hover {
  transform: rotateY(180deg);
}
</style>


