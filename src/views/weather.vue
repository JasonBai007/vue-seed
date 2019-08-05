<template>
  <div class="charts">
    <el-row class="sel-row">
      <el-col :span="2" class="sel-label">选择城市：</el-col>
      <el-col :span="3">
        <el-select v-model="sel" filterable placeholder="请选择城市" @change="getData">
          <el-option v-for="(item,index) in options" :label="item.label" :value="item.value" :key="index"></el-option>
        </el-select>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="4">
        <el-card class="box-card">{{'实时温度：' + (cityData.wendu || 'XX') + '℃'}}</el-card>
      </el-col>
      <el-col :span="4">
        <el-card class="box-card">{{'气象状况：' + ( cityData.forecast[0].type || '暂无' )}}</el-card>
      </el-col>
      <el-col :span="16">
        <el-card class="box-card">{{cityData.ganmao || '暂无提示'}}</el-card>
      </el-col>
    </el-row>
    <div class="chart-wrap" v-loading="loading">
      <el-row>
        <el-col :span="24">
          <el-card class="box-card">
            <div class="animated fadeIn">
              <!-- 图表组件 -->
              <a-chart :chartData="chartData"></a-chart>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
// 引入城市列表
import arr from "@/assets/json/citylist.json";
// 引入自己写的通用图表组件
import AChart from "@/components/AChart";
// 引入支持jsonp的库 https://github.com/webmodules/jsonp
// axios不支持jsonp https://github.com/axios/axios/blob/master/COOKBOOK.md#jsonp
import jsonp from "jsonp";

export default {
  name: "weather",
  components: {
    "a-chart": AChart
  },
  data() {
    return {
      loading: true,
      cityData: {
        wendu: "",
        forecast: [
          {
            type: ""
          }
        ],
        ganmao: ""
      },
      options: arr,
      sel: "101010100",
      chartData: {}
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      this.loading = true;
      jsonp(
        "http://wthrcdn.etouch.cn/weather_mini?citykey=" + this.sel,
        (err, res) => {
          this.loading = false;
          if (err) {
            console.error(err.message);
          } else {
            let data = res.data;
            this.cityData = data;
            this.renderChart(data.forecast);
          }
        }
      );
    },
    // 构建配置对象，渲染折线图
    renderChart(data) {
      let opts = {
        title: {
          text: "近五天气温走势",
          x: "center",
          textStyle: {
            color: "#666"
          }
        },
        grid: {
          top: "15%",
          left: "1%",
          right: "1%",
          bottom: "12%",
          containLabel: true
        },
        tooltip: {
          trigger: "axis",
          // 猜测文档中 a b c d 的时候到了
          formatter: "{b}: <br /> {a0}: {c0}℃ <br /> {a1}: {c1}℃"
        },
        toolbox: {
          show: true,
          top: 0,
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
          data: data.map(v => v.date)
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
            smooth: true,
            data: data.map(v => v.high.match(/-|\d+/g).join("")),
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
            smooth: true,
            data: data.map(v => v.low.match(/-|\d+/g).join("")),
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
      this.chartData = opts;
    }
  }
};
</script>
<style scoped lang="scss">
.sel-row {
  margin-bottom: 20px;
  .sel-label {
    line-height: 40px;
  }
}

.chart-wrap {
  margin-top: 20px;
}

.el-card__header {
  padding: 10px 20px !important;
}

.ct {
  float: right;
  line-height: 21px;
  &:hover {
    color: #20a0ff;
    cursor: pointer;
  }
}
</style>
