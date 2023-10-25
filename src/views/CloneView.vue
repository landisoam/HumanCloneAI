<template>
  <ApplicationNav />
  <v-card class=" elevation-0">
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
      <!-- <v-divider vertical :thickness="3"></v-divider> -->
      <!-- <text-h4>dsadsa?</text-h4> -->
      <!-- <v-btn class=" rounded-lg" prepend-icon="mdi-download" variant="outlined" color="blue-grey-darken-4" size="large">
        Login
      </v-btn> -->
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
    <v-progress-linear color="blue-lighten-1" :model-value="loading_progression"></v-progress-linear>
    <!-- Under AppTitle -->
    <v-row :align="align" no-gutters>
      <v-col cols="2">
        <v-sheet class="ma-2">
          <v-card height="100%" class="rounded-lg" style="box-shadow: 0px 0px 30px 5px #ECEFF1  ;" color="white">
            <!-- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. -->
            <h4 class="text-center pa-2">AGENTS</h4>
            <v-row no-gutters class="pa-2">
              <v-col cols="1">
                <v-card height="50%" width="40%" class="rounded-xl mt-5" color="#2B80FF"
                  v-show="humanselected == 1"></v-card>
              </v-col>
              <v-col cols="11">
                <v-card height="80%" class="rounded-xl " color="blue-grey-lighten-5"
                  style="border: 6px outset #1A237E; box-shadow: 0px 0px 20px 1px #9FC6FF" v-show="humanselected == 1">
                  <img src="../../src/assets/image/owen.png" style="width:100%; height: 100%;" alt=""
                    @click="changehuman('1')">
                </v-card>
                <v-card height="80%" class="rounded-xl " color="blue-grey-lighten-5" style="border: none;"
                  v-show="humanselected != 1">
                  <img src="../../src/assets/image/owen.png" style="width:100%; height: 100%;" alt=""
                    @click="changehuman('1')">
                </v-card>
                <h4 class="text-center">1</h4>
              </v-col>
            </v-row>

            <v-row no-gutters class="pa-2">
              <v-col cols="1">
                <v-card height="50%" width="40%" class="rounded-xl mt-5" color="#2B80FF"
                  v-show="humanselected == 2"></v-card>
              </v-col>
              <v-col cols="11">
                <v-card height="80%" class="rounded-xl " color="blue-grey-lighten-5"
                  style="border: 6px outset #1A237E; box-shadow: 0px 0px 20px 1px #9FC6FF" v-show="humanselected == 2">
                  <img src="../../src/assets/image/landis.jpeg" style="width:100%; height: 100%;" alt=""
                    @click="changehuman('2')">
                </v-card>
                <v-card height="80%" class="rounded-xl " color="blue-grey-lighten-5" style="border: none;"
                  v-show="humanselected != 2">
                  <img src="../../src/assets/image/landis.jpeg" style="width:100%; height: 100%;" alt=""
                    @click="changehuman('2')">
                </v-card>
                <h4 class="text-center">2</h4>
              </v-col>
            </v-row>

            <v-row no-gutters class="pa-2">
              <v-col cols="1">
                <v-card height="50%" width="40%" class="rounded-xl mt-5" color="#2B80FF"
                  v-show="humanselected == 3"></v-card>
              </v-col>
              <v-col cols="11">
                <v-card height="80%" class="rounded-xl " color="blue-grey-lighten-5"
                  style="border: 6px outset #1A237E; box-shadow: 0px 0px 20px 1px #9FC6FF" v-show="humanselected == 3">
                  <img src="../../src/assets/image/jooting.jpeg" style="width:100%; height: 100%;" alt=""
                    @click="changehuman('3')">
                </v-card>
                <v-card height="80%" class="rounded-xl " color="blue-grey-lighten-5" style="border: none;"
                  v-show="humanselected != 3">
                  <img src="../../src/assets/image/jooting.jpeg" style="width:100%; height: 100%;" alt=""
                    @click="changehuman('3')">
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
          <v-card height="500px" class="rounded-lg mb-3" style="box-shadow: 0px 0px 30px 5px #ECEFF1;" color="">
            <!-- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. -->
            <!-- <v-card height="90%" class="rounded-xl elevation-0 ma-3" color="blue-grey-lighten-5">
              <v-container class="justify-center " color="">
                <v-btn icon="mdi-plus" class="elevation-1" size="x-large"></v-btn>
                
              </v-container>
            </v-card> -->
            <video-player class="video-player vjs-big-play-centered" style="height:100%; width: 100%;"
              :key="playerOptions.sources" :options="playerOptions" crossorigin="anonymous" playsinline controls
              :playback-rates="[0.7, 1.0, 1.5, 2.0]" @mounted="handleMounted" @ready="handleEvent($event)"
              @play="handleEvent($event)" @pause="handleEvent($event)" @ended="handleEvent($event)"
              @loadeddata="handleEvent($event)" @waiting="handleEvent($event)" @playing="handleEvent($event)"
              @canplay="handleEvent($event)" @canplaythrough="handleEvent($event)"
              @timeupdate="handleEvent(player?.currentTime())" />
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
                  <v-select label="Language" v-model="language" :items="languages" :item-props="languageslist"></v-select>
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
              <!-- <v-spacer></v-spacer> -->
              <!-- <v-col>
                <v-switch class="ma-0 pa-0" color="indigo-darken-2" v-model="tts_to_audio" inset flat
                  append-icon="mdi-microphone" prepend-icon="mdi-text"></v-switch>
              </v-col> -->
              <v-spacer></v-spacer>
              <v-col>
                <v-card height="50px" class="rounded-xl pa-3 px-3" color="blue-grey-lighten-5"
                  style="box-shadow: 0px 0px 1px 1px #cbcccf;">
                  <v-icon icon="mdi-play-speed"></v-icon>
                  <text-h6>00:00 / 00:30 </text-h6>
                </v-card>
              </v-col>

            </v-row>
            <v-row>
              <v-container fluid v-if="tts_to_audio == true">
                <v-textarea name="input-7-1" variant="" label="Label" auto-grow v-model="tts_content"></v-textarea>
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
                  <v-file-input chips multiple label="Upload a .Wav file" type="file" id="file" ref="file" accept=".wav"
                    v-on:change="handleFileUpload()"></v-file-input>
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
                  <v-text-field width="10%" v-model="opacity" :append-inner-icon="mdi - percent"
                    density="compact"></v-text-field>
                </v-col>
              </v-row>
              <v-row class="">
                <v-col cols="8">
                  <v-slider v-model="blue" color="indigo-darken-2" label="Blue" :step="5"></v-slider>
                </v-col>
                <v-col cols="4">
                  <v-text-field width="10%" v-model="blur" :append-inner-icon="mdi - percent"
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
          <v-btn class="rounded-lg mt-5 mb-5" width="100%" prepend-icon="mdi-cube-send" variant="flat"
            color="indigo-accent-4" size="large" @click="submit_generate()">
            Generate
          </v-btn>
          <!-- <v-btn class="rounded-lg mt-5 mb-5" width="100%" prepend-icon="mdi-cube-send" variant="flat" color="indigo-accent-4" size="large" @click="generate_video()">
              Generate
          </v-btn> -->
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
  <v-snackbar v-model="snackbar" multi-line>
    {{ snackcontent }}

    <template v-slot:actions>
      <v-btn color="red" variant="text" @click="snackbar = false">
        Close
      </v-btn>
    </template>
  </v-snackbar>
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
  components: {
    ApplicationNav
  },
  data: () => ({
    color: '#1976D2FF',
    mask: '!#XXXXXXXX',
    // menu: false,
    recorder: null,
    chunks: [],
    device: null,
    blobObj: null,
    humanselected: 1,
    loading_progression: 0,
    videopath: '',
    file: null,
    filename: null,
    snackbar: false,
    snackcontent: null,
    speaker: {
      name: null
    },
    language: {
      lang: null
    },
    generate_audio: [],
    speakername: [
      {
        name: 'Landis',
        gender: 'Male',
      },
      {
        name: 'Eunice',
        gender: 'Female',
      },
      {
        name: 'yy',
        gender: 'Female',
      },
    ],
    languages: [
      {
        lang: 'English',
      },
      {
        lang: '简体中文',
      },
      {
        lang: '日本語',
      },
      {
        lang: 'Mix',
      },
    ],
    playerOptions: {
      // videojs options
      muted: false,
      language: 'en',
      playbackRates: [0.7, 1.0, 1.5, 2.0],
      autoplay: false,
      sources: [{
        type: "video/mp4",
        src: "http://aserious.tplinkdns.com:8000/storage/v1/object/public/generatedvideo/output_video_enhanced.mp4"
      }],
      poster: "../../src/assets/image/cover.png",
    },
    mounted() {
      console.log('this is current player instance object', this.player)
    },
    tts_to_audio: true,
    tts_content: "The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through.",
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
    async insert_history(video) {
      const { data, error } = await supabase
        .from('History')
        .insert([
          {
            name: 'someValue',
            model: 'e143b3bc-0d5a-4e89-866c-684e7d0864da',
            speaker: '0ba97b5f-45e3-4098-9578-1b66778713ad',
            video: video
          }
        ]).select()

      if (data) {
        console.log(data);
      } else {
        console.error(error);
      }
    },
    start_loading_animation() {
      this.loading_progression = 10;
      window.setInterval(() => {
        this.loading_progression += 1;
      }, 1000);
    },
    uuidv4() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
        .replace(/[xy]/g, function (c) {
          const r = Math.random() * 16 | 0,
            v = c == 'x' ? r : (r & 0x3 | 0x8);
          return v.toString(16);
        });
    },
    changeVideo(filename_uuid) {
      const newsource = [{
        type: "video/mp4",
        src: "http://aserious.tplinkdns.com:8001/" + filename_uuid + '.mp4'
        // src: "http://aserious.tplinkdns.com:8000/storage/v1/object/public/generatedvideo/" + filename_uuid + '.mp4'
      }];
      this.playerOptions.sources = newsource;
    },
    changehuman(index) {
      this.humanselected = index
      // playSound('http://soundbible.com/mp3/Elevator Ding-SoundBible.com-685385892.mp3');
      // playSound('../../src/assets/sound/cardclick.wav');
      var audio = new Audio('../../src/assets/sound/cardclick.wav'); 
      audio.play();
      console.log("change human", this.humanselected);
    },
    speakerlist(item) {
      return {
        title: item.name,
        subtitle: item.gender,
      }
    },
    languageslist(item) {
      return {
        title: item.lang,
      }
    },
    // Generate Audio into server 
    async submit_generate() {
      if (this.speaker.name == null || this.language.lang == null) {
        if(this.speaker.name == null && this.language.lang == null){
          this.snackcontent = 'Please select a speaker and language.';
          this.snackbar = true;
        } else if (this.speaker.name == null && this.language.lang != null) {
          this.snackcontent = 'Please select a speaker.';
          this.snackbar = true;
        } else {
          this.snackcontent = 'Please select a language.';
          this.snackbar = true;
        }
      } else {
        this.loading_progression = 0;
        this.start_loading_animation();
        const fileuuid = this.uuidv4();
        this.insert_history(fileuuid);
        if (this.tts_to_audio == true) {
          // TTS to voice
          console.log('tts: started')
          this.generate_audio = await this.axios.get(
            'http://aserious.tplinkdns.com:8080/test',
            {
              params: {
                'text': this.tts_content,
                'speaker': this.speaker.name, //yy
                'lang': this.language.lang
              },
              headers: {
                'accept': 'application/json',
              }
            }
          );
        } else {
          // Wav to voice
          const form = new FormData();
          form.append('file', this.file);
          this.generate_audio = await this.axios.post(
            'http://aserious.tplinkdns.com:8080/infer',
            form,
            {
              params: {
                'spk_list': 'landis',
                'model_path': "/home/seriousco/Desktop/spk_list/audio/" + this.speaker.name  //landis.pth
              },
              headers: {
                'accept': 'application/json',
                'Content-Type': 'multipart/form-data'
              }
            }
          );
        }

        console.log(this.generate_audio);
        if (this.generate_audio.data != null) {

        }
        this.filename = this.generate_audio.data;
        this.$swal({
          position: 'top-end',
          icon: 'success',
          title: this.generate_audio.data,
          showConfirmButton: false,
          timer: 1500
        });
        await this.generate_video(this.generate_audio.data, fileuuid);
      }
    },

    // Generate video into server 
    async generate_video(wavfile, fileuuid) {
      // console.log(this.filename);
      // console.log(this.humanselected);
      if (this.humanselected == 1) {
        this.videopath = "/home/seriousco/Desktop/spk_list/video/owen.mp4";
      }
      else if (this.humanselected == 2) {
        this.videopath = "/home/seriousco/Desktop/spk_list/video/landis.mp4";
      }
      else {
        this.videopath = "/home/seriousco/Desktop/spk_list/video/jooting.mp4";
      }

      console.log(this.videopath);
      console.log(fileuuid);
      console.log(this.filename);
      const generatevideo = await this.axios.post(
        'http://aserious.tplinkdns.com:7001/test', '',
        {
          params: {
            'video': this.videopath,
            'uuid': fileuuid,
            'filepath': wavfile,
            'checkpoint': 'wav2lip_gan',
            'checkpoint': 'wav2lip_gan',
            'face_restore_model': 'CodeFormer',
            'no_smooth': 'false',
            'only_mouth': 'false',
            'resize_factor': '1',
            'mouth_mask_dilatation': '15',
            'erode_face_mask': '15',
            'mask_blur': '15',
            'pad_top': '0',
            'pad_bottom': '0',
            'pad_left': '0',
            'pad_right': '0',
            'active_debug': 'false',
            'code_former_weight': '0.75'
          },
          headers: {
            'accept': 'application/json',
            'content-type': 'application/x-www-form-urlencoded'
            // 'Content-Type': 'multipart/form-data'
          }
        }
      );
      console.log(generatevideo.data);
      if (generatevideo.data == 'Success') {
        this.$swal({
          position: 'top-end',
          icon: 'success',
          title: "Video Generate Completly",
          showConfirmButton: false,
          timer: 4000
        });
        // location.reload();
        this.loading_progression = 100;
        this.changeVideo(fileuuid);
      } else {
        this.$swal({
          position: 'top-end',
          icon: 'error',
          title: "Video Generate Fail",
          showConfirmButton: false,
          timer: 4000
        });
        this.loading_progression = 100;
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
        'http://aserious.tplinkdns.com:8080/infer',
        form,
        {
          params: {
            'spk_list': 'landis',
            'model_path': "/home/seriousco/Desktop/spk_list/audio/" + this.speaker.name
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