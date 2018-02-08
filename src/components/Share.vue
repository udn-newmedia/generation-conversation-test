<template>
  <div class="Share">
    <span @click="expand" style="z-index: 1;"><i class="fas fa-share"></i></span>
    <span :class="{'abs':!isExpand}" @click="fbshare"><i class="fab fa-facebook-f"></i></span>
    <span :class="{'abs':!isExpand}" @click="lineshare"><i class="fab fa-line"></i></span>
    <span :class="{'abs':!isExpand}" @click="messengershare"><i class="fab fa-facebook-messenger"></i></span>
  </div>
</template>

<script>
/* global FB */
import Utils from 'udn-newmedia-utils'

export default {
  name: 'Share',
  props: ['hashtag', 'words', 'link'],
  data: function () {
    return {
      isExpand: false
    }
  },
  methods: {
    expand: function () {
      this.isExpand = !this.isExpand
    },
    fbshare: function () {
      FB.ui({
        method: 'share',
        href: this.link,
        hashtag: '#' + this.hashtag,
        quote: this.words
      }, function (response) {})
    },
    lineshare: function () {
      if (Utils.detectMob()) {
        window.location.href = '//line.me/R/msg/text/?' + this.hashtag + '%0D%0A%0D%0A' + this.words + '%0D%0A%0D%0A' + this.link
      } else {
        window.open('https://lineit.line.me/share/ui?url=' + this.link)
      }
    },
    messengershare: function () {
      if (Utils.detectMob()) {
        window.open('fb-messenger://share?link=' + encodeURIComponent(this.link) + '&app_id=1010324812347164')
      } else {
        FB.ui({
          method: 'send',
          link: this.link
        })
      }
    }
  }
}
</script>

<style scoped>
  .Share {
    display: flex;
    justify-content: flex-start;
  }
  .Share span {
    display: block;
    transition: 'position';
    transition-duration: 0.2s;
  }
  .Share i {
    font-size: 21px;
    margin: 10px;
  }
  .abs {
    opacity: 0;
    position: absolute;
  }
</style>
