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
  width: 100%;
  height: 100vh;
  overflow-y: hidden;
}
.content{
  width: 100%;
  height: 250vh;
  /* height: 100%; */
  overflow: auto;
}
</style>
