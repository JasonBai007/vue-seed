<template>
    <div id="app">

        <!-- 这是登录组件要被渲染到的地方 -->
        <router-view name="loginview"></router-view>

        <!-- 如果路由信息中的meta中的hidden等于true，就隐藏下面的视图 -->
        <div v-if="!this.$route.meta.hidden">
            <!-- 这是侧导航 -->
            <side-bar :toggSiderBar="controlSB"></side-bar>
            <div class="con-wrap" :class="{conCollapse: controlSB}">
                <!-- 这是顶部导航 -->
                <top-bar @toggleSiderBar="passtoSiderBar"></top-bar>
                <!-- 这是组件要插入的地方 -->
                <router-view class="page-component-wrap animated fadeIn"></router-view>
            </div>
        </div>
    </div>
</template>
<script>
import TopBar from 'comp/TopBar'
import SideBar from 'comp/SideBar'
import 'directives/customTitle.js'
import 'filters/handleNum.js'
export default {
    name: 'app',
    data() {
        return {
            controlSB: false
        }
    },
    components: {
        'top-bar': TopBar,
        'side-bar': SideBar,
    },
    methods: {
        passtoSiderBar(load) {
            this.controlSB = load
        }
    }
}
</script>
<style lang="less">
html,body {
    height: 100%;
}
// 注意以下是全局样式
body {
    margin: 0;
    padding: 0;
    background: #f3f3f4;
    #app {
        height: 100%;
        .con-wrap {
            padding-left: 160px;
            transition: all 0.3s;
            h3 {
                margin-top: 0;
                color: #324157;
            }
            .page-component-wrap {
                padding: 15px;
            }
        }
        .con-wrap.conCollapse {
            padding-left: 64px;
            transition: all 0.3s;
        }
    }
}

// 全局加重面包屑导航样式
.el-breadcrumb__item__inner {
    font-size: 16px;
    font-weight: bold;
}

// 报名列表页，整体样式控制：在全局修改报名列表的select的宽度
.enrollform .el-form-item__content {
    width: 160px;
}
// 报名列表表格样式覆盖
.smalltable {
    font-size: 12px;
}
.smalltable tr div.cell {
    padding: 0 10px;
}

// 表单页，表单包裹层样式控制
.form-wrap {
    width: 60%;
    margin: 30px auto 0 13%;
    .el-select {
        width: 100%;
    }
}
// 自定义必填项的左上角红色星号
.required-self label.el-form-item__label:before {
    content: '*';
    color: #ff4949;
    margin-right: 4px;
}
</style>
