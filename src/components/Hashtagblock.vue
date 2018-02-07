<template>
  <div class="hashtagblock">
    <div class="hashtag">
      <p :style="{
          background: tagBackgroundColor,
          color: tagTextColor
        }">
        #{{content.tag}}
      </p>
    </div>
    <div class="words">{{content.words}}</div>
    <Share :hashtag="content.tag" :words="content.words" :link="content.picSeeLink"></Share>
  </div>
</template>

<script>
import Share from './Share'

export default {
  name: 'hashtagblock',
  props: ['content', 'index'],
  computed: {
    tagBackgroundColor: function () {
      if (this.index % 2 === 0) {
        return '#083090'
      } else {
        return '#ffcf31'
      }
    },
    tagTextColor: function () {
      if (this.index % 2 === 0) {
        return '#ffcf31'
      } else {
        return '#000'
      }
    }
  },
  components: {
    Share
  }
}
</script>

<style scoped>
  .hashtagblock{
    position: relative;
    width: 90%;
    opacity: 0.95;
    background-color: #eeeeee;
    border: solid 1px #d7d3d3;
    padding: 15px;
    margin-top: 50px;
    margin-bottom: 50px;
  }
  .hashtag{
    position: absolute;
    top: 0;
    left: 0;
    transform: translateY(-60%);
  }
  .hashtag p{
    display: inline-block;
    border-radius: 15px;
    padding: 8px;
  }
</style>
