<template>
  <div>
    <audio :src="music" id="audio"></audio>
    <div class="audio-box bbb">
        <span class="time-font">
          {{
            second / 60 > 9 ? parseInt(second / 60) : '0' + parseInt(second / 60)
          }}:{{ second % 60 >= 10 ? parseInt(second % 60) : '0' + parseInt(second % 60) }}
        </span>
      <el-progress :percentage="progressing_audio" :format="processFormat" color="#1ecf9d" :stroke-width="4"
                   show-text=false
                   style="margin-top:.1rem;margin-left:.3rem;float:left;width:95%;"></el-progress>
      <div class="playerOperation">
        <img :src="audioPlayShow ? imgA : imgB" class="rong-circle-control" @click="controlAudio()">
      </div>
    </div>
  </div>
</template>
<script>
import tryaudio from '@/components/radio/try.flac'
import audioStart from '@/components/image/pause.png'
import audioStop from '@/components/image/stop.png'

export default {
  name: '',
  props: {
    params: {
      type: Object,
      default: () => ({
        message: 'hello'
      })
    }
  },
  data () {
    return {
      progressing_audio: 0,
      music: tryaudio,
      playFlag: false,
      audioPlayShow: true,
      timer: '',
      lengthMusic: 0,
      second: 0,
      imgA: audioStart,
      imgB: audioStop
    }
  },
  methods: {
    processFormat: function (percentage) {
      return this.second
    },
    controlAudio: function () {
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
          this.audioPlayShow = true
          clearInterval(this.timer)
        }
      }
    }
  }
}

</script>

<style>
.rong-circle-control {
  width: 20px;
  height: 20px;
  margin-left: .46rem;
  float: left;
  /*background-color: red;*/
  border-radius: 50%;
}

.time-font {
  margin-top: .1rem;
  font-size: .5rem;
  font-family: PingFangSC-Regular;
  font-weight: 400;
  color: rgba(153, 153, 153, 1);
  line-height: .34rem;
  float: left;
  margin-left: 0rem;

}

.audio-box {
  height: 75px;
  width: 100%;
  padding: 0;
  margin: 0;
  background: #1e1e20;
  box-shadow: 0px 14px 30px 0px rgba(154, 159, 182, 0.1);
//border-radius: .20rem;
}
</style>
