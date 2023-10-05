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
        <!-- <text-h4>{{ items }}</text-h4> -->
        <v-flex v-for="item in items" :key='item.id'>
            <v-sheet class="">
                <!-- <text-h4>{{ item.sources }}</text-h4> -->
                <v-card height="300px" width="300px" class="rounded-lg ma-2" style="box-shadow: 0px 0px 30px 5px #ECEFF1  ;" color="white">
                    <video-player class="video-player vjs-big-play-centered" style="height:100%; width: 100%;"
                    :key="item.sources" :options="item" crossorigin="anonymous" playsinline controls :playback-rates="[0.7, 1.0, 1.5, 2.0]"
                    @mounted="handleMounted" @ready="handleEvent($event)" @play="handleEvent($event)"
                    @pause="handleEvent($event)" @ended="handleEvent($event)" @loadeddata="handleEvent($event)"
                    @waiting="handleEvent($event)" @playing="handleEvent($event)" @canplay="handleEvent($event)"
                    @canplaythrough="handleEvent($event)" @timeupdate="handleEvent(player?.currentTime())" />
                </v-card>
            </v-sheet>
        </v-flex>

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
  created() {
    this.getAllHistory();
    // console.log(this.playerOptions);
  },
  data: () => ({
    items:[],
    playerOptions: {
      // videojs options
      sources: [{
        // type: "video/mp4",
        // src: "http://aserious.tplinkdns.com:8000/storage/v1/object/public/generatedvideo/output_video_enhanced.mp4"
      }],
      poster: "../../src/assets/image/cover.png",
    },
  }),
  methods:{
    async getAllHistory() {
        let { data: History, error } = await supabase
        .from('History')
        .select()
        .order('id', { ascending: false })
        
        if(History){
            // console.log("history",History);
            // this.items = History;
            // console.log(this.items);
            History.forEach((history) => {
                const sources = [{
                        type: "video/mp4",
                        src: 'http://aserious.tplinkdns.com:8001/' + history.video + '.mp4'
                }];

                console.log(sources);
                this.items.push(
                    {
                        // videojs options
                        sources: sources,
                        poster: "../../src/assets/image/cover.png",
                    }
                );
            });
            console.log('Player',this.items + 'testt.pp');
            
        }
    }
  },

});
</script>