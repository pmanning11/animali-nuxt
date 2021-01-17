import Vue from 'vue'

// import * as VueGoogleMaps from "@/node_modules/vue2-google-maps";

// Vue.use(VueGoogleMaps, {
//   load: { key: process.env.VUE_APP_GOOGLE_MAPS_API_KEY }
// });

// Google Maps
import * as VueGoogleMaps from '@/node_modules/vue2-google-maps'
Vue.use(VueGoogleMaps, {
    load: {
        // Add your API key here
        // key: 'AIzaSyCc4mj6ZFm58kvFIbiUszAI5fAsDAMHBeE',
        // key: process.env.GOOGLE_MAPS_API_KEY,
        key: $nuxt.$config.googleMapsApiKey,
        libraries: 'places' // This is required if you use the Auto complete plug-in
    }
})
import GmapCluster from '@/node_modules/vue2-google-maps/dist/components/cluster' // replace src with dist if you have Babel issues
Vue.component('GmapCluster', GmapCluster)
