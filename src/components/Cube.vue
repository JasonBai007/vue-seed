<template>
    <div id="wrapper" ref="wrapper">
        <div>前</div>
        <div>后</div>
        <div>上</div>
        <div>下</div>
        <div>左</div>
        <div>右</div>
    </div>
</template>
<script>
export default {
  name: "cube",
  data() {
    return {};
  },
  mounted() {
      this.listenMouseEvent()
  },
  beforeDestroy () {
      document.onmousedown = null
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
          this.$refs.wrapper.style.transform = `perspective(1000px) rotateY(${x1}deg) rotateX(${-y1}deg)`
        };
        document.onmouseup = () => {
          document.onmousemove = null;
        };
      };
    }
  }
};
</script>
<style scoped lang="less">
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
  border: 1px solid #333;
  text-align: center;
  line-height: 200px;
  font-size: 20px;
  font-weight: 600;
}

#wrapper > div:nth-child(1) {
  transform: translateZ(100px);
  background: rgba(0, 0, 255, 0.2);
}

#wrapper > div:nth-child(2) {
  transform: translateZ(-100px);
  background: rgba(0, 255, 0, 0.2);
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
