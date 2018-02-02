<template>
  <div id="app">
    <Head-Bar MenuSlideFrom="top" background-color="#083090" color="#fff"></Head-Bar>
    <EmbededVideo :src="miao" style="margin-top: 46px;"></EmbededVideo>
    <div class="clearblock" style="width: 100%; height: 10%;"></div>
    <!-- <Timeline></Timeline> -->
    <InnerScrollRegion></InnerScrollRegion>
  </div>
</template>

<script>
import HeadBar from 'udn-newmedia-vue-components/src/components/HeadBar'
import EmbededVideo from 'udn-newmedia-vue-components/components/EmbededVideo'
// import Timeline from '@/components/Timeline'
import InnerScrollRegion from '@/components/InnerScrollRegion'
import miao from '@/assets/miao.mp4'

export default {
  name: 'App',
  data: function () {
    return {
      miao: miao
    }
  },
  components: {
    HeadBar, EmbededVideo, InnerScrollRegion
  }
}
</script>

<style>
#app{
  position: relative;
  height: 100vh;
  overflow-y: hidden;
}
</style>
