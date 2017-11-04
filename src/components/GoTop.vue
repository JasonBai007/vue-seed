<!-- 返回顶部组件 -->
<!-- 使用说明：<go-top></go-top> -->
<!-- 无输入，无输出 -->
<template>
    <transition name="fade">
        <div title="返回顶部" class="goup" @click="goUp" v-show="scrolled">
            <i class="fa fa-level-up"></i>
        </div>
    </transition>
</template>
<script>
export default {
    name: 'gotop',
    data() {
        return {
            scrolled: false
        }
    },
    mounted() {
        // 组件一旦渲染到DOM中，就添加滚动事件监听，每次滚动鼠标滚轮，都会使回调函数执行
        window.addEventListener('scroll', this.handleScroll);
    },
    methods: {
        // 判断是否要给变量赋值成true
        handleScroll() {
            this.scrolled = window.scrollY > 200;
        },
        goUp() {
            // 简单无动画版
            // window.scrollTop(0,0);
            // 流畅版
            (function smoothscroll() {
                var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
                if (currentScroll > 0) {
                    window.requestAnimationFrame(smoothscroll);
                    window.scrollTo(0, currentScroll - (currentScroll / 5));
                }
            })();
        }
    }
}
</script>
<style scoped lang="less">
.goup {
    position: fixed;
    right: 20px;
    bottom: 20px;
    i {
        font-size: 30px;
        color: #324157;
        &:hover {
            color: #20a0ff;
            cursor: pointer;
        }
    }
}

// 渐隐效果
.fade-enter-active,
.fade-leave-active {
    transition: opacity .5s
}

.fade-enter,
.fade-leave-active {
    opacity: 0
}
</style>
