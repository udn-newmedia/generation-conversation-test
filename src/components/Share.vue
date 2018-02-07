<template>
  <div class="Share">
    <span @click="expand" style="z-index: 1;"><i class="fas fa-share"></i></span>
    <span :class="{'abs':!isExpand}" @click="fbshareQuote"><i class="fab fa-facebook-f"></i></span>
    <span :class="{'abs':!isExpand}"><i class="fab fa-line"></i></span>
    <span :class="{'abs':!isExpand}"><i class="fab fa-instagram"></i></span>
  </div>
</template>

<script>
/* global FB */
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
    fbshareQuote: function () {
      //  cons: Can only show small thumbnails
      FB.ui({
        method: 'share',
        href: this.link,
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
