<template>
    <!-- 包裹层设置初始高度，宽度不管 -->
    <div id="myChartWrap">
        <!-- 这里是要渲染的图表 -->
        <div id="myChart" style="height:300px;"></div>
    </div>
</template>
<script>
// 引入基本模板
let echarts = require('echarts/lib/echarts')
// 引入折线图组件
require('echarts/lib/chart/line')
// 引入提示框和图例组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/legend')

export default {
    name: 'line',
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
        }
    },
    mounted() {
        // 设置图表的初始宽度
        this.setWidth();
        // 渲染图表
        this.renderLine();
        // 添加监听事件，监听窗口变化
        this.resizeChart();
    },
    methods: {
        setWidth() {
            let chart = document.querySelector('#myChart');
            let wrap = document.querySelector('#myChartWrap');
            // 首先计算出初始宽度：窗口宽度 - 左右两侧的padding
            chart.style.width = window.innerWidth - 230 + 'px';
        },
        resizeChart() {
            //监听窗口宽度变化，注意要使用箭头函数
            window.onresize = () => {
                //设置图表宽高
                this.setWidth();
                // 调用echarts的resize函数
                this.myChart.resize();
            };
        },
        renderLine() {
            let data = this.data;
            let opts = {
                grid: {
                    top: '7%',
                    left: '3%',
                    right: '3%',
                    bottom: '12%',
                    containLabel: true
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    bottom: 0,
                    data: ['最高气温', '最低气温']
                },
                xAxis: {
                    data: data.xAxis.length === 0 ? ['星期一', '星期二', '星期三', '星期四', '星期五'] : data.xAxis
                },
                yAxis: {
                    type: 'value',
                    axisLabel: {
                        formatter: '{value} °C'
                    }
                },
                series: [{
                    name: '最高气温',
                    type: 'line',
                    data: data.series1.length === 0 ? [0, 0, 0, 0, 0] : data.series1,
                    label: {
                        normal: {
                            show: true,
                            position: 'top',
                            formatter: '{c}℃'
                        }
                    }
                }, {
                    name: '最低气温',
                    type: 'line',
                    data: data.series2.length === 0 ? [0, 0, 0, 0, 0] : data.series2,
                    label: {
                        normal: {
                            show: true,
                            position: 'top',
                            formatter: '{c}℃'
                        }
                    }
                }]
            }
            this.myChart = echarts.init(document.querySelector('#myChart'))
            this.myChart.setOption(opts)
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
}
</script>
<style lang="less">

</style>
