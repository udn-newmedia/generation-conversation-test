<template>
  <div class="wrapper" ref="wrapper">
    <ul class="content">
      <slot></slot>
    </ul>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'BetterScroll',
  mounted () {
    this.$nextTick(() => {
      this.scroll = new Bscroll(this.$refs.wrapper, {
        click: true
      })
    })
  }
}
</script>

<style scoped>
.wrapper{
  width: 80%;
  height: 100vh;
  overflow-y: hidden;
  margin: 0 auto;
}
.content{
  width: 100%;
  /* height: 300vh; */
  height: 200vh;
  overflow: auto;
}
</style>
