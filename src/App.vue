<template>
  <div id="app">
    <Head-Bar MenuSlideFrom="top" background-color="#083090" color="#fff"></Head-Bar>
    <EmbededVideo :src="miao" style="margin-top: 46px;"></EmbededVideo>
    <div class="clearblock" style="width: 100%; height: 10%;"></div>
    <!-- <Timeline></Timeline> -->
    <BetterScroll>
      <div v-for="(hashtag, index) in hashtaglist" v-bind:key="hashtag.tag">
        <Hashtagblock :content="hashtag" :index="index"></Hashtagblock>
      </div>
    </BetterScroll>
  </div>
</template>

<script>
import HeadBar from 'udn-newmedia-vue-components/src/components/HeadBar'
import EmbededVideo from 'udn-newmedia-vue-components/components/EmbededVideo'
// import Timeline from '@/components/Timeline'
import BetterScroll from '@/components/BetterScroll'
import Hashtagblock from '@/components/Hashtagblock'
import Share from '@/components/Share'
import miao from '@/assets/miao.mp4'

export default {
  name: 'App',
  data: function () {
    return {
      miao: miao,
      hashtaglist: [
        {
          time: '01:22',
          tag: '草莓族',
          words: '(一)1980年代的報紙上面的文章在說，年輕人是草莓族1980年代年輕人是誰就是我爸媽。'
        },
        {
          time: '02:04',
          tag: '你們不能吃苦',
          words: '(二)1980年代的報紙上面的文章在說，年輕人是草莓族1980年代年輕人是誰就是我爸媽。'
        },
        {
          time: '02:30',
          tag: '這叫不努力',
          words: '(三)1980年代的報紙上面的文章在說，年輕人是草莓族1980年代年輕人是誰就是我爸媽。'
        },
        {
          time: '03:45',
          tag: '1小時140一碗拉麵260',
          words: '(四)1980年代的報紙上面的文章在說，年輕人是草莓族1980年代年輕人是誰就是我爸媽。'
        },
        {
          time: '04:08',
          tag: '每天來點負能量',
          words: '(五)1980年代的報紙上面的文章在說，年輕人是草莓族1980年代年輕人是誰就是我爸媽。'
        },
        {
          time: '05:07',
          tag: '超正向好嗎',
          words: '(六)1980年代的報紙上面的文章在說，年輕人是草莓族1980年代年輕人是誰就是我爸媽。'
        }
      ]
    }
  },
  components: {
    HeadBar, EmbededVideo, BetterScroll, Hashtagblock, Share
  },
  methods: {
  }
}
</script>

<style>
#app{
  font-family: "微軟正黑體", "Microsoft JhengHei", 'Avenir', Helvetica, Arial, sans-serif;
  position: relative;
  height: 100vh;
  overflow-y: hidden;
}
</style>
