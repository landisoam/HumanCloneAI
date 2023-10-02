import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
// main.js
// import 'material-design-icons-iconfont/dist/material-design-icons.css'
// // app.js
import '@mdi/font/css/materialdesignicons.css'
import VueTheMask from 'vue-the-mask'
import VueVideoPlayer from 'vue-video-player'

// require videojs style
import 'video.js/dist/video-js.css'
// import 'vue-video-player/src/custom-theme.css'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
// Axios
import axios from 'axios'
import VueAxios from 'vue-axios'
// Date
import DateFormat from '@voidsolutions/vue-dateformat'
import AudioPlayer from '@liripeng/vue-audio-player'
//



const vuetify = createVuetify({
  components,
  directives,
  iconfont: 'mdi'
})

const options = {
  confirmButtonColor: '#41b882',
  cancelButtonColor: '#ff7674',
};

loadFonts()


createApp(App)
  .use(router)
  .use(vuetify)
  .use(VueTheMask)
  .use(VueVideoPlayer)
  .use(VueAxios, axios)
  .use(DateFormat)
  .use(AudioPlayer)
  // .use(BootstrapVue)
  // .use(IconsPlugin)
  .use(VueSweetalert2, options)
  .mount('#app')
