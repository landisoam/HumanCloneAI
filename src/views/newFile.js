import { defineComponent } from 'vue';
import { supabase } from './lib/supabaseClient';
import { supabase } from './AppMusicUploader.vue';

export default defineComponent({
methods: {
async gettest() {
const { data } = await supabase.from('countries').select();
console.log(data);
}
},
components: {
ApplicationNav
},
mounted: {
gettest();
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
