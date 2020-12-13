<template>
  <div class="details">
    <div class="top"> <!--//详情页的头部-->
      <div class="detailBox">
        <div class="detailImg"><!--详情的图片描述-->
          <img v-if="status" :src="songListDetail.coverImgUrl" alt="" id="detailImg">
        </div>
        <div class="detailTxt"><!--详情的文字描述-->
          <div class="tittle divMargin">
            <span>{{ songListDetail.name }}</span>
          </div><!--歌单标题-->
          <div class="creator divMargin">
            <img :src="songListDetail.creator.avatarUrl" alt="">
            <span>{{ songListDetail.creator.nickname }}</span>
          </div>
          <div class="divMargin description">
            <span>{{ songListDetail.description }}</span>
          </div>
          <div class="playColl ">
            <div class="subPlayColl">
              <Icon type="ios-play-outline"/>
              <span>播放全部</span>
            </div>
            <div class="collect subPlayColl">
              <Icon type="ios-heart-outline"/>
              <span>收藏</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom">
    </div>
  </div>
</template>

<script>
// import router from '@/router'

export default {
  name: 'PlaylistDetails',
  data() {
    return {
      id: {},
      songListDetail: '',
      songSum: 0,
      songIds: [],
      status: false
    }
  },
  mounted() {
    this.getDetail()
    console.log(this.songListDetail)
    this.songDetailId()
  },
  created() {
    this.id = this.$route.params.id
  },
  methods: {
    getDetail() {
      var that = this
      this.$axios.get('http://39.98.144.206:3000/playlist/detail?id=' + that.id).then(function (res) {
        // console.log('http://39.98.144.206:3000/playlist/detail?id=' + that.id)/
        that.songListDetail = res.data.playlist
        that.status = true
        // console.log(res.data.playlist)
      }).catch(function (res) {
        console.log(res)
      })
    },
    songDetailId() {
      // eslint-disable-next-line no-unused-vars
      var detail
      for (detail in this.songListDetail.trackIds) {
        console.log(this.songListDetail.trackIds[detail])
        // this.songIds.pop(this.songListDetail.trackIds[detail])
      }
    }
  }
}
</script>
<style scoped lang="sass">
.details
  padding: 40px

  .top
    height: 300px
    //background-color: #42b983
    width: 100%

    .detailBox
      display: grid
      grid-template-columns: 30% 70%

      .detailImg

        display: flex
        //background-color: aliceblue
        min-width: 350px
        height: 300px
        align-items: center
        justify-content: center

        img
          border-radius: 15px
          height: 210px

    .detailTxt
      height: 300px
      min-width: 857px
      width: 100%
      //background-color: blanchedalmond
      color: #fcfcfc
      padding: 45px

      .divMargin
        margin-bottom: 20px

      .tittle
        //background-color: #42b983
        height: 40px
        width: 777px
        dispaly: flex
        flex-direction: row
        justify-content: flex-start
        justify-items: center
        align-content: center

        span
          font-size: 2rem

      .creator
        img
          height: 40px
          border-radius: 50%

        span
          margin-left: 10px

      .description
        height: 20px
        overflow: hidden
        text-overflow: ellipsis
        white-space: nowrap

      .playColl
        display: flex
        font-size: 1.1rem

        .subPlayColl
          //text-align: center
          width: 100px
          height: 36px
          border-radius: 18px
          display: flex
          justify-content: center
          align-items: center
          background-color: #42b983
          margin-left: 10px

          &:hover
            background-color: #1EC493

        .collect
          background-color: #2e2e30

          &:hover
            background-color: #3A3A3C
</style>
