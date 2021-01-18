import Vue from 'vue'
// import * as VueGoogleMaps from "@/node_modules/vue2-google-maps";

// Google Maps
import * as VueGoogleMaps from '@/node_modules/vue2-google-maps'
Vue.use(VueGoogleMaps, {
    load: {
        // Add your API key here
        key: 'AIzaSyCc4mj6ZFm58kvFIbiUszAI5fAsDAMHBeE',
        libraries: 'places' // This is required if you use the Auto complete plug-in
    }
})
import GmapCluster from '@/node_modules/vue2-google-maps/dist/components/cluster' // replace src with dist if you have Babel issues
Vue.component('GmapCluster', GmapCluster)
