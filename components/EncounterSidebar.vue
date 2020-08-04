<template>
  <section class="absolute inset-y-0 right-0 pl-10 max-w-full flex">
    <transition
      enter-active-class="transform transition ease-in-out duration-500 sm:duration-700"
      enter-class="translate-x-full"
      enter-to-class="translate-x-0"
      leave-active-class="transform transition ease-in-out duration-500 sm:duration-700"
      leave-class="translate-x-0"
      leave-to-class="translate-x-full"
    >
      <div
        class="w-screen max-w-md z-50"
        v-if="data"
        v-show="isSidebarActiveLocal"
      >
        <div class="h-full flex flex-col bg-white shadow-xl">
          <div class="h-0 flex-1 overflow-y-scroll">
            <header class="relative h-64">
              <img
                v-if="encounterImages.length > 0"
                :src="encounterImages[0]"
                class="w-full h-full object-cover"
              />
              <div v-else class="bg-gray-200 h-full">
                <svg
                  class="animate-spin h-full w-8 m-auto text-primary"
                  viewBox="0 0 24 24"
                >
                  <path
                    class="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              </div>
              <div class="absolute top-0 left-0 cursor-pointer">
                <button
                  aria-label="Close panel"
                  @click.stop="isSidebarActiveLocal = false"
                  class="cursor-pointer bg-white shadow-md p-1 mt-4 ml-4 rounded-full focus:outline-none focus:bg-opacity-75"
                >
                  <svg
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </header>
            <div
              class="relative flex-1 px-6 py-4 space-y divide-y divide-black divide-opacity-25"
            >
              <div class="flex justify-between items-center">
                <h3 class="text-2xl font-semibold">Date</h3>
                <!-- <p class="text-lg">{{ formattedDate }}</p> -->
              </div>

              <div class="flex justify-between items-center">
                <h3 class="text-2xl font-semibold">Coordinates</h3>
                <!-- <p>{{ formattedLocation }}</p> -->
              </div>

              <div class="flex justify-between items-center">
                <h3 class="text-2xl font-semibold">Contributor</h3>
                <p class="text-lg">{{ this.data.contributorName }}</p>
              </div>

              <div class="flex justify-between items-center">
                <h3 class="text-2xl font-semibold">Injury</h3>
                <p class="text-lg">{{ this.data.injury ? 'Yes' : 'No' }}</p>
              </div>

              <div class="justify-between">
                <h3 class="text-2xl font-semibold pb-2">Notes</h3>
                <p class="pb-12 text-lg">{{ this.data.notes }}</p>
              </div>
            </div>
          </div>
          <div
            @click.stop="isSidebarActiveLocal = false"
            class="cursor-pointer py-6 text-center text-xl text-white uppercase font-bold bg-teal-500 hover:bg-primary active:bg-secondary"
          >
            Close
          </div>
        </div>
      </div>
    </transition>
  </section>
</template>

<script>
export default {
  props: {
    isSidebarActive: {
      type: Boolean,
      required: true,
    },
    data: {
      type: Object,
      default: () => {},
    },
  },

  data() {
    return {
      animalId: null,
      encounterLocation: {},
      encounterImages: [],
    }
  },

  watch: {
    encounterId() {
      this.getEncounterImages()
    },
  },

  computed: {
    isSidebarActiveLocal: {
      get() {
        return this.isSidebarActive
      },
      set(val) {
        if (!val) {
          this.$emit('closeSidebar')
          // this.$validator.reset()
          // this.initValues()
        }
      },
    },

    encounterId() {
      return this.data.id
    },

    // formattedDate() {
    //   if (this.data)
    //     return this.$moment(this.data.timestamp.seconds * 1000).format('ll')
    //   return 'n/a'
    // },

    // formattedLocation() {
    //   return `${this.data.location.latitude}, ${this.data.location.longitude}`
    // },
  },

  methods: {
    // Get the Encounter Images
    async getEncounterImages() {
      // Reference to the encounter storage
      const encounterRef = this.$fireStorage.ref(
        `animals/${this.$route.params.id}/encounters/${this.data.id}`
      )

      // Reset the encounterImages to [] after changing views
      this.encounterImages = []

      // Get a list of all the images in the encounter
      const encounterImgs = await encounterRef.listAll()

      // For each encounter - get the url and push to encounterImages array
      await encounterImgs.items.forEach(async (imageRef) => {
        const image = await imageRef.getDownloadURL()
        this.encounterImages.push(image)
      })
    },
  },
}
</script>

<style scoped></style>
