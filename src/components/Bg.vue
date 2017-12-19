<template>
    <div id="wrapper" ref="wrapper">
        <img src="../assets/img/wechat.jpg">
    </div>
</template>
<script>
export default {
  name: "bg",
  data() {
    return {};
  },
  mounted() {
    this.listenMouseEvent();
  },
  methods: {
    listenMouseEvent() {
      let dom = this.$refs.wrapper;
      let deepParam = 20;
      dom.onmouseover = ev => {
        //鼠标移动时
        dom.onmousemove = ev => {
          // 当前鼠标距离左侧的距离 - dom距离左侧的距离 - dom宽度的一半
          // 当前鼠标距离顶部的距离 - dom距离顶部的距离 - dom高度的一半
          let X = ev.clientX - dom.offsetLeft - dom.offsetWidth / 2;
          let Y = ev.clientY - dom.offsetTop - dom.offsetHeight / 2;
          this.$refs.wrapper.style.transform = `perspective(1000px) rotateY(${X / deepParam}deg) rotateX(${-Y / deepParam}deg)`;
        };
      };
      dom.onmouseout = ev => {
        dom.onmousemove = null;
        // 鼠标移动到边界时，容易造成抖动，所以，加了延时
        setTimeout( "document.getElementById('wrapper').style.transform = `perspective(1000px) rotateY(0deg) rotateX(0deg)`",200)
      };
    }
  }
};
</script>
<style scoped lang="less">
#wrapper {
  width: 300px;
  margin: 50px auto;
  background: #fff;
  box-shadow: 4px 4px 15px #aaa;
  /*父元素设为3d*/
  transform-style: preserve-3d;
  /*设置父元素得景深*/
  transform: perspective(1000px);
  img {
      width:100%;
  }
}
</style>
