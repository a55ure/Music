<template>
  <div>
    <div class="main">
      <div class="slide">
        <span class="material-icons" @click="clickRight">arrow_back_ios</span>
      </div>
      <div class="conent" ref="songList" v-if=true>
        <songList class="list" v-if="PopularRecommendationList" :songList="PopularRecommendationList"></songList>
      </div>
      <div class="slide">
        <span class="material-icons" @click="clickLeft">arrow_forward_ios</span>
      </div>
    </div>
  </div>
</template>

<script>
import songList from '@/components/songList'

export default {
  name: 'scroll',
  data() {
    return {
      PopularRecommendationList: '',
      sroll: '',
      shiftScrollLeft: {},
      shiftScrollRight: {},
      Sspeed: 0
    }
  },
  components: {
    songList
  },
  created() {
    this.getPopularRecommendation()
  },
  mounted() {
  },
  methods: {
    clickLeft() {
      this.shiftScrollLeft = setInterval(this.increasing, 2)
    },
    clickRight() {
      this.shiftScrollRight = setInterval(this.decreasing, 2)
    },
    scrollEventLeft() { // 点击箭头 滑动到最左边
      this.sroll = this.$refs.songList
      this.$refs.songList.scrollLeft = 0
      // console.log(this.sroll.scrollWidth)
      console.log(this.sroll.scrollLeft)
      // console.log('我滚动了')
    },
    scrollEventRight() { // 点击箭头 滑动到最右边
      this.sroll = this.$refs.songList
      this.$refs.songList.scrollLeft = 1100
      // console.log(this.sroll.scrollWidth)
      // console.log(this.sroll.scrollLeft)
    },
    increasing() { // 让数值缓慢增加 Slength 运行长度 Stime 执行时间
      // this.Sspeed = Slength / (Stime * 1000) // 执行速度
      this.$refs.songList.scrollLeft += 22
      if ((this.$refs.songList.scrollLeft + 22) >= 1100) {
        this.$refs.songList.scrollLeft = 1100
        clearInterval(this.shiftScrollLeft)
      }
    },
    decreasing() {
      this.$refs.songList.scrollLeft -= 22
      if ((this.$refs.songList.scrollLeft - 22) <= 0) {
        this.$refs.songList.scrollLeft = 0
        clearInterval(this.shiftScrollRight)
      }
    },
    getPopularRecommendation() {
      var that = this
      this.$axios.get('http://39.98.144.206:3000/top/playlist/highquality?limit=10').then(function (res) {
        // that.PopularRecommendationList = res
        that.PopularRecommendationList = res.data.playlists
        // console.log(that.PopularRecommendationList)
      }).catch(function (res) {
        console.log(res)
      })
    }
  }
}
</script>

<style scoped lang="sass">
.slide-fade-enter-active, .slide-fade-leave-active
  transition: all 3s ease

.slide-fade-enter, .slide-fade-leave-to
  transition: all ease

.main
  height: 220px
  width: 1210px
  min-width: 1100px
  display: flex
  justify-content: space-around
  align-items: center

  .conent
    width: 1100px
    overflow-x: hidden
    overflow-y: hidden
    display: flex

    &::-webkit-scrollbar

  .slide
    display: flex
    align-items: center
    justify-content: center
    cursor: pointer

    &:hover
      span
        color: #1ecf9d

    span
      color: #7A7A7C

</style>
