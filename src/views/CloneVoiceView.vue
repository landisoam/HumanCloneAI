<template>
  <ApplicationNav/>
  <v-card class=" elevation-0">
    <v-toolbar class="" style="box-shadow: 0px 0px 5px 5px #ECEFF1;" color="white" height="80">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-img src="../../src/assets/image/humanclone_logo.jpeg" class="pa-2" style="height: 80%;"></v-img>
      <!-- <v-toolbar-title class="text-h5">Human Clone</v-toolbar-title> -->
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-btn class="mx-6 rounded-lg" prepend-icon="mdi-download" variant="tonal" color="indigo-darken-2" size="x-large">
        Share
      </v-btn>

      <v-btn class="mr-14 rounded-lg" prepend-icon="mdi-download" variant="flat" color="indigo-darken-2" size="x-large">
        Download
      </v-btn>
      <!-- <template v-slot:extension>
          <v-tabs
            v-model="currentItem"
            fixed-tabs
          >
            <v-tab
              v-for="item in items"
              :key="item"
              :value="'tab-' + item"
            >
              {{ item }}
            </v-tab>
  
            <v-menu
              v-if="more.length"
            >
              <template v-slot:activator="{ props }">
                <v-btn
                  variant="plain"
                  rounded="0"
                  class="align-self-center me-4"
                  height="100%"
                  v-bind="props"
                >
                  more
                  <v-icon end>
                    mdi-menu-down
                  </v-icon>
                </v-btn>
              </template>
  
              <v-list class="bg-grey-lighten-3">
                <v-list-item
                  v-for="item in more"
                  :key="item"
                  @click="addItem(item)"
                >
                  {{ item }}
                </v-list-item>
              </v-list>
            </v-menu>
          </v-tabs>
        </template> -->
    </v-toolbar>

    <!-- Under AppTitle -->
    <v-row :align="align" no-gutters>
      <v-col cols="2">
        <v-sheet class="ma-2">
          <v-card height="100%" class="rounded-lg" style="box-shadow: 0px 0px 30px 5px #ECEFF1  ;" color="white">
            <!-- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. -->
            <v-row no-gutters class="pa-3">
              <v-col cols="1" >
                <v-card height="100px" width="40%" class="rounded-xl mt-5" color="#2B80FF" v-show="humanselected == 1"></v-card>
              </v-col>
              <v-col cols="11">
                <v-card height="130px" class="rounded-xl " color="blue-grey-lighten-5"
                  style="border: 6px outset #1A237E; box-shadow: 0px 0px 20px 1px #9FC6FF" v-show="humanselected == 1">
                  <img src="../../src/assets/image/owen.png" style="width:100%;" alt="" @click="changehuman('1')">
                </v-card>
                <v-card height="130px" class="rounded-xl " color="blue-grey-lighten-5"
                  style="border: none;" v-show="humanselected != 1">
                  <img src="../../src/assets/image/owen.png" style="width:100%;" alt="" @click="changehuman('1')">
                </v-card>
                <h4 class="text-center">1</h4>
              </v-col>
            </v-row>

            <v-row no-gutters class="pa-3">
              <v-col cols="1">
                <v-card height="100px" width="40%" class="rounded-xl mt-5" color="#2B80FF" v-show="humanselected == 2"></v-card>
              </v-col>
              <v-col cols="11">
                <v-card height="130px" class="rounded-xl " color="blue-grey-lighten-5"
                  style="border: 6px outset #1A237E; box-shadow: 0px 0px 20px 1px #9FC6FF" v-show="humanselected == 2">
                  <img src="../../src/assets/image/landis.jpeg" style="width:100%;" alt="" @click="changehuman('2')">
                </v-card>
                <v-card height="130px" class="rounded-xl " color="blue-grey-lighten-5"
                  style="border: none;" v-show="humanselected != 2">
                  <img src="../../src/assets/image/landis.jpeg" style="width:100%;" alt="" @click="changehuman('2')">
                </v-card>
                <h4 class="text-center">2</h4>
              </v-col>
            </v-row>

            <v-row no-gutters class="pa-3">
              <v-col cols="1">
                <v-card height="100px" width="40%" class="rounded-xl mt-5" color="#2B80FF" v-show="humanselected == 3"></v-card>
              </v-col>
              <v-col cols="11">
                <v-card height="130px" class="rounded-xl " color="blue-grey-lighten-5"
                  style="border: 6px outset #1A237E; box-shadow: 0px 0px 20px 1px #9FC6FF" v-show="humanselected == 3">
                  <img src="../../src/assets/image/jooting.jpeg" style="width:100%;" alt="" @click="changehuman('3')">
                </v-card>
                <v-card height="130px" class="rounded-xl " color="blue-grey-lighten-5"
                  style="border: none;" v-show="humanselected != 3">
                  <img src="../../src/assets/image/jooting.jpeg" style="width:100%;" alt="" @click="changehuman('3')">
                </v-card>
                <h4 class="text-center">3</h4>
              </v-col>
            </v-row>

            <v-container height="150px" class="rounded-lg elevation-0 ma-3" color="blue-grey-lighten-5">
              <v-btn icon="mdi-plus" class="elevation-1 text-center" size="small"></v-btn>
            </v-container>
          </v-card>

        </v-sheet>
      </v-col>
      <v-col cols="7">
        <v-sheet class="ma-2">
          <v-card height="150px" class="rounded-lg mb-3" style="box-shadow: 0px 0px 30px 5px #ECEFF1;" color="">
            <!-- <audio controls style="width:95%" class="ma-5">
              <source src="horse.ogg" type="audio/ogg">
              <source :src="generate_song" type="audio/mpeg">
              Your browser does not support the audio element.
            </audio> -->
              <div class="ma-5">
                {{ currentAudioName || audioList[0].name }}
                <audio-player
                  ref="audioPlayer"
                  :audio-list="audioList.map(elm => elm.url)"
                  :before-play="handleBeforePlay"
                  theme-color="#5C6BC0"
                />
              </div>
          </v-card>

          <v-card height="100px" class="rounded-lg pa-7 mb-3" style="box-shadow: 0px 0px 30px 5px #ECEFF1;">
            <v-row>
              <v-col cols="4">
                <v-flex justify-center>
                  <h3 class="text-center pt-5"> Voice Name</h3>
                </v-flex>
              </v-col>
              <v-col cols="4">
                <v-flex justify-center>
                  <v-select label="User" v-model="speaker" :items="speakername" :item-props="speakerlist"></v-select>
                </v-flex>
              </v-col>
              <v-col cols="4">
                <v-flex justify-center>
                  <v-select style="border: none;" label="Language"
                :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']" variant="filled"></v-select>
                </v-flex>
              </v-col>
            </v-row>
          </v-card>
          <text-h5>
                  <!-- {{ speaker.name }} -->
                </text-h5>
          <v-card height="300px" class="rounded-lg pa-7" style="box-shadow: 0px 0px 30px 5px #ECEFF1;">
            <v-row justify="end">
              <v-col>
                <v-row>
                  <v-col cols="auto">
                    <v-btn icon="mdi-map-marker-check" size="small" style="box-shadow: 0px 0px 30px 5px #cbcccf;"></v-btn>
                  </v-col>
                  <v-col cols="auto">
                    <v-btn icon="mdi-pause" size="small" style="box-shadow: 0px 0px 30px 5px #cbcccf;"></v-btn>
                  </v-col>
                  <v-col cols="auto">
                    <v-btn icon="mdi-speedometer" size="small" style="box-shadow: 0px 0px 30px 5px #cbcccf;"></v-btn>
                  </v-col>
                  <v-col cols="auto">
                    <v-btn icon="mdi-account-voice" size="small" style="box-shadow: 0px 0px 30px 5px #cbcccf;"></v-btn>
                  </v-col>
                </v-row>

              </v-col>
              <v-spacer></v-spacer>
              <v-col>
                <!-- <v-switch class="ma-0 pa-0" color="indigo-darken-2" v-model="tts_to_audio" inset flat
                  append-icon="mdi-microphone" prepend-icon="mdi-text"></v-switch> -->
              </v-col>
              <v-spacer></v-spacer>
              <v-col>
                <v-card height="50px" width="100%" class="rounded-xl pa-3 px-3" color="blue-grey-lighten-5"
                  style="box-shadow: 0px 0px 1px 1px #cbcccf;">
                  <v-icon icon="mdi-play-speed"></v-icon>
                  <text-h6>00:00 / 00:30 </text-h6>
                </v-card>
              </v-col>

            </v-row>
            <v-row>
              <v-container fluid v-if="tts_to_audio == true">
                <v-textarea name="input-7-1" variant="" label="Label" auto-grow
                  v-model="tts_content"></v-textarea>
              </v-container>
              <v-container fluid v-if="tts_to_audio == false">
                <!-- <Recorder/> -->
                <!-- Voice Record Title + Button -->
                <div>
                  <!-- <v-btn @click="recordAudio()">
                    <v-icon> mdi-microphone </v-icon>
                  </v-btn>
                  <v-btn @click="stop()">
                    <v-icon> mdi-stop-circle-outline </v-icon>
                  </v-btn> -->
                  <!-- <input type="file" id="file" ref="file" v-on:change="handleFileUpload()" /> -->
                  <v-divider class="pa-5"></v-divider>
                  <v-file-input
                    chips
                    multiple
                    label="Upload a .Wav file"
                    type="file" id="file" ref="file"
                    accept=".wav"
                  ></v-file-input>
                  <!-- <text-h5>{{ file }}</text-h5> -->
                </div>
              </v-container>
            </v-row>
          </v-card>
        </v-sheet>
      </v-col>
      <v-col cols="3">
        <v-sheet class="pa-1 ma-1">
          <v-card height="100%" class="rounded-xl pa-2 mb-1" style="box-shadow: 0px 0px 30px 5px #ECEFF1;">
            <!-- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. -->

            <v-container>
              <h4 class="pb-2">Avatar</h4>
              <v-btn class="mr-14 rounded-lg pa-3" width="100%" prepend-icon="mdi-download" variant="tonal"
                color="indigo-darken-2">
                Download
              </v-btn>
              <!-- <v-btn icon="mdi-plus" class="elevation-1" size="x-large"></v-btn> -->
            </v-container>
            <v-row class="px-5 pt-6">
              <v-divider></v-divider>
            </v-row>
            <v-container>
              <h4 class="pb-3 pt-3">Background Colour</h4>
              <v-color-picker class="rounded-lg" style="box-shadow: 0px 0px 30px 8px #dadddf;" v-model="color"
                dot-size="20" mode="hexa" swatches-max-height="179"></v-color-picker>
              <!-- <v-btn icon="mdi-plus" class="elevation-1" size="x-large"></v-btn> -->
            </v-container>
            <v-row class="px-5 pt-6">
              <v-divider></v-divider>
            </v-row>
            <v-container>
              <h4 class="py-3">Scence</h4>
              <v-select style="border: none;" label="Select"
                :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']" variant="filled"></v-select>
            </v-container>
            <v-row class="px-5 pt-6">
              <v-divider></v-divider>
            </v-row>
            <v-container>
              <h4 class="py-3">Background Media</h4>
              <v-btn class="mr-14 rounded-lg pa-3" width="100%" prepend-icon="mdi-crop" variant="flat"
                color="indigo-darken-2">
                Crop
              </v-btn>
              <v-row class="pt-5">
                <v-col cols="8">
                  <v-slider v-model="opacity" color="indigo-darken-2" label="Opacity" :step="5"></v-slider>
                </v-col>
                <v-col cols="4">
                  <v-text-field width="10%" v-model="opacity" :append-inner-icon="mdi-percent"
                    density="compact"></v-text-field>
                </v-col>
              </v-row>
              <v-row class="">
                <v-col cols="8">
                  <v-slider v-model="blue" color="indigo-darken-2" label="Blue" :step="5"></v-slider>
                </v-col>
                <v-col cols="4">
                  <v-text-field width="10%" v-model="blur" :append-inner-icon="mdi-percent"
                    density="compact"></v-text-field>
                </v-col>
              </v-row>
            </v-container>
            <v-row class="px-5 pt-6">
              <v-divider></v-divider>
            </v-row>
            <v-container>
              <h4 class="py-3">Music</h4>
              <v-select style="border: none;" label="Select"
                :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']" variant="filled"></v-select>
            </v-container>
            <v-row class="px-5 pt-6">
              <v-divider></v-divider>
            </v-row>
            <v-container>
              <h4 class="py-3">Transition</h4>
              <v-select style="border: none;" label="Select"
                :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']" variant="filled"></v-select>
            </v-container>
          </v-card>
          <!-- <v-btn class="rounded-lg mt-5 mb-5" width="100%" prepend-icon="mdi-cube-send" variant="flat" color="indigo-accent-4" size="large" @click="submit_generate()">
              Generate
          </v-btn> -->
          <v-btn class="rounded-lg mt-5 mb-5" width="100%" prepend-icon="mdi-cube-send" variant="flat" color="indigo-accent-4" size="large" @click="handleFileUpload()">
              Generate
          </v-btn>
        </v-sheet>
      </v-col>
    </v-row>

    <!-- <v-window v-model="currentItem">
        <v-window-item
          v-for="item in items.concat(more)"
          :key="item"
          :value="'tab-' + item"
        >
          <v-card flat>
            <v-card-text>
              <h2>{{ item }}</h2>
              {{ text }}
            </v-card-text>
          </v-card>
        </v-window-item>
      </v-window> -->
  </v-card>
