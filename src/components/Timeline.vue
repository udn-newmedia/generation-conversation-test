<template>
  <div>
    <div class="line">
      <div class="timeline">
        <p class="name">苗博雅</p>
        <!-- <img class="head" :src="photo" :style="{top: percent + '%'}"> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'timeline',
  props: ['photo', 'percent']
}
</script>

<style scoped>
.timeline{
  position: relative;
  display: block;
  height: 100%;
  z-index: 3;
}

img.head{
  position: absolute;
  width: 75px;
  transform: translateX(-50%) translateY(20px);
}

.line{
  width: 25%;
  height: 100%;
  border-left: solid 1px #d7d3d3;
  position: absolute;
  left: 50%;
}

.name{
  position: absolute;
  background: white;
  transform: translateX(-50%);
  z-index: 5;
}

.line{
  height: 100%;
  border-left: solid 1px #d7d3d3;
  position: absolute;
  left: 0;
  transform: translateX(-45px);
}
</style>
