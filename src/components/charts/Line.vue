<template>
    <!-- 包裹层设置初始高度，宽度不管 -->
    <div id="myChartWrap">
        <!-- 这里是要渲染的图表 -->
        <div :id="chartId" style="height:300px;"></div>
    </div>
</template>
<script>
// 引入基本模板
let echarts = require("echarts/lib/echarts");
// 引入折线图组件
require("echarts/lib/chart/line");
require("echarts/lib/chart/bar");
// 引入提示框和图例组件
require("echarts/lib/component/title");
require("echarts/lib/component/tooltip");
require("echarts/lib/component/toolbox");
require("echarts/lib/component/legend");

export default {
  name: "line",
  props: {
    // 这里是从父组件传入的数据
    lineData: Object
  },
  data() {
    return {
      data: {
        xAxis: [],
        series1: [],
        series2: []
      }
    };
  },
  computed: {
    chartId: function() {
      return "id-" + new Date().getTime();
    }
  },
  mounted() {
    // 设置图表的初始大小
    this.setSize();
    // 渲染图表
    this.renderLine();
    // 添加监听事件，监听窗口变化
    this.resizeChart();
  },
  destroyed() {
    //   组件被销毁后解除监听事件
    window.onresize = null;
  },
  methods: {
    setSize() {
      let chart = document.getElementById(this.chartId);
      chart.style.width = window.innerWidth - 230 + "px";
      chart.style.height = window.innerHeight * 56 / 100 + "px";
    },
    resizeChart() {
      //监听窗口宽度变化，注意要使用箭头函数
      window.onresize = () => {
        //设置图表宽高
        this.setSize();
        // 调用echarts的resize函数
        this.myChart.resize();
      };
    },
    renderLine() {
      let data = this.data;
      let opts = {
        title: {
          text: "近五天气温趋势",
          x: "center",
          textStyle: {
            color: "#666"
          }
        },
        color: this.$store.state.module1.chartTheme,
        grid: {
          top: "20%",
          left: "3%",
          right: "3%",
          bottom: "12%",
          containLabel: true
        },
        tooltip: {
          trigger: "axis"
        },
        toolbox: {
          show: true,
          top: 20,
          right: 20,
          feature: {
            dataView: { readOnly: false },
            magicType: { type: ["line", "bar"] },
            dataZoom: {
              yAxisIndex: "none"
            },
            restore: {},
            saveAsImage: {}
          }
        },
        legend: {
          bottom: 0,
          data: ["最高气温", "最低气温"]
        },
        xAxis: {
          data:
            data.xAxis.length === 0
              ? ["星期一", "星期二", "星期三", "星期四", "星期五"]
              : data.xAxis
        },
        yAxis: {
          type: "value",
          axisLabel: {
            formatter: "{value} °C"
          }
        },
        series: [
          {
            name: "最高气温",
            type: "line",
            data: data.series1.length === 0 ? [0, 0, 0, 0, 0] : data.series1,
            label: {
              normal: {
                show: true,
                position: "top",
                formatter: "{c}℃"
              }
            }
          },
          {
            name: "最低气温",
            type: "line",
            data: data.series2.length === 0 ? [0, 0, 0, 0, 0] : data.series2,
            label: {
              normal: {
                show: true,
                position: "top",
                formatter: "{c}℃"
              }
            }
          }
        ]
      };
      this.myChart = echarts.init(document.getElementById(this.chartId));
      this.myChart.setOption(opts);
    }
  },
  watch: {
    // 深度监听传入的数据变化，一定加deep属性哦
    lineData: {
      handler(newVal, val) {
        this.data = newVal;
        this.renderLine();
      },
      deep: true
    }
  }
};
</script>
<style lang="less">

</style>
