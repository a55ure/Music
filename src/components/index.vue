<template>
  <div class="indexContent">
    <div class="PageName">
      Music Hall
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
        <Icon type="ios-pulse-strong"></Icon>
        <p>High Quality Song List</p>
      </div>
      <div class="PopularRecommendationItemAll">
        <div class="PopularRecommendationItem" v-for="item in PopularRecommendationList" :key="item.id">
          <div class="PopularRecommendationItemContent">
            <div class="coverImgUrl">
              <div class="mask">
                <Icon type="play"></Icon>
              </div>
              <img :src="item.coverImgUrl" alt="">
            </div>
            <div class="copywriter">
              {{item.copywriter}}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      CarouselList: '',
      PopularRecommendationList: ''
    }
  },
  created () {
    this.getCarousel()
    this.getPopularRecommendation()
  },
  methods: {
    // 走马灯获取
    getCarousel () {
      var that = this
      this.$axios.get('http://39.98.144.206:3300/personalized/newsong').then(function (res) {
        that.CarouselList = res.data.result
      }).catch(function (res) {
        console.log(res)
      })
    },
    // 获取热门推荐
    getPopularRecommendation () {
      var that = this
      this.$axios.get('http://39.98.144.206:3300/top/playlist/highquality?limit=5').then(function (res) {
        that.PopularRecommendationList = res.data.playlists
        console.log(res.data.playlists)
      }).catch(function (res) {
        console.log(res)
      })
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
    font-size: 25px
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
      color: #f9f9f9
      height: 80px
      width: 100%
      display: flex
      justify-content: start
      align-items: center

      p
        font-size: 15px

      i
        font-size: 15px
        margin-right: 5px

    .PopularRecommendationItemAll
      flex-direction: row
      display: flex
      justify-content: space-around
      align-items: center

      .PopularRecommendationItem
        color: #f9f9f9

        .PopularRecommendationItemContent
          .coverImgUrl
            height: 180px
            width: 180px
            display: flex
            justify-content: center
            align-items: center
            position: relative

            &:hover
              img
                transform: translateY(-5px)
                transition: .3s ease-in-out

            .mask
              position: absolute
              top: 0
              z-index: 999
              background: rgba(0, 0, 0, 0.5)
              height: 170px
              width: 170px
              display: flex
              justify-content: center
              align-items: center
              border-radius: 10px

              i
                font-size: 30px

            img
              height: 170px
              width: 170px
              border-radius: 10px

</style>
