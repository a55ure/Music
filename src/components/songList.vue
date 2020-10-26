<template>
  <div>
    <div class="PopularS">
      <div class="slide">
        <span class="material-icons">arrow_back_ios</span>
      </div>
      <div class="PopularRecommendationItem" v-for="item in songList" :key="item.id">
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
      <div class="slide">
        <span class="material-icons">arrow_forward_ios</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'songList',
  data() {
    return {
      used: ''
    }
  },
  props: {
    songList: {
      type: Array
    }
  },
  mounted() {
    this.used = 'I have loaded'
    // console.log(this.used)
    // console.log('songlist')
    // console.log(this.songList, 77777)
  },
  methods: {
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

<style scoped lang="sass">
.PopularS
  width: 1210px
  min-width: 1100px
  display: flex
  justify-content: space-around

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

  .PopularRecommendationItem
    color: #f9f9f9

    .PopularRecommendationItemContent
      width: 180px
      margin-bottom: 10px

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

      .copywriter
        overflow: hidden
        white-space: nowrap
        text-overflow: ellipsis
</style>
