<template>
    <v-navigation-drawer
          v-model="drawer"
          permanent
          :rail="rail"
          @click="rail = false"
          :width="300"
          class="pa-2"
          style="box-shadow: 0px 0px 15px 2px gray;"
          color="blue-darken-3"
        >
          <v-list-item>
          <v-img src="../../src/assets/image/humanclone_logo.jpeg" height="100%" class="pb-5"></v-img>
          </v-list-item>
  
          <v-divider></v-divider>
          <v-container>
            <h4>Ho Rui Xiang</h4>
            <text-h6>horuixiang@gmail.com (admin)</text-h6>
          </v-container>
          <v-divider></v-divider>
          <v-list density="default" nav>
            <v-list-item prepend-icon="mdi-developer-board" title="DASHBOARD" @click="this.$router.push('dashboard');">
              <!-- <v-btn variant="plain">
                Dashboard
              </v-btn> -->
            </v-list-item>
            <v-list-item prepend-icon="mdi-human-edit" title="HUMAN MODEL" @click="this.$router.push('humanmodel');">
            </v-list-item>
            <v-list-item prepend-icon="mdi-audio-input-xlr" title="SPEAKER MODEL" @click="this.$router.push('speakermodel');">
            </v-list-item>
            <v-list-item prepend-icon="mdi-video" title="GENERATED VIDEO" @click="this.$router.push('generatedmodel');">
            </v-list-item>
          </v-list>

          <v-divider></v-divider>
        
          <v-list-item prepend-icon="mdi-cogs">
            <v-btn variant="plain">
                Setting
              </v-btn>
            </v-list-item>
          <template v-slot:append>
            <div>
                <v-btn block color="indigo-darken-2 rounded-xl mb-5" variant="flat" prepend-icon="mdi-exit-to-app">
                Logout
                </v-btn>
            </div>
            </template>
    </v-navigation-drawer>
    <v-app-bar
      scroll-behavior="fade-image"
      scroll-threshold="442"
      image="https://picsum.photos/1920/1080?random"
    >
    <v-app-bar-nav-icon variant="text" color="white" @click.stop="rail = !rail"></v-app-bar-nav-icon>
      <v-container color="blue-darken-4">
        <v-spacer></v-spacer>
          <p class="text-h4 text-white"><b>{{ title }}</b></p>
        <v-spacer></v-spacer>
      </v-container>
    </v-app-bar>
</template>
<script>
  export default {
    props: ['title'],
    data () {
      return {
        drawer: true,
        rail: false,
      }
    },
    
  }
</script>