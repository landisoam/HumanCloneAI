<style>
    .four-cols {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    }
</style>
<template>
    <ApplicationNav/>
    <v-card class=" elevation-5">
        <v-toolbar class="" style="box-shadow: 0px 0px 5px 5px #ECEFF1;" color="white" height="80">
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <v-img src="../../src/assets/image/humanclone_logo.jpeg" class="pa-2" style="height: 80%;"></v-img>
        <!-- <v-toolbar-title class="text-h5">Human Clone</v-toolbar-title> -->
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>

        <v-spacer></v-spacer>
        <v-btn class="mx-6 rounded-lg" prepend-icon="mdi-download" variant="tonal" color="indigo-darken-2" size="large">
            Share
        </v-btn>

        <v-btn class=" rounded-lg" prepend-icon="mdi-download" variant="flat" color="indigo-darken-2" size="large">
            Download
        </v-btn>
        </v-toolbar>
        
    </v-card>
    <v-progress-linear color="blue-lighten-3" model-value="20"></v-progress-linear>
    <v-row class="pa-9 four-cols">
        <v-col>
            <v-sheet class="">
                <v-card height="300px" width="300px" class="rounded-lg" style="box-shadow: 0px 0px 30px 5px #ECEFF1  ;" color="white">
                    <video-player class="video-player vjs-big-play-centered" style="height:100%; width: 100%;"
                    :key="playerOptions.sources" :options="playerOptions" crossorigin="anonymous" playsinline controls :playback-rates="[0.7, 1.0, 1.5, 2.0]"
                    @mounted="handleMounted" @ready="handleEvent($event)" @play="handleEvent($event)"
                    @pause="handleEvent($event)" @ended="handleEvent($event)" @loadeddata="handleEvent($event)"
                    @waiting="handleEvent($event)" @playing="handleEvent($event)" @canplay="handleEvent($event)"
                    @canplaythrough="handleEvent($event)" @timeupdate="handleEvent(player?.currentTime())" />
                </v-card>
            </v-sheet>
        </v-col>

        <v-col>
            <v-sheet class="">
                <v-card height="300px" width="300px" class="rounded-lg" style="box-shadow: 0px 0px 30px 5px #ECEFF1  ;" color="white">
                    <video-player class="video-player vjs-big-play-centered" style="height:100%; width: 100%;"
                    :key="playerOptions.sources" :options="playerOptions" crossorigin="anonymous" playsinline controls :playback-rates="[0.7, 1.0, 1.5, 2.0]"
                    @mounted="handleMounted" @ready="handleEvent($event)" @play="handleEvent($event)"
                    @pause="handleEvent($event)" @ended="handleEvent($event)" @loadeddata="handleEvent($event)"
                    @waiting="handleEvent($event)" @playing="handleEvent($event)" @canplay="handleEvent($event)"
                    @canplaythrough="handleEvent($event)" @timeupdate="handleEvent(player?.currentTime())" />
                </v-card>
            </v-sheet>
        </v-col>

        <v-col>
            <v-sheet class="">
                <v-card height="300px" width="300px" class="rounded-lg" style="box-shadow: 0px 0px 30px 5px #ECEFF1  ;" color="white">
                    <video-player class="video-player vjs-big-play-centered" style="height:100%; width: 100%;"
                    :key="playerOptions.sources" :options="playerOptions" crossorigin="anonymous" playsinline controls :playback-rates="[0.7, 1.0, 1.5, 2.0]"
                    @mounted="handleMounted" @ready="handleEvent($event)" @play="handleEvent($event)"
                    @pause="handleEvent($event)" @ended="handleEvent($event)" @loadeddata="handleEvent($event)"
                    @waiting="handleEvent($event)" @playing="handleEvent($event)" @canplay="handleEvent($event)"
                    @canplaythrough="handleEvent($event)" @timeupdate="handleEvent(player?.currentTime())" />
                </v-card>
            </v-sheet>
        </v-col>
        
        <v-col>
            <v-sheet class="">
                <v-card height="300px" width="300px" class="rounded-lg" style="box-shadow: 0px 0px 30px 5px #ECEFF1  ;" color="white">
                    <video-player class="video-player vjs-big-play-centered" style="height:100%; width: 100%;"
                    :key="playerOptions.sources" :options="playerOptions" crossorigin="anonymous" playsinline controls :playback-rates="[0.7, 1.0, 1.5, 2.0]"
                    @mounted="handleMounted" @ready="handleEvent($event)" @play="handleEvent($event)"
                    @pause="handleEvent($event)" @ended="handleEvent($event)" @loadeddata="handleEvent($event)"
                    @waiting="handleEvent($event)" @playing="handleEvent($event)" @canplay="handleEvent($event)"
                    @canplaythrough="handleEvent($event)" @timeupdate="handleEvent(player?.currentTime())" />
                </v-card>
            </v-sheet>
        </v-col>

        <v-col>
            <v-sheet class="">
                <v-card height="300px" width="300px" class="rounded-lg" style="box-shadow: 0px 0px 30px 5px #ECEFF1  ;" color="white">
                    <video-player class="video-player vjs-big-play-centered" style="height:100%; width: 100%;"
                    :key="playerOptions.sources" :options="playerOptions" crossorigin="anonymous" playsinline controls :playback-rates="[0.7, 1.0, 1.5, 2.0]"
                    @mounted="handleMounted" @ready="handleEvent($event)" @play="handleEvent($event)"
                    @pause="handleEvent($event)" @ended="handleEvent($event)" @loadeddata="handleEvent($event)"
                    @waiting="handleEvent($event)" @playing="handleEvent($event)" @canplay="handleEvent($event)"
                    @canplaythrough="handleEvent($event)" @timeupdate="handleEvent(player?.currentTime())" />
                </v-card>
            </v-sheet>
        </v-col>

        <v-col>
            <v-sheet class="">
                <v-card height="300px" width="300px" class="rounded-lg" style="box-shadow: 0px 0px 30px 5px #ECEFF1  ;" color="white">
                    <video-player class="video-player vjs-big-play-centered" style="height:100%; width: 100%;"
                    :key="playerOptions.sources" :options="playerOptions" crossorigin="anonymous" playsinline controls :playback-rates="[0.7, 1.0, 1.5, 2.0]"
                    @mounted="handleMounted" @ready="handleEvent($event)" @play="handleEvent($event)"
                    @pause="handleEvent($event)" @ended="handleEvent($event)" @loadeddata="handleEvent($event)"
                    @waiting="handleEvent($event)" @playing="handleEvent($event)" @canplay="handleEvent($event)"
                    @canplaythrough="handleEvent($event)" @timeupdate="handleEvent(player?.currentTime())" />
                </v-card>
            </v-sheet>
        </v-col>

    </v-row>
    
</template>
<script>
import 'video.js/dist/video-js.css'
// import { videoPlayer } from 'vue-video-player'
import { defineComponent } from 'vue'
import { VideoPlayer } from '@videojs-player/vue'
import 'video.js/dist/video-js.css'
import { supabase } from '../supabase'
import ApplicationNav from '../components/application/ApplicationNav.vue'

export default defineComponent({
  components:{
    ApplicationNav
  },
  data: () => ({
    playerOptions: {
      // videojs options
      sources: [{
        type: "video/mp4",
        src: "http://aserious.tplinkdns.com:8000/storage/v1/object/public/generatedvideo/output_video_enhanced.mp4"
      }],
      poster: "../../src/assets/image/cover.png",
    },
  })

});
</script>