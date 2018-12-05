<template>
  <div class="charts">
    <el-row class="sel-row">
      <el-col :span="2" class="sel-label">选择城市：</el-col>
      <el-col :span="3">
        <el-select v-model="sel" filterable placeholder="请选择城市" @change="getData">
          <el-option v-for="(item,index) in options" :label="item.label" :value="item.value" :key="index">
          </el-option>
        </el-select>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="4">
        <el-card class="box-card">
          {{'实时温度：' + (cityData.wendu || 'XX') + '℃'}}
        </el-card>
      </el-col>
      <el-col :span="4">
        <el-card class="box-card">
          {{'空气质量：' + ( cityData.aqi || '暂无' )}}
        </el-card>
      </el-col>
      <el-col :span="16">
        <el-card class="box-card">
          {{cityData.ganmao || '暂无提示'}}
        </el-card>
      </el-col>
    </el-row>
    <div class="chart-wrap" v-loading="loading">
      <el-row>
        <el-col :span="24">
          <el-card class="box-card">
            <div class="animated fadeIn">
              <!-- 这里是折线图组件 -->
              <line-chart :lineData="lineData"></line-chart>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
// 引入城市列表
import arr from "../../assets/json/citylist.json";
// 引入自己写的折线图组件
import lineChart from "comp/charts/Line";
// 引入支持jsonp的库 https://github.com/webmodules/jsonp
// axios不支持jsonp https://github.com/axios/axios/blob/master/COOKBOOK.md#jsonp
import jsonp from "jsonp";

export default {
  name: "weather",
  components: {
    "line-chart": lineChart
  },
  data() {
    return {
      loading: true,
      cityData: {},
      options: arr,
      sel: "101010100",
      lineData: {
        xAxis: [],
        series1: [],
        series2: []
      },
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      this.loading = true
      jsonp(
        "http://wthrcdn.etouch.cn/weather_mini?citykey=" + this.sel,
        (err, res) => {
          this.loading = false
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
    renderChart(data) {
      this.lineData.xAxis = [];
      this.lineData.series1 = [];
      this.lineData.series2 = [];
      data.forEach((v, i) => {
        this.lineData.xAxis.push(v.date);
        this.lineData.series1.push(v.high.match(/-|\d+/g).join(""));
        this.lineData.series2.push(v.low.match(/-|\d+/g).join(""));
      });
    }
  }
};
</script>
<style scoped lang="scss">
.sel-row {
  margin-bottom: 20px;
  .sel-label {
    line-height: 36px;
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
