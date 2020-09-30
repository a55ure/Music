<template>
  <div id="app">
    <div class="left">
      <div class="leftTop">
        <Icon type="headphone"></Icon>
        <p>yksMusic</p>
      </div>
      <div class="MusicList">
        <p>在线音乐</p>
        <div class="leftMusicItem bg">
          <Icon type="music-note"></Icon>
          <p>音乐馆</p>
        </div>
        <div class="leftMusicItem">
          <Icon type="ios-videocam"></Icon>
          <p>MV</p>
        </div>
        <div class="leftMusicItem">
          <Icon type="ios-paw"></Icon>
          <p>音乐电台</p>
        </div>
      </div>
      <div class="MusicList">
        <p>我的音乐</p>
        <div class="leftMusicItem">
          <Icon type="heart"></Icon>
          <p>我喜爱</p>
        </div>

<!--        <div class="leftMusicItem">-->
<!--          <Icon type="ios-folder"></Icon>-->
<!--          <p>Download</p>-->
<!--        </div>-->
        <div class="leftMusicItem">
          <Icon type="ios-clock"></Icon>
          <p>播放历史</p>
        </div>
        <div class="leftMusicItem">
          <Icon type="android-list"></Icon>
          <p>播放列表</p>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="rightTop">
        <div class="rightTopL">
          <div class="arrowLR">
            <Icon type="chevron-left"></Icon>
            <Icon type="chevron-right"></Icon>
          </div>
          <div class="searchMusic">
            <el-input v-model="input" placeholder="Search Music" suffix-icon="el-icon-search"></el-input>
          </div>
          <div class="distinguishMusic">
            <i class="el-icon-mic"></i>
          </div>
        </div>
        <div class="rightTopM"></div>
        <div class="rightTopR">
          <div class="headPortrait">
            <Icon type="navicon-round"></Icon>
            <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
          </div>

          <div class="menu"></div>
        </div>
      </div>
      <div class="rightIndex">
        <!--        <router-view></router-view>-->
        <indexVue class="indexPage"></indexVue>
      </div>
<!--      播放进度信息-->
      <div class="Progress">
        <playerAu class="playerAu"></playerAu>
      </div>
    </div>
  </div>
</template>

<script>
import playerAu from '@/components/player'
import indexVue from '@/components/index.vue'

export default {
  name: 'app',
  components: {
    playerAu,
    indexVue
  }
}
</script>

<style lang="sass">
html, body
  height: 100%
  width: 100%
  min-width: 1100px
  min-height: 800px
  position: relative
  height: 100%
  overflow: auto
  margin: 0
  overflow-x: hidden

  #app
    height: 100%
    width: 100%
    font-family: A
    text-align: center
    display: grid
    grid-template-columns: 15% 85%

    .left
      height: 100%
      width: 100%
      background-color: #171718
      min-width: 240px

      .leftTop
        height: 120px
        width: 100%
        display: flex
        justify-content: center
        align-items: center
        color: #efefef
        font-size: 25px

        i
          margin-right: 10px
          font-size: 28px

      .MusicList
        display: flex
        flex-direction: column
        align-items: center
        margin-top: 20px

        .leftMusicItem

          height: 40px
          width: 75%
          display: flex
          align-items: center
          justify-content: start
          border-radius: 5px
          margin-top: 10px
          padding: 0 20px
          color: #f9f9f9
          font-size: 18px

          i
            margin-right: 10px

          &:hover
            background-color: #2e2e2f

        .bg
          background-color: #1ecf9d

    .right
      height: 60px
      width: 100%
      background-color: #1e1e20

      .rightTop
        height: 100%
        display: grid
        grid-template-columns: 40% 40% 20%

        .rightTopL
          height: 100%
          display: flex
          justify-content: space-around
          align-items: center

          .arrowLR
            i
              color: #4b4b4c
              margin: 0 8px
              font-size: 20px

              &:hover
                color: #1ece9a

          .searchMusic

            input
              width: 250px
              border-radius: 20px
              outline: none
              background-color: #343436
              border: none

          .distinguishMusic

            i
            font-size: 20px

        .rightTopR
          height: 100%

          .headPortrait
            height: 100%
            width: 50%
            display: flex
            justify-content: space-around
            align-items: center

            i
              font-size: 20px

    .rightIndex
      //height: 100%
      height: 700px
      overflow-x: hidden
      overflow-y: scroll
      background-color: #1e1e20

      &::-webkit-scrollbar
        display: none

      .indexPage

    .Progress
      width: 85%
      z-index: 4
      position: fixed
      bottom: 0

      .playerAu

</style>
