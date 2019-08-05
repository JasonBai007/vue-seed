<template>
  <el-select v-model="value" placeholder="Campaign" clearable filterable size="small">
    <el-option v-for="item in options" :key="item.id" :label="item.name" :value="item.id"></el-option>
  </el-select>
</template>

<script>
export default {
  name: "campaignselect",
  data() {
    return {
      options: [],
      value: ""
    };
  },
  computed: {},
  mounted() {
    this.getCampaignList();
  },
  methods: {
    async getCampaignList() {
      this.options = await this.$http.get("campaign");
    }
  }
};
</script>

<style lang="scss" scoped>
</style>


