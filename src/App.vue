<template>
  <div id="app">
    <Head-Bar MenuSlideFrom="top" background-color="#ffcf31" color="#575755"></Head-Bar>
    <EmbededVideo :src="miao" style="margin-top: 46px;" :playingTime="videocurTime"></EmbededVideo>
    <!-- <YoutubeVideo :dataSrc="videolink" style="margin-top: 46px;"></YoutubeVideo> -->
    <div class="clearblock" style="width: 100%; height: 10%;"></div>
    <BetterScroll>
      <!-- <Timeline :photo="head" :percent="videocurPercent"></Timeline> -->
      <ul class="hashtagblocks" v-for="(hashtag, index) in hashtaglist" v-bind:key="hashtag.tag">
        <li>
          <NewTimeline :dataSrc="head" :index="index" :list="hashtaglist"></NewTimeline>
          <!-- <div class="timeline">
            <img :src="dataSrc" :class="{'active': isActive(index)}">
          </div> -->
          <div class="tagsandblocks">
            <p>{{hashtag.time}}</p>
            <span class="hashtag"
              :style="{
                background: index%2==0?'#575755':'#ffcf31',
                color: index%2==0?'#ffcf31':'#000'
              }"
              @click="clickhashtag(hashtag)">#{{hashtag.tag}}</span>
            <Tagblock :content="hashtag" :index="index" style="margin-top: 10px;"></Tagblock>
          </div>
        </li>
      </ul>
    </BetterScroll>
  </div>
</template>

<script>
import HeadBar from 'udn-newmedia-vue-components/src/components/HeadBar'
import EmbededVideo from 'udn-newmedia-vue-components/components/EmbededVideo'
import Timeline from '@/components/Timeline'
import NewTimeline from '@/components/NewTimeline'
import BetterScroll from '@/components/BetterScroll'
import Tagblock from '@/components/Tagblock'
import Share from '@/components/Share'
import YoutubeVideo from '@/components/YoutubeVideo'
// import miao from '@/assets/miao.mp4'
import head from '@/assets/m.png'

export default {
  name: 'App',
  data: function () {
    return {
      head: head,
      miao: 'https://udn.com/upf/newmedia/2018_data/generation_conversation_0208/miao50.mp4',
      videolink: 'https://www.youtube.com/embed/blvoqfU2Tx8?rel=0',
      // videolink: 'https://www.youtube.com/embed/M7lc1UVf-VE?rel=0',
      videocurTime: 0,
      videocurPercent: 0,
      currentClip: 0,
      hashtaglist: [
        {
          time: '01:22',
          timelast: 82,
          tag: '草莓族',
          words: '為什麼你們現在不能成功，一定是因為你們不能吃苦，這個邏輯是壓在我們身上。——苗博雅',
          picSeeLink: 'https://lnk.pics/5725Z',
          isopen: false
        },
        {
          time: '02:04',
          timelast: 124,
          tag: '你們不能吃苦',
          words: '(二)1980年代的報紙上面的文章在說，年輕人是草莓族1980年代年輕人是誰就是我爸媽。',
          picSeeLink: 'https://lnk.pics/56WL7',
          isopen: false
        },
        {
          time: '02:30',
          timelast: 150,
          tag: '這叫不努力',
          words: '(三)1980年代的報紙上面的文章在說，年輕人是草莓族1980年代年輕人是誰就是我爸媽。',
          picSeeLink: 'https://lnk.pics/56WLM',
          isopen: false
        },
        {
          time: '03:45',
          timelast: 225,
          tag: '1小時140一碗拉麵260',
          words: '(四)1980年代的報紙上面的文章在說，年輕人是草莓族1980年代年輕人是誰就是我爸媽。',
          picSeeLink: 'https://lnk.pics/56WMF',
          isopen: false
        },
        {
          time: '04:08',
          timelast: 248,
          tag: '每天來點負能量',
          words: '(五)1980年代的報紙上面的文章在說，年輕人是草莓族1980年代年輕人是誰就是我爸媽。',
          picSeeLink: 'https://lnk.pics/56WMW',
          isopen: false
        },
        {
          time: '05:07',
          timelast: 307,
          tag: '超正向好嗎',
          words: '(六)1980年代的報紙上面的文章在說，年輕人是草莓族1980年代年輕人是誰就是我爸媽。',
          picSeeLink: 'https://lnk.pics/56WN6',
          isopen: false
        }
      ]
    }
  },
  computed: {
  },
  components: {
    HeadBar, EmbededVideo, BetterScroll, Tagblock, Share, Timeline, YoutubeVideo, NewTimeline
  },
  created: function () {
    this.$eventHub.$on('progress-change', this.progressIndicator)
  },
  beforeDestroy: function () {
    this.$eventHub.$off('progress-change')
  },
  mounted: function () {
    // setInterval(()=>{
    //   this.getCurrentClip()
    // },50)
  },
  methods: {
    clickhashtag: function (hashtag) {
      hashtag.isopen = !hashtag.isopen
      this.videocurTime = hashtag.timelast
    },
    progressIndicator: function (progress) {
      // if (progress.time) {
      // this.videocurTime = progress.time
      // console.log(this.videocurTime)
      // }
      if (progress.percent) {
        this.videocurPercent = progress.percent
      }
    },
    getCurrentClip: function () {
      if (this.videocurTime < this.hashtaglist[0].timelast) {
        this.currentClip = 0
      } else if (this.videocurTime >= this.hashtaglist[0].timelast && this.videocurTime < this.hashtaglist[1].timelast) {
        this.currentClip = 1
      } else {
        this.currentClip = 2
      }
    },
    isActive: function (index) {
      if (index === this.currentClip) {
        return true
      } else {
        return false
      }
    }
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

.blocks{
  width: 50%;
}

ul{
  list-style: none;
  padding: 0;
}

ul li{
  margin-top: 20px;
  margin-bottom: 10px;
}

span.hashtag{
  /* border-radius: 15px; */
  padding: 10px;
  border-radius: 25px;
  z-index: 3;
}

.hashtagblocks li{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: -20px;
}

.tagsandblocks{
  text-align: left;
  width: 50%;
}

/* .timeline{
  border-right: solid 1px #d7d3d3;
  width: 25%;
  text-align: right;
}

.timeline img{
  width: 75px;
  transform: translateX(50%);
  opacity: 0;
}

img.active{
  opacity: 1;
} */
</style>
