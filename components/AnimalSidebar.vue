<template>
  <section
    class="absolute inset-y-0 right-0 pl-10 max-w-full flex z-50"
    v-if="data"
  >
    <transition
      enter-active-class="transform transition ease-in-out duration-500 sm:duration-700"
      enter-class="translate-x-full"
      enter-to-class="translate-x-0"
      leave-active-class="transform transition ease-in-out duration-500 sm:duration-700"
      leave-class="translate-x-0"
      leave-to-class="translate-x-full"
    >
      <div class="w-screen max-w-md z-" v-show="isSidebarActiveLocal">
        <div
          class="h-full divide-y divide-gray-200 flex flex-col bg-white shadow-xl"
        >
          <div class="h-0 flex-1 py-6 space-y-6 overflow-y-scroll">
            <header class="px-4 sm:px-6">
              <div class="flex items-start justify-between space-x-3">
                <h2 class="text-lg leading-7 font-medium text-gray-900">
                  Panel title
                </h2>
                <div class="h-7 flex items-center">
                  <button
                    aria-label="Close panel"
                    @click.stop="isSidebarActiveLocal = false"
                    class="text-gray-400 hover:text-gray-500 transition ease-in-out duration-150"
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
              </div>
            </header>
            <div class="relative flex-1 px-4 sm:px-6">
              <div class="pt-8 px-6 flex justify-between">
                <div class="flex">
                  <img
                    v-if="animalData.sex === 'male'"
                    src="@/assets/images/male.svg"
                    alt="male"
                    class="pr-2"
                  />
                  <img
                    v-else
                    src="@/assets/images/female.svg"
                    alt="female"
                    class="pr-2"
                  />

                  <div class="flex-col">
                    <h2>{{ animalData.name }}</h2>
                    <p>{{ animalData.id }}</p>
                  </div>
                </div>

                <div class="flex-col">
                  <p>{{ animalData.length }} cm</p>
                  <p>{{ animalData.weight }} kg</p>
                </div>
              </div>

              <vs-divider class="mt-8"></vs-divider>

              <div class="flex justify-between px-6">
                <h3>Total Encounters</h3>
                <h4>{{ animalData.totalEncounters }}</h4>
              </div>

              <vs-divider class="mb-8"></vs-divider>

              <div class="flex justify-between px-6">
                <h3>Last Encounter</h3>
                <h4>{{ animalData.totalEncounters }}</h4>
              </div>
            </div>
          </div>
          <div class="flex-shrink-0 px-4 py-4 space-x-4 flex justify-end">
            <span class="inline-flex rounded-md shadow-sm">
              <button
                type="button"
                @click.stop="isSidebarActiveLocal = false"
                class="py-2 px-4 border border-gray-300 rounded-md text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out"
              >
                Cancel
              </button>
            </span>
            <span class="inline-flex rounded-md shadow-sm">
              <button
                type="submit"
                class="inline-flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
              >
                Save
              </button>
            </span>
          </div>
        </div>
      </div>
    </transition>
  </section>

  <!-- Add hidden-background if you want the map to be moveable -->
  <!-- has issues tho -->
  <!-- <vs-sidebar
    hidden-background
    click-not-close
    position-right
    :parent="$refs.theMap"
    default-index="1"
    color="primary"
    class="animal-sidebar items-no-padding"
    spacer
    v-model="isSidebarActiveLocal"
  >
    <div class="relative h-64">
      <img :src="animalData.profile_pic" class="w-full h-full object-cover" />
      <div class="absolute top-0 left-0 cursor-pointer">
        <feather-icon
          icon="XIcon"
          @click.stop="isSidebarActiveLocal = false"
          class="cursor-pointer bg-white shadow-md p-1 mt-4 ml-4 rounded-full"
        ></feather-icon>
      </div>
    </div>
    <vs-divider class="m-0"></vs-divider>

    
    <component
      :is="scrollbarTag"
      class="scroll-area--data-list-add-new"
      :settings="settings"
      :key="$vs.rtl"
    >
      
      <div class="pt-8 px-6 flex justify-between">
        <div class="flex">
          <img
            v-if="animalData.sex === 'male'"
            src="@/assets/images/male.svg"
            alt="male"
            class="pr-2"
          />
          <img
            v-else
            src="@/assets/images/female.svg"
            alt="female"
            class="pr-2"
          />

          <div class="flex-col">
            <h2>{{ animalData.name }}</h2>
            <p>{{ animalData.id }}</p>
          </div>
        </div>

        <div class="flex-col">
          <p>{{ animalData.length }} cm</p>
          <p>{{ animalData.weight }} kg</p>
        </div>
      </div>

      <vs-divider class="mt-8"></vs-divider>

      <div class="flex justify-between px-6">
        <h3>Total Encounters</h3>
        <h4>{{ animalData.totalEncounters }}</h4>
      </div>

      <vs-divider class="mb-8"></vs-divider>

      <div class="flex justify-between px-6">
        <h3>Last Encounter</h3>
        <h4>{{ animalData.totalEncounters }}</h4>
      </div>
    </component>

    <div class="flex flex-wrap items-center p-6" slot="footer">
      <router-link :to="`/animal/view/${this.data.id}`">
        <vs-button class="mr-6">View Animal</vs-button>
      </router-link>
    </div>
  </vs-sidebar> -->
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
      animalImg: null,
    }
  },

  watch: {
    isSidebarActive(val) {
      if (!val) return
      if (Object.entries(this.data).length === 0) {
        this.initValues()
      } else {
        const { id, location } = JSON.parse(JSON.stringify(this.data))
        // this.getAnimalData(id)
        this.animalId = id
        this.encounterLocation = location
        this.initValues()
      }
      // Object.entries(this.data).length === 0 ? this.initValues() : { this.dataId, this.dataName, this.dataCategory, this.dataOrder_status, this.dataPrice } = JSON.parse(JSON.stringify(this.data))
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

    animalData() {
      const animal = this.$store.state.animals.find((doc) => {
        return doc.id === this.data.id
      })
      return animal
      // return this.$store.state.animals.animals
    },
  },

  methods: {
    initValues() {
      if (this.data.id) return
      this.animalId = null
      this.encounterLocation = {}
    },

    getAnimalImage(animalId) {
      // Get animal profile pic
      const animalProfileRef = this.$fireStorage.ref(
        `animals/${animalId}/profile_pic.jpg`
      )
      animalProfileRef
        .getDownloadURL()
        .then((url) => {
          this.animalImg = url
        })
        .catch(function(error) {
          console.log(error)
          // A full list of error codes is available at
          // https://firebase.google.com/docs/storage/web/handle-errors
          switch (error.code) {
            case 'storage/object-not-found':
              // File doesn't exist
              break
            case 'storage/unauthorized':
              // User doesn't have permission to access the object
              break
            case 'storage/canceled':
              // User canceled the upload
              break
            case 'storage/unknown':
              // Unknown error occurred, inspect the server response
              break
          }
        })
    },
  },
}
</script>

<style scoped></style>
