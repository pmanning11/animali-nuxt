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
        v-if="animalData"
        v-show="isSidebarActiveLocal"
      >
        <div class="h-full flex flex-col bg-white shadow-xl">
          <div class="h-0 flex-1 overflow-y-scroll">
            <header class="relative h-64">
              <img
                v-if="animalData.profile_pic"
                :src="animalData.profile_pic"
                :alt="animalData.name"
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
              class="relative flex-1 px-6 py-4 space-y-6 divide-y divide-black divide-opacity-25"
            >
              <div class="flex justify-between">
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
                    <h2 class="text-2xl font-medium">{{ animalData.name }}</h2>
                    <p class="text-sm">{{ animalData.id }}</p>
                  </div>
                </div>

                <div class="flex-col">
                  <p class="text-lg ">{{ animalData.length }} cm</p>
                  <p class="text-lg">{{ animalData.weight }} kg</p>
                </div>
              </div>

              <div class="flex justify-between items-baseline pt-4">
                <p class="text-2xl font-light">Total Encounters</p>
                <p class="text-2xl font-bold">
                  {{ animalData.totalEncounters }}
                </p>
              </div>
            </div>
          </div>
          <div
            @click="goToAnimal(animalData.id)"
            class="cursor-pointer py-6 text-center text-xl text-white uppercase font-bold bg-teal-500 hover:bg-primary active:bg-secondary"
          >
            View Animal
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
      animalImg: null,
    }
  },

  watch: {
    // isSidebarActive(val) {
    // if (!val) return
    // if (Object.entries(this.data).length === 0) {
    //   this.initValues()
    // } else {
    //   const { id, location } = JSON.parse(JSON.stringify(this.data))
    //   // this.getAnimalData(id)
    //   this.animalId = id
    //   this.encounterLocation = location
    //   this.initValues()
    // }
    // Object.entries(this.data).length === 0 ? this.initValues() : { this.dataId, this.dataName, this.dataCategory, this.dataOrder_status, this.dataPrice } = JSON.parse(JSON.stringify(this.data))
    // },
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
    },
  },

  methods: {
    initValues() {
      if (this.data.id) return
      this.animalId = null
      this.encounterLocation = {}
    },

    goToAnimal(id) {
      this.$router.push(`/animal/view/${id}`)
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