</template>

<script>
import 'video.js/dist/video-js.css'
// import { videoPlayer } from 'vue-video-player'
import { defineComponent } from 'vue'
import { VideoPlayer } from '@videojs-player/vue'
import 'video.js/dist/video-js.css'
import ApplicationNav from '../components/application/ApplicationNav.vue';

export default defineComponent({
  components:{
    ApplicationNav,
  },
  data: () => ({
    color: '#1976D2FF',
    mask: '!#XXXXXXXX',
    // menu: false,
    recorder: null,
    chunks: [],
    device: null,
    blobObj: null,
    humanselected:1,
    videopath:'',
    file:null,
    filename: null,
    speaker:{
      name:null
    },
    currentAudioName: '',
      audioList: [
        {
          name: 'audio1',
          url: 'https://www.0dutv.com/upload/dance/20200316/C719452E3C7834080007662021EA968E.mp3'
        }
      ],
    generate_song:null,
    generate_audio:[],
    speakername:[
        {
          name: 'landis.pth',
          gender: 'Male',
        },
        {
          name: 'eunice.pth',
          gender: 'Female',
        },
        {
          name: 'jooting.pth',
          gender: 'Female',
        },
        {
          name: 'cheeweng.pth',
          gender: 'Male',
        },
      ],
    playerOptions: {
      // videojs options
      muted: false,
      language: 'en',
      playbackRates: [0.7, 1.0, 1.5, 2.0],
      autoplay: true,
      sources: [{
        type: "video/mp4",
        src: "http://aserious.tplinkdns.com:8000/storage/v1/object/public/generatedvideo/output_video_enhanced.mp4"
      }],
      poster: "../../src/assets/image/cover.png",
    },
    mounted() {
      console.log('this is current player instance object', this.player)
    },
    tts_to_audio: false,
    tts_content:"The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through.",
    opacity: 0,
    blur: 0,
    icons: [
      'mdi-snowflake',
      'mdi-leaf',
      'mdi-fire',
      'mdi-water',
    ],
    currentItem: 'tab-Web',
    items: [
      'Web', 'Shopping', 'Videos', 'Images',
    ],
    more: [
      'News', 'Maps', 'Books', 'Flights', 'Apps',
    ],
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  }),
  computed: {
    player() {
      return this.$refs.videoPlayer.player
    },
    swatchStyle() {
      const { color, menu } = this
      return {
        backgroundColor: color,
        cursor: 'pointer',
        height: '30px',
        width: '30px',
        borderRadius: menu ? '50%' : '4px',
        transition: 'border-radius 200ms ease-in-out'
      }
    },
  },
  created() {
    // this.device = navigator.mediaDevices.getUserMedia({ audio: true });
  },
  methods: {
    handleBeforePlay(next) {
      // There are a few things you can do here...
      this.currentAudioName = this.audioList[this.$refs.audioPlayer.currentPlayIndex].name

      next() // Start playing
    },
    changeAudio(filename_uuid){
      var audio =  [
        {
          name: filename_uuid,
          url: 'http://aserious.tplinkdns.com:8002/' + filename_uuid,
        } 
      ]
      // var src = "http://aserious.tplinkdns.com:8002/" + filename_uuid;
      
      this.audioList = audio;
      console.log(audio);
    },
    changehuman(index){
      this.humanselected = index
      console.log("change human", this.humanselected);
    },
    speakerlist (item) {
        return {
          title: item.name,
          subtitle: item.gender,
        }
      },

    // Update file into server
    async handleFileUpload() {
      this.file = this.$refs.file.files[0];
      this.$swal(this.file.name + ' file selected');
      
      const form = new FormData();
      form.append('file', this.file);
      console.log(this.file);
      
      const generate_audio = await this.axios.post(
        'http://aserious.tplinkdns.com:8081/infer',
        form,
        {
          params: {
            'spk_list': 'landis',
            'model_path': '/home/seriousco/Desktop/spk_list/audio/' + this.speaker.name
          },
          headers: {
            // ...form.getHeaders(),
            'accept': 'application/json',
            'Content-Type': 'multipart/form-data'
          }
        }
      );
      console.log(generate_audio.data);
      this.filename = generate_audio.data;
      this.$swal({
        position: 'top-end',
        icon: 'success',
        title: generate_audio.data,
        showConfirmButton: false,
        timer: 1500
      });
      this.changeAudio(this.file.name);
    },
    recordAudio() {
      this.device.then((stream) => {
        this.recorder = new MediaRecorder(stream);
        this.recorder.ondataavailable = (e) => {
          this.chunks.push(e.data);
          if (this.recorder.state === "inactive") {
            let blob = new Blob(this.chunks, { type: "audio/wav" });
            // save to blobObj
            this.blobObj = blob;

            console.log(this.blobObj);
            this.chunks = [];

            // emit to parent
            this.$emit("send-audio", this.blobObj);
            this.blobObj = null;

          }
        };
        // start
        this.recorder.start();
      });
    },
    stop() {
      // stop
      this.recorder.stop();
    },
    // listen event
    onPlayerPlay(player) {
      // console.log('player play!', player)
    },
    onPlayerPause(player) {
      // console.log('player pause!', player)
    },
    // ...player event

    // or listen state event
    playerStateChanged(playerCurrentState) {
      // console.log('player current update state', playerCurrentState)
    },

    // player is ready
    playerReadied(player) {
      console.log('the player is readied', player)
      // you can use it to do something...
      // player.[methods]
    },
    season(val) {
      return this.icons[val]
    },
    addItem(item) {
      const removed = this.items.splice(0, 1)
      this.items.push(
        ...this.more.splice(this.more.indexOf(item), 1),
      )
      this.more.push(...removed)
      this.$nextTick(() => { this.currentItem = 'tab-' + item })
    },
  },
})
</script>