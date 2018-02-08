<template>
  <!-- <div class="embed-responsive embed-responsive-16by9">
    <iframe class="embed-responsive-item" :src="dataSrc" frameborder="0" allowfullscreen></iframe>
  </div> -->
   <!-- 1. The <iframe> (and video player) will replace this <div> tag. -->
  <div id="player"></div>
</template>

<script>
/* global YT */
// import Utils from 'udn-newmedia-utils'
var player
export default {
  name: 'YoutubeVideo',
  props: ['dataSrc', 'dataTarget'],
  data: function () {
    return {
      progress: 0,
      getProgressTimer: null,
      done: false
    }
  },
  mounted: function () {
    // 2. This code loads the IFrame Player API code asynchronously.
    var tag = document.createElement('script')
    tag.src = 'https://www.youtube.com/iframe_api'
    var firstScriptTag = document.getElementsByTagName('script')[0]
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)
  },
  methods: {
    // updateBar: function () {
    //   if (YT.PlayerState.PLAYING) {
    //     console.log(player.getCurrentTime())
    //     setTimeout(updateBar, 200)
    //   }
    // }
    onYouTubeIframeAPIReady: function () {
      player = new YT.Player('player', {
        height: '390',
        width: '640',
        videoId: 'blvoqfU2Tx8',
        events: {
          'onReady': this.onPlayerReady,
          'onStateChange': this.onPlayerStateChange
        }
      })
    },
    // 4. The API will call this function when the video player is ready.
    onPlayerReady: function (event) {
      event.target.playVideo()
    },
    // 5. The API calls this function when the player's state changes.
    //    The function indicates that when playing a video (state=1),
    //    the player should play for six seconds and then stop.
    onPlayerStateChange: function (event) {
      if (event.data === YT.PlayerState.PLAYING && !this.done) {
        setTimeout(this.stopVideo, 6000)
        this.done = true
      }
    },
    stopVideo: function () {
      player.stopVideo()
    }
  }
}
</script>

<style scoped>

</style>
