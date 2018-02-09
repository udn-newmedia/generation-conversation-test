<template>
  <div class="timeline">
    <img :src="dataSrc" :class="{'active': index==currentClip}">
  </div>
</template>

<script>
export default {
  name: 'newtimeline',
  props: ['dataSrc', 'index', 'list'],
  data: function () {
    return {
      currentClip: 0
    }
  },
  created: function () {
    this.$eventHub.$on('progress-change', this.getcurrentClip)
  },
  beforeDestroy: function () {
    this.$eventHub.$off('progress-change')
  },
  methods: {
    getcurrentClip: function (progress) {
      let curTime = progress.percent / 100 * progress.time
      for (let i = 0; i < this.list.length; i++) {
        if (curTime > this.list[i].timelast) {
          this.currentClip = i
        }
      }
    }
  }
}
</script>

<style scoped>
.timeline{
  /* position: relative; */
  border-right: solid 1px #d7d3d3;
  width: 25%;
  text-align: right;
}

.timeline img{
  /* position: absolute;
  left: 0; */
  width: 75px;
  transform: translateX(50%);
  opacity: 0;
}

img.active{
  opacity: 1;
}
</style>
