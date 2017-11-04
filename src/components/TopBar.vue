<!-- 顶部导航组件 -->
<!-- 使用说明：<top-bar></top-bar> -->
<template>
    <div id="topbar-wrap" :class="{ topCollapsed: isCollapse }">
        <el-row type="flex" justify="space-between" class="rythm shake2">
            <el-col :span="5">
                <i :class="[isCollapse? 'fa-th-large': 'fa-navicon','fa']" @click="toggleSiderBar"></i>
            </el-col>
            <el-col :span="6">
                <el-row type="flex" class="row-bg" justify="end">
                    <el-col :span="12">
                        <a class="animated fadeIn">你好，{{userName}}</a>
                    </el-col>
                    <el-col :span="4">
                        <a href="#" class="logout" @click="logout">退出</a>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import Cookies from 'js-cookie'
export default {
    name: 'topbar',
    data() {
        return {
            isCollapse: false,
            userName: localStorage.userName || ''
        }
    },
    methods: {
        toggleSiderBar() {
            this.isCollapse === false ? this.isCollapse = true : this.isCollapse = false;
            this.$emit('toggleSiderBar',this.isCollapse)
        },
        logout() {
            Cookies.set('isLogin','0')
            localStorage.clear()
            this.$router.push('signin')
        }
    },
    watch: {
        $route(to, from) {
            this.pathName = this.$route.path.substring(1);
            this.nowPath = this.$route.path;
        }
    }
}
</script>
<style scoped lang="less">
#topbar-wrap {
    overflow: hidden;
    border-bottom: 1px solid #e7eaec;
    background: #324157;
    color: #fff;
    padding-right: 15px;
    z-index: 4;
    box-sizing: border-box;
    transition: all 0.3s;
    .logo {
        color: #fff;
        font-weight: bold;
        line-height: 60px;
        margin: 0;
        letter-spacing: 1px;
    }
    .freeBtn {
        margin-top: 12px;
        text-align: right;
    }
    .name {
        font-weight: 600;
    }
    .el-icon-setting {
        transition: 1s;
        &:hover {
            transform: rotate(180deg);
            cursor: pointer;
        }
    }
    .fa {
        padding-left: 15px;
        font-size: 24px;
        &:hover {
            cursor: pointer;
        }
    }
    a {
        line-height: 60px;
    }
    a.logout {
        color: #fff;
        text-decoration: none;
        &:hover {
            color: #20a0ff;
        }
    }
    i {
        font-size: 20px;
        line-height: 60px;
    }
    .logout {
        color: #bfcbd9;
        &:hover {
            color: #fff;
        }
    }
}
</style>
