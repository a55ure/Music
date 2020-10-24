<template>
  <div class="indexContent">
    <div class="PageName">
      音乐馆
    </div>
    <!--    走马灯-->
    <div class="Carousel">
      <el-carousel :interval="2000" type="card" height="200px" arrow="never">
        <el-carousel-item v-for="item in CarouselList" :key="item.id">
          <div class="CarouselItem">
            <img :src="item.picUrl" alt="">
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
    <!--    热门推荐-->
    <div class="PopularRecommendation">
      <div class="PopularRecommendationTop">
        <div class="title">
          <div>
            <p>热门推荐</p>
          </div>
          <div class="songListMore">
            <span>更多</span>
            <span class="material-icons">arrow_forward_ios</span>
          </div>
        </div>
      </div>
      <div class="PopularRecommendationItemAll">
        <div class="slide">
          <span class="material-icons">arrow_back_ios</span>
        </div>
<!--        <div class="PopularRecommendationItem" v-for="item in PopularRecommendationList" :key="item.id">-->
<!--          <div class="PopularRecommendationItemContent">-->
<!--            <div class="coverImgUrl">-->
<!--              <div class="maskDisplay">-->
<!--                <div class="mask">-->
<!--                  <Icon type="play"></Icon>-->
<!--                </div>-->
<!--              </div>-->
<!--              <div class="playCount">-->
<!--                <div class="playCountContent">-->
<!--                  <Icon type="headphone"></Icon>-->
<!--                  <p>{{ getPlayCount(item.playCount) }}</p>-->
<!--                </div>-->
<!--              </div>-->
<!--              <img :src="item.coverImgUrl" alt="">-->
<!--            </div>-->
<!--            <div class="copywriter">-->
<!--              {{ item.copywriter }}-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div>{{ PopularRecommendationList }}</div>-->
        <songList v-if="PopularRecommendationList" :songList="PopularRecommendationList"></songList>
        <div class="slide">
          <span class="material-icons">arrow_forward_ios</span>
        </div>
      </div>
    </div>
    <div class="Placeholder">
      <hr>
      <p>END</p>
    </div>
  </div>
</template>

<script>
import songList from '@/components/songList.vue'

export default {
  name: 'index',
  data() {
    return {
      CarouselList: '',
      PopularRecommendationList: ''
    }
  },
  components: {
    songList
  },
  created() {
    this.getCarousel()
    this.getPopularRecommendation()
  },
  methods: {
    // 走马灯获取
    getCarousel() {
      var that = this
      this.$axios.get('http://39.98.144.206:3000/personalized/newsong').then(function (res) {
        that.CarouselList = res.data.result
      }).catch(function (res) {
        console.log(res)
      })
    },
    // 获取热门推荐
    getPopularRecommendation() {
      var that = this
      this.$axios.get('http://39.98.144.206:3000/top/playlist/highquality?limit=5').then(function (res) {
        that.PopularRecommendationList = res
        // that.PopularRecommendationList = res.data.playlists
        console.log(that.PopularRecommendationList)
      }).catch(function (res) {
        console.log(res)
      })
    },
    // 取整播放次数
    getPlayCount(playCout) {
      // this.PopularRecommendationList
      if ((playCout / 100000) > 0) {
        return Math.floor(playCout / 10000) + ' 万'
      } else if ((playCout / 10000) > 0) {
        return Math.floor(playCout / 1000) + ' 万'
      }
    }

  }

}
</script>

<style lang="sass" scoped>
.indexContent
  padding: 40px
  height: 100%
  width: 100%
  background-color: #1e1e20

  .PageName
    color: #f9f9f9
    font-size: 30px
    font-weight: bolder
    height: 70px
    display: flex
    justify-content: start
    align-items: center

  .Carousel
    .CarouselItem
      img
        width: 200px
        height: 200px

  .PopularRecommendation
    .PopularRecommendationTop
      display: flex
      justify-content: space-between
      align-content: center

      .title
        color: #f9f9f9
        height: 80px
        width: 100%
        display: flex
        justify-content: space-between
        align-items: center

        p
          font-size: 25px

        i
          font-size: 15px
          margin-right: 5px

        .songListMore
          display: flex
          justify-content: center
          align-items: center
          cursor: pointer

          &:hover
            span
              color: #1ecf9d

          span
            color: #7A7A7C
            font-size: 15px

    .PopularRecommendationItemAll
      flex-direction: row
      display: flex
      justify-content: space-around
      align-items: center
      min-width: 1025px
      overflow: hidden

      .slide
        cursor: pointer

        &:hover
          span
            color: #1ecf9d

        span
          color: #7A7A7C

  .Placeholder
    hr
      opacity: 0.5
      height: 1px
      border: none
      color: #aaaaaa
      background-color: #aaaaaa
      margin: 20px 0

    p
      height: 110px
      color: #f9f9f9
      font-size: 20px

</style>
