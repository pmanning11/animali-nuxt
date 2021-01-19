import Vue from 'vue'
import * as VueGoogleMaps from '@/node_modules/vue2-google-maps'
import GmapCluster from '@/node_modules/vue2-google-maps/dist/components/cluster' // replace src with dist if you have Babel issues

Vue.use(VueGoogleMaps, {
    load: {
        // Add your API key here
        key: 'AIzaSyB0FgK0XakPOthGwHwEzsx7YYy5AC8Oclo',
        libraries: 'places' // This is required if you use the Auto complete plug-in
    }
})
Vue.component('GmapCluster', GmapCluster)
