<template>
  <div class="tagblock">
    <div class="block" v-show="content.isopen">
      <div class="words">{{content.words}}</div>
      <Share :hashtag="content.tag" :words="content.words" :link="content.picSeeLink"></Share>
      <i class="fas fa-times" @click="close"></i>
    </div>
  </div>
</template>

<script>
import Share from './Share'
export default {
  name: 'tagblock',
  props: ['content'],
  data: function () {
    return {
      display: true
    }
  },
  components: {
    Share
  },
  methods: {
    close: function () {
      this.content.isopen = !this.content.isopen
    }
  }
}
</script>

<style scoped>
.block{
  position: relative;
  width: 90%;
  opacity: 0.95;
  background-color: #eeeeee;
  border: solid 1px #d7d3d3;
  padding: 15px;
}
.fa-times{
  position: absolute;
  right: 5px;
  bottom: 5px;
  color:black;
  font-size: 25px;
}
</style>
