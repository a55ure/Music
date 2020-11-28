<template>
  <div>
    <div class="main">
      <div class="slide">
        <span class="material-icons" @click="scrollEventLeft">arrow_back_ios</span>
      </div>
      <transition name="slide-fade" mode="out-in">
        <div class="conent" ref="songList" v-if=true>
          <songList class="list" v-if="PopularRecommendationList" :songList="PopularRecommendationList"></songList>
        </div>
      </transition>
      <div class="slide">
        <span class="material-icons" @click="scrollEventRight">arrow_forward_ios</span>
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
      sroll: ''
    }
  },
  components: {
    songList
  },
  created() {
    this.getPopularRecommendation()
  },
  methods: {
    scrollEventLeft() {
      this.sroll = this.$refs.songList
      this.$refs.songList.scrollLeft = 0
      // console.log(this.sroll.scrollWidth)
      console.log(this.sroll.scrollLeft)
      // console.log('我滚动了')
    },
    scrollEventRight() {
      this.sroll = this.$refs.songList
      this.$refs.songList.scrollLeft = 1100
      // console.log(this.sroll.scrollWidth)
      console.log(this.sroll.scrollLeft)
      // console.log('我滚动了')
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

.fade-enter, .fade-leave-active
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
    overflow-x: scroll
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
