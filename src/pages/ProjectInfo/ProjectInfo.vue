<template>
    <div v-title="'项目信息'">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <i class="el-icon-edit"></i>&nbsp;&nbsp;
                <span>Vue开发备忘录</span>
            </div>
            <div class="text item">
                <ol>
                    <li v-for="(str,index) in notes" :key="index">{{str}}</li>
                </ol>
            </div>
        </el-card>

    </div>
</template>
<script>
export default {
  name: "projectinfo",
  components: {},
  mixins: [],
  data() {
    return {
        notes: [
            'Axios不支持JSONP，需要另外安装jsonp模块实现',
            '如果需要动态生成路由，可以使用router.addRoutes(routes)',
            '如果要区分新建页和编辑页，可以在路由对象中设置meta属性',
            '在组件中访问路由信息对象：this.$route',
            '在组件中访问路由实例：this.$router',
            '可以在全局拦截路由，也可以在单个组件中拦截路由',
            '如果是中等规模的项目，推荐使用vuex',
        ]
    };
  },
  methods: {}
};
</script>
<style scoped lang="less">

</style>
