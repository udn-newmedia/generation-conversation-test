<template>
  <div class="embed-responsive embed-responsive-16by9">
    <iframe class="embed-responsive-item" :src="videoUrl" frameborder="0" allowfullscreen></iframe>
  </div>
   <!-- 1. The <iframe> (and video player) will replace this <div> tag. -->
  <!-- <div id="player" ref="youtube"></div> -->
  <!-- <div>
    <iframe id="player" type="text/html" width="640" height="390"
      src="http://www.youtube.com/embed/blvoqfU2Tx8?enablejsapi=1&origin=http://example.com"
      frameborder="0"></iframe>
  </div> -->
</template>

<script>
// import Utils from 'udn-newmedia-utils'
export default {
  name: 'YoutubeVideo',
  props: ['dataSrc', 'dataTarget', 'timestamp'],
  data: function () {
    return {
      progress: 0,
      getProgressTimer: null,
      done: false
    }
  },
  computed: {
    videoUrl: function () {
      let stamp = '&t=0m' + this.timestamp + 's'
      return this.dataSrc + stamp
    }
  },
  mounted: function () {
  },
  methods: {
  }
}
</script>

<style scoped>

</style>
