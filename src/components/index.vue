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
        <div class="title">
          <div>
            <p>High Quality Song List</p>
          </div>
          <Icon type="arrow-down-b"></Icon>
        </div>
      </div>
      <div class="PopularRecommendationItemAll">
        <div class="PopularRecommendationItem" v-for="item in PopularRecommendationList" :key="item.id">
          <div class="PopularRecommendationItemContent">
            <div class="coverImgUrl">
              <div class="maskDisplay">
                <div class="mask">
                  <Icon type="play"></Icon>
                </div>
              </div>
              <div class="playCount">
                <div class="playCountContent">
                  <Icon type="headphone"></Icon>
                  <p>{{ getPlayCount(item.playCount) }}</p>
                </div>
              </div>
              <img :src="item.coverImgUrl" alt="">
            </div>
            <div class="copywriter">
              {{ item.copywriter }}
            </div>
          </div>
        </div>
      </div>
      <div class="PopularRecommendationItemAll">
        <div class="PopularRecommendationItem" v-for="item in PopularRecommendationList" :key="item.id">
          <div class="PopularRecommendationItemContent">
            <div class="coverImgUrl">
              <div class="maskDisplay">
                <div class="mask">
                  <Icon type="play"></Icon>
                </div>
              </div>
              <div class="playCount">
                <div class="playCountContent">
                  <Icon type="headphone"></Icon>
                  <p>{{ getPlayCount(item.playCount) }}</p>
                </div>
              </div>
              <img :src="item.coverImgUrl" alt="">
            </div>
            <div class="copywriter">
              {{ item.copywriter }}
            </div>
          </div>
        </div>
      </div>
      <div class="PopularRecommendationItemAll">
        <div class="PopularRecommendationItem" v-for="item in PopularRecommendationList" :key="item.id">
          <div class="PopularRecommendationItemContent">
            <div class="coverImgUrl">
              <div class="maskDisplay">
                <div class="mask">
                  <Icon type="play"></Icon>
                </div>
              </div>
              <div class="playCount">
                <div class="playCountContent">
                  <Icon type="headphone"></Icon>
                  <p>{{ getPlayCount(item.playCount) }}</p>
                </div>
              </div>
              <img :src="item.coverImgUrl" alt="">
            </div>
            <div class="copywriter">
              {{ item.copywriter }}
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
  data() {
    return {
      CarouselList: '',
      PopularRecommendationList: ''
    }
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
      this.$axios.get('http://39.98.144.206:3000/top/playlist/highquality?limit=6').then(function (res) {
        f
        that.PopularRecommendationList = res.data.playlists
        console.log(res.data.playlists)
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
          font-size: 15px

        i
          font-size: 15px
          margin-right: 5px

    .PopularRecommendationItemAll
      flex-direction: row
      display: flex
      justify-content: space-around
      align-items: center
      min-width: 1025px

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
                //transform: translateY(-5px)
                transition: .1s ease-in-out

              .maskDisplay
                //transition: .6s ease-in-out
                display: block

              .playCount
                display: none

            .playCount
              position: absolute
              bottom: 10px
              right: 10px

              .playCountContent
                height: 20px
                border-radius: 10px
                background-color: rgba(0, 0, 0, 0.8)
                display: flex
                justify-content: center
                align-items: center
                padding: 2px 5px

                i
                  margin-right: 2px

            .maskDisplay
              display: none

              .mask
                position: absolute
                top: 5px
                z-index: 3
                background: rgba(0, 0, 0, 0.5)
                height: 170px
                width: 170px
                display: flex
                justify-content: center
                align-items: center
                border-radius: 10px
                //transform: translateY(5px)

                i
                  font-size: 30px

                  &:hover
                    color: #1ecf9d

            img
              height: 170px
              width: 170px
              border-radius: 10px

</style>
