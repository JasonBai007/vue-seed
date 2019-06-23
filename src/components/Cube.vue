<template>
  <div id="wrapper" ref="wrapper">
    <div class="front">
      <i class="el-icon-camera-solid"></i>
    </div>
    <div class="end">
      <i class="el-icon-loading"></i>
    </div>
    <div class="top"></div>
    <div class="bottom"></div>
    <div class="left"></div>
    <div class="right"></div>
  </div>
</template>
<script>
export default {
  name: "cube",
  data() {
    return {};
  },
  mounted() {
    this.listenMouseEvent();
  },
  beforeDestroy() {
    document.onmousedown = null;
  },
  methods: {
    listenMouseEvent() {
      document.onmousedown = ev => {
        //在包裹层上上摁下时，获取当前鼠标的位置
        let x = ev.clientX;
        let y = ev.clientY;
        document.onmousemove = ev => {
          //鼠标移动时
          let x1 = ev.clientX - x + 30; //当前位置减去下时鼠标的位置，就获取移动了多少度，应为一开始有初始角度所以加30°
          let y1 = ev.clientY - y - 30; //甚至样式每次鼠标移动式更改样式
          this.$refs.wrapper.style.transform = `perspective(1000px) rotateY(${x1}deg) rotateX(${-y1}deg)`;
        };
        document.onmouseup = () => {
          document.onmousemove = null;
        };
      };
    }
  }
};
</script>
<style scoped lang="scss">
#wrapper {
  width: 200px;
  height: 200px;
  margin: 150px auto;
  /*给父元素相对定位*/
  position: relative;
  /*父元素设为3d*/
  transform-style: preserve-3d;
  /*设置父元素得景深*/
  transform: perspective(1000px) rotateY(30deg) rotateX(30deg);
}

/* 每个面的样式设置 */
#wrapper > div {
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 20px;
  text-align: center;
  line-height: 200px;
  font-size: 30px;
  font-weight: 600;
  color: #fff;
}

#wrapper > div:nth-child(1) {
  transform: translateZ(100px);
  background: rgba(0, 0, 255, 0.2);
}

#wrapper > div:nth-child(2) {
  transform: translateZ(-100px);
  user-select: none;
  background: rgba(0, 255, 0, 0.6);
}

#wrapper > div:nth-child(3) {
  transform: rotateX(90deg) translateZ(100px);
  background: rgba(255, 0, 0, 0.2);
}

#wrapper > div:nth-child(4) {
  transform: rotateX(90deg) translateZ(-100px);
  background: rgba(255, 255, 0, 0.2);
}

#wrapper > div:nth-child(5) {
  transform: rotateY(90deg) translateZ(-100px);
  background: rgba(0, 255, 255, 0.2);
}

#wrapper > div:nth-child(6) {
  transform: rotateY(90deg) translateZ(100px);
  background: rgba(255, 0, 255, 0.2);
}
</style>
