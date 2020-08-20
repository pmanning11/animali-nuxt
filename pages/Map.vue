<template>
    <div ref="theMap" id="the-map">
        <AnimalSidebar
            :isSidebarActive="animalSidebar"
            @closeSidebar="toggleAnimalSidebar"
            :data="sidebarData"
        />
        <GmapMap
            :center="center"
            :zoom="5"
            :options="mapOptions"
            style="width: 100%; height: calc(100vh - 64px)"
        >
            <GmapCluster :zoomOnClick="true">
                <GmapMarker
                    v-for="(encounter, index) in encounterData"
                    :key="index"
                    :position="latLng(encounter)"
                    :clickable="true"
                    @click="expandSidebar(encounter)"
                ></GmapMarker>
            </GmapCluster>
        </GmapMap>
    </div>
</template>

<script>
import AnimalSidebar from '../components/AnimalSidebar'
import mapStyle from '@/assets/map-styles'

export default {
    components: {
        AnimalSidebar
    },

    data() {
        return {
            mapOptions: {
                styles: mapStyle,
                streetViewControl: false,
                mapTypeControl: false,
                fullscreenControlOptions: {
                    position: 6
                },
                zoomControlOptions: {
                    position: 6
                }
            },
            center: { lat: 47.3763, lng: 8.5475 },
            infoContent: '',
            infoWindowPos: null,
            infoWinOpen: false,
            currentMidx: null,
            //optional: offset infowindow so it visually sits nicely on top of our marker
            infoOptions: {
                pixelOffset: { width: 0, height: -35 }
            },

            animalSidebar: false,
            sidebarData: {}
        }
    },

    watch: {
        encounterData() {
            const encounters = this.encounterData
            const length = encounters.length
            let totalLat = 0
            let totalLng = 0
            encounters.map(encounter => {
                totalLat += encounter.location.latitude
                totalLng += encounter.location.longitude
            })
            const newLat = totalLat / length
            const newLng = totalLng / length
            const newCenter = { lat: newLat, lng: newLng }
            this.center = newCenter
        }
    },

    computed: {
        encounterData() {
            return this.$store.state.encounters
        }
    },

    methods: {
        latLng(encounter) {
            const position = {}
            const lat = encounter.location.latitude
            const lng = encounter.location.longitude
            position.lat = lat
            position.lng = lng
            return position
        },

        reCenter() {
            const encounters = this.encounterData
            const length = encounters.length
            let totalLat = 0
            let totalLng = 0
            encounters.map(encounter => {
                totalLat += encounter.location.latitude
                totalLng += encounter.location.longitude
            })
            const newLat = totalLat / length
            const newLng = totalLng / length
            const newCenter = { lat: newLat, lng: newLng }
            this.center = newCenter
        },

        toggleAnimalSidebar() {
            this.animalSidebar = !this.animalSidebar
        },

        expandSidebar(encounter) {
            // Move the center
            // const center = {
            //     lat: encounter.location.latitude,
            //     lng: encounter.location.longitude
            // }
            // this.center = center
            this.sidebarData = encounter
            this.animalSidebar = true
        }
    },

    mounted() {
        this.reCenter()
    }
}
</script>

<style>
#the-map {
    position: relative;
    overflow: hidden;
    z-index: 1000;
}
</style>
