<template>
  <el-color-picker v-model="color" size="mini" @change="changeTheme" :predefine="predefineColors"></el-color-picker>
</template>

<script>
import client from "webpack-theme-color-replacer/client";
import forElementUI from "webpack-theme-color-replacer/forElementUI";
export default {
  name: "colors-picker",
  data() {
    return {
      color: localStorage.curColor || "#bb162b",
      // 预设几个漂亮的颜色
      predefineColors: [
        "#bb162b",
        "#16A085",
        "#27AE60",
        "#2980B9",
        "#8E44AD",
        "#2C3E50",
        "#D35400",
        "#C0392B"
      ]
    };
  },
  mounted() {
    this.changeTheme(this.color);
  },
  methods: {
    changeTheme(newColor) {
      // 每次改变主题色都存储到本地
      localStorage.curColor = newColor;
      // 插件的固定写法，其中forElementUI.getElementUISeries，可以生成一系列颜色的数组
      // 从主题色，然后逐渐变浅，其中第一个元素是主题色，第二个元素是rgb格式的
      // 这一系列从深到浅的颜色，与webpack插件中配置中的matchColors一一对应
      let options = {
        newColors: [...forElementUI.getElementUISeries(newColor)]
      };
      // 可以打印查看生成的色系
      console.log(JSON.stringify(options.newColors, null, 4));
      // 构建临时数组
      let _temp = [...options.newColors];
      // 剔除第二个元素，或从第二个开始的N个元素
      _temp.splice(1, 4);
      // 通知全局变量，改变图表配色
      this.$store.commit("setChartTheme", _temp);
      // 调用插件方法，批量替换matchColors中的颜色族
      client.changer.changeColor(options, Promise).then(() => {
        console.log("Theme colors changed!");
      });
    }
  }
};
</script>

<style>
</style>
