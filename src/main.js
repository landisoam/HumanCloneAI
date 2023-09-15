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



const vuetify = createVuetify({
  components,
  directives,
  iconfont: 'mdi'
})

loadFonts()

createApp(App)
  .use(router)
  .use(vuetify)
  // .use(VueVideoPlayer)
  .mount('#app')
