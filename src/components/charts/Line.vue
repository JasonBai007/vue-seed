<template>
    <!-- 包裹层设置初始高度，宽度不管 -->
    <div id="myChartWrap">
        <!-- 这里是要渲染的图表 -->
        <div id="lineId"></div>
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
    console.log("初始化data");
    return {
      data: {
        xAxis: [],
        series1: [],
        series2: []
      }
    };
  },
  computed: {
    myChart() {
      console.log("生成myChart实例");
      return echarts.init(document.getElementById("lineId"));
    }
  },
  mounted() {
    console.log("初始化mounted");
    // 设置图表的初始大小
    this.setSize();
    // 渲染图表
    // this.renderLine();
    // 添加监听事件，监听窗口变化
    window.onresize = () => {
      //设置图表宽高
      this.setSize();
    };
  },
  destroyed() {
    console.log("被销毁了");
    //   组件被销毁后解除监听事件
    window.onresize = null;
  },
  methods: {
    setSize() {
      console.log("setSize被执行");
      let wrapWidth = document.getElementById("myChartWrap").clientWidth;
      let wrapHeight = document.getElementById("myChartWrap").clientHeight;
      this.myChart.resize({
        width: wrapWidth,
        height: wrapHeight
      });
    },
    renderLine() {
      console.log("renderLine被执行");
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
      echarts.init(document.getElementById("lineId"));
      console.log("向图表实例中插入数据");
      this.myChart.setOption(opts);
    }
  },
  watch: {
    // 深度监听传入的数据变化，一定加deep属性哦
    lineData: {
      handler(newVal, val) {
        console.log("触发watch事件");
        this.data = newVal;
        this.renderLine();
      },
      deep: true
    }
  }
};
</script>
<style lang="less">
#myChartWrap {
  width: 100%;
  height: calc(100vh - 45px);
}
</style>
