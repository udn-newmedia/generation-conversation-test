<template>
  <div class="Share">
    <span @click="expand" style="z-index: 1;"><i class="fas fa-share"></i></span>
    <span :class="{'abs':!isExpand}" @click="fbshare"><i class="fab fa-facebook-f"></i></span>
    <span :class="{'abs':!isExpand}"><i class="fab fa-line"></i></span>
    <span :class="{'abs':!isExpand}"><i class="fab fa-instagram"></i></span>
  </div>
</template>

<script>
/* global FB */
export default {
  name: 'Share',
  props: ['hashtag', 'words'],
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
        href: location.href,
        // hashtag: '#facebook',
        // quote: 'this is quote !'
        hashtag: '#' + this.hashtag,
        quote: this.words
      }, function (response) {})
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
