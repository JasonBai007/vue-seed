<template>
    <div class="cube-wrap" v-title="'魔幻立方'">
       <Cube></Cube>
    </div>
</template>
<script>
import Cube from 'comp/Cube'
export default {
  name: "cube",
  components: {
      Cube
  }
};
</script>
