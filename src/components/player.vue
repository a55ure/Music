<template>
  <div class="playerMain">
    <audio :src="music" id="audio" ref="player"></audio>
    <!--    播放器左边-->
    <div class="pregressAndTime">
      <el-progress :percentage="progressing_audio" :format="processFormat" color="#1ecf9d" :stroke-width="4"
                   style="margin-top:.1rem;margin-left:.3rem;float:left;width:95%;"></el-progress>
    </div>
    <div class="audio-box bbb">
      <div class="SongInfo">
        <div class="songImg">
          <img :src="songImg" alt="">
        </div>
        <div class="details">
          <span class="songName" v-cloak>{{ songName }}</span>
          <div class="otherOperation">
            <span class="material-icons">favorite_border</span>
            <!--            喜爱<span class="material-icons">favorite</span>-->
            <span class="material-icons">more_horiz</span>
            <span class="material-icons">cloud_download</span>
          </div>
        </div>
      </div>
      <!-- 操作按钮     -->
      <div class="playerOperation">
        <div class="repeat">
          <span class="material-icons">repeat</span>
        </div>
        <div class="MainButton">
          <span class="material-icons hoverSong">skip_previous</span>
          <span class="material-icons rong-circle-control" @click="controlAudio()" style="font-size: 58px">{{
              playerIcon
            }}</span>
          <span class="material-icons hoverSong">skip_next</span>
        </div>
        <div class="volume">
          <span class="material-icons">volume_up</span>
        </div>
        <!--        <img :src="audioPlayShow ? imgB : imgA" class="rong-circle-control" @click="controlAudio()">-->
        <!--        <md-button class="md-icon-button">-->
        <!--          <img :src="audioPlayShow ? imgA : imgB" class="rong-circle-control" @click="controlAudio()">-->
        <!--        </md-button>-->
      </div>
      <!--      播放器右边-->
      <div class="playTimeAndList">
        <div class="time">
            <span class="time-font">
          {{
                second / 60 > 9 ? parseInt(second / 60) : '0' + parseInt(second / 60)
              }}:{{ second % 60 >= 10 ? parseInt(second % 60) : '0' + parseInt(second % 60) }}/{{
                playSongTime / 60 > 9 ? parseInt(playSongTime / 60) : '0' + parseInt(playSongTime / 60)
              }}:{{ playSongTime % 60 >= 10 ? parseInt(playSongTime % 60) : '0' + parseInt(playSongTime % 60) }}
        </span>
        </div>
        <div class="list">
          <span class="material-icons">queue_music</span>
          <!--          播放了列表数量-->
          <span>{{ 12 }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import tryaudio from '@/components/radio/try.flac'
import audioStart from '@/components/image/pause.png'
import audioStop from '@/components/image/start.png'
import defaultImage from '@/components/image/default.jpg'

export default {
  name: '',
  props: {
    params: {}
  },
  data() {
    return {
      songId: 0,
      songName: '告白气球',
      playerIcon: 'play_circle_filled',
      progressing_audio: 0,
      music: '',
      playFlag: false,
      audioPlayShow: true,
      timer: '',
      lengthMusic: 0,
      second: 0,
      imgA: audioStart,
      imgB: audioStop,
      songImg: defaultImage,
      playSongTime: 0,
      songInfo: '1'
    }
  },
  mounted() {
    this.songId = this.$store.state.songId
    this.getSongInfo()
    this.setInfo()
    console.log(this.songInfo)
  },
  created() {
  },
  computed: {
    getSongId: {
      set: function () {
        this.songId = this.$store.state.songId
      },
      get: function () {
        return this.songId
      }
    }
  },
  methods: {
    getSongInfo() {
      var that = this
      this.$axios.get('http://39.98.144.206:3000/song/url?id=' + that.songId).then(function (res) {
        that.music = res.data.data[0].url
        // that.songImg =
      }).catch(function (res) {
        console.log(res)
      })
    },
    totalTime: function () {
      this.playSongTime = this.$refs.player.duration
    },
    processFormat: function (percentage) {
      // return this.second
    },
    setInfo() {
      this.music = this.songInfo.url
      // console.log(this.music)
      // console.log(this.songInfo.url)
    },
    controlAudio: function () {
      this.totalTime()
      if (!this.params) {
        return false
      } else {
        console.log(this.params)
        this.music = this.params.url
        const audio0 = document.getElementById('audio')
        const leng = audio0.duration
        // console.log(audio0.duratuion)
        if (this.audioPlayShow) {
          audio0.play()

          this.audioPlayShow = false
          this.playerIcon = 'pause_circle_filled'
          this.timer = setInterval(() => {
            console.log(1 / leng)
            this.progressing_audio = (this.progressing_audio / 100 + 0.1 / leng) * 100
            this.second = this.second + 0.1
            if (this.progressing_audio >= 100) {
              clearInterval(this.timer)
              this.progressing_audio = 0
              this.second = 0
            }
            // console.log(this.progressing_audio)
          }, 100)
        } else {
          audio0.pause()
          this.playerIcon = 'play_circle_filled'
          this.audioPlayShow = true
          clearInterval(this.timer)
        }
      }
    }
  }
}

</script>

<style scoped lang="sass">
.playerMain
  padding: 0
  margin: 0
  background: #1e1e20
  //box-shadow: 0px 14px 30px 0px rgba(154, 159, 182, 0.1)

  .pregressAndTime
    height: 35px
    display: flex
    justify-content: space-around
    align-items: center

  .audio-box
    height: 75px
    width: 100%
    padding: 0
    margin: 0
    background: #1e1e20
    //box-shadow: 0px 14px 30px 0px rgba(154, 159, 182, 0.1)
    display: flex
    justify-content: space-around
    align-items: center

    .SongInfo
      display: flex

      .songImg
        margin-right: 5px

        img
          height: 45px
          width: 45px
          border-radius: 5px
          cursor: pointer

      .details
        display: flex
        flex-direction: column
        justify-content: space-around

        .songName
          color: #f9f9f9
          font-size: 18px

        .otherOperation
          display: flex
          justify-content: space-around
          align-items: center

          span
            color: #f9f9f9
            font-size: 15px
            cursor: pointer

            &:hover
              color: #1ecf9d

    .playerOperation
      display: flex
      justify-content: center
      align-items: center

      .MainButton
        display: flex
        justify-content: center
        align-items: center

        span
          cursor: pointer

        .hoverSong
          color: #f9f9f9
          font-size: 40px

          &:hover
            color: #1ecf9d

        .rong-circle-control
          height: 55px
          width: 55px
          border-radius: 50%
          color: #1ecf9d

      .repeat
        height: 100%
        display: flex
        justify-content: center
        align-items: center
        color: #f9f9f9

        span
          cursor: pointer

          &:hover
            color: #1ecf9d

      .volume
        height: 100%
        display: flex
        justify-content: center
        align-items: center
        color: #f9f9f9

        span
          cursor: pointer

          &:hover
            color: #1ecf9d

    .playTimeAndList
      //background-color: #2db7f5
      display: flex
      justify-content: center
      align-items: center

      .time
        .time-font
          margin-top: .1rem
          font-size: 15px
          font-family: PingFangSC-Regular
          font-weight: 400
          color: #f9f9f9
          line-height: .34rem
          float: left
          margin-left: 0rem

      .list
        //background-color: #1ecf9d
        margin-left: 10px
        height: 100%
        color: #f9f9f9
        display: flex
        justify-content: center
        align-items: center

</style>
