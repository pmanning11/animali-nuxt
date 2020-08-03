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
          v-for="(encounter, index) in encounter_data"
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
    AnimalSidebar,
  },

  data() {
    return {
      mapOptions: {
        styles: mapStyle,
        streetViewControl: false,
        mapTypeControl: false,
        fullscreenControlOptions: {
          position: 6,
        },
        zoomControlOptions: {
          position: 6,
        },
      },
      center: { lat: 47.3763, lng: 8.5475 },
      infoContent: '',
      infoWindowPos: null,
      infoWinOpen: false,
      currentMidx: null,
      //optional: offset infowindow so it visually sits nicely on top of our marker
      infoOptions: {
        pixelOffset: { width: 0, height: -35 },
      },
      encounter_data: [],
      animalSidebar: false,
      sidebarData: {},
    }
  },

  watch: {
    encounter_data() {
      const encounters = this.encounter_data
      const length = encounters.length
      let totalLat = 0
      let totalLng = 0
      encounters.map((encounter) => {
        totalLat += encounter.location.latitude
        totalLng += encounter.location.longitude
      })
      const newLat = totalLat / length
      const newLng = totalLng / length
      const newCenter = { lat: newLat, lng: newLng }
      this.center = newCenter
    },
  },

  computed: {
    encounters() {
      return this.encounter_data
    },
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

    toggleAnimalSidebar() {
      this.animalSidebar = !this.animalSidebar
    },

    expandSidebar(encounter) {
      const center = {
        lat: encounter.location.latitude,
        lng: encounter.location.longitude,
      }
      this.center = center
      this.sidebarData = encounter
      this.animalSidebar = true
    },

    fetch_encounter_data(programId) {
      const animalsRef = this.$fireStore
        .collection('animals')
        .where('managedBy', '==', programId)

      animalsRef
        .get()
        .then((querySnapshot) => {
          const encounters = []
          querySnapshot.forEach((doc) => {
            this.$fireStore
              .collection('animals')
              .doc(doc.id)
              .collection('encounters')
              .get()
              .then((snapshot) => {
                snapshot.forEach((encounter) => {
                  const singleEncounter = encounter.data()
                  singleEncounter.id = doc.id
                  encounters.push(singleEncounter)
                })
              })
              .catch((err) => {
                console.log(err)
              })
            this.encounter_data = encounters
          })
        })
        .catch(function(error) {
          console.log('Error getting encounters:', error)
        })
    },
  },

  created() {
    const programId = this.$store.state.user.programId

    // Find animals "managedBy" == programId
    // Get those animals encounters and push into this.encounter_data
    this.fetch_encounter_data(programId)
  },
}
</script>

<style>
#the-map {
  position: relative;
  overflow: hidden;
  z-index: 1000;
}
</style>
