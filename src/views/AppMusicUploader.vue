<style>
.four-cols {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
}
</style>
<template>
    <ApplicationNav />
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
    <v-container>
        <v-card class="">
            <v-container>
                <v-card class="mx-auto px-6 py-8 my-9 elevation-5" max-width="344">
                    <v-form v-model="form" @submit.prevent="onSubmit">
                        <text-h6>Music Name :</text-h6>
                        <v-text-field v-model="email" :readonly="loading" :rules="[required]" class="mb-2 my-6" clearable variant="solo-filled"
                            label="Music Name"></v-text-field>
                            <!-- <text-h6>Music file :</text-h6> -->
                            <v-divider></v-divider>
                            <v-file-input
                            chips
                            multiple
                            label="File input" variant="underlined"
                            class="my-2"
                            ></v-file-input>
                        <v-btn :disabled="!form" :loading="loading" block color="success" size="large" type="submit"
                            variant="elevated">
                            Upload Music
                        </v-btn>
                    </v-form>
                </v-card>
            </v-container>
        </v-card>
    </v-container>
    <v-container fluid>
        <v-card>
            <v-table class="my-6 mx-6">
    <thead>
      <tr>
        <th class="text-left">
          Name
        </th>
        <th class="text-left">
          Calories
        </th>
        <th class="text-left">
          Active
        </th>
        <th class="text-left">
          Created On
        </th>
        <th class="text-left">
          Image
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="item in musics"
        :key="item.name"
      >
            <td>{{ item.music_name }}</td>
            <td>{{ item.music_singby }}</td>
            <td>{{ item.music_active.toString() }}</td>
            <td>{{ item.created_at }}</td>
            <td>{{ item.music_img }}</td>
        </tr>
        </tbody>
    </v-table>
        </v-card>
    </v-container>
</template>
<script>
import 'video.js/dist/video-js.css'
// import { videoPlayer } from 'vue-video-player'
import { defineComponent } from 'vue'
// import { VideoPlayer } from '@videojs-player/vue'
import 'video.js/dist/video-js.css'
// import { supabase } from '../supabase'
import ApplicationNav from '../components/application/ApplicationNav.vue'
import { createClient } from '@supabase/supabase-js'
export const supabase = createClient('http://aserious.tplinkdns.com:54321', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImV4cCI6MTk4MzgxMjk5Nn0.EGIM96RAZx35lJzdJsyH-qQwv8Hdp7fsn3W0YpN81IU')
// import { ref, onMounted } from 'vue'
// import { supabase } from './lib/supabaseClient'

export default defineComponent({
    methods: {
        async getmusic() {
            const { data } = await supabase.from('Music').select();
            this.musics = data;
            console.log(data)
        }

    },
    components: {
        ApplicationNav,
    },
    mounted() {
        this.getmusic()
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
        musics: [],
    })

});
</script>