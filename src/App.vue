<template>
    <div id="app">

        <!-- 这是登录组件要被渲染到的地方 -->
        <router-view name="loginview"></router-view>

        <!-- 如果路由信息中的meta中的hidden等于true，就隐藏下面的视图 -->
        <div v-if="!this.$route.meta.hidden">
            <!-- 这是侧导航 -->
            <side-bar></side-bar>
            <div class="con-wrap" :class="{conCollapse: isCollapse}">
                <!-- 这是顶部导航 -->
                <top-bar></top-bar>
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
    computed: {
        isCollapse() {
            return this.$store.state.common.isCollapse
        }
    },
    components: {
        'top-bar': TopBar,
        'side-bar': SideBar,
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

// 左侧导航图表垂直方向对齐
// 宽度还得自己设定，坑死
.el-menu {
    width: 100%;
}
.el-menu-item [class^=el-icon-] {
    vertical-align: middle;
    color: #ddd;
}
.el-submenu [class^=el-icon-] {
    color: #ddd;
}
.el-submenu__title i {
    vertical-align: middle;
    color: #ddd;
}

// 自定义必填项的左上角红色星号
.required-self label.el-form-item__label:before {
    content: '*';
    color: #ff4949;
    margin-right: 4px;
}
</style>
