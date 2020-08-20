<template>
    <section class="absolute inset-y-0 right-0 pl-10 max-w-full flex sm:pl-16">
        <transition
            enter-active-class="transform transition ease-in-out duration-500 sm:duration-700"
            enter-class="translate-x-full"
            enter-to-class="translate-x-0"
            leave-active-class="transform transition ease-in-out duration-500 sm:duration-700"
            leave-class="translate-x-0"
            leave-to-class="translate-x-full"
        >
            <div
                v-if="animalData"
                v-show="isSidebarActiveLocal"
                class="w-screen max-w-2xl z-50"
            >
                <div
                    class="h-full flex flex-col bg-white shadow-xl overflow-y-scroll"
                >
                    <!-- <header class="px-4 py-6 sm:px-6">
                        <div class="flex items-start justify-between space-x-3">
                            <h2
                                class="text-lg leading-7 font-medium text-gray-900"
                            >
                                Animal Profile
                            </h2>
                            <div class="h-7 flex items-center">
                                <button
                                    aria-label="Close panel"
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
                    </header> -->
                    <!-- Main -->
                    <div class="divide-y divide-gray-200">
                        <div class="pb-6">
                            <div
                                class="bg-teal-700 h-24 sm:h-20 lg:h-28 relative"
                            >
                                <div
                                    class="absolute top-0 right-6 cursor-pointer"
                                >
                                    <button
                                        aria-label="Close panel"
                                        @click.stop="
                                            isSidebarActiveLocal = false
                                        "
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
                            </div>
                            <div
                                class="-mt-12 flow-root px-4 space-y-6 sm:-mt-8 sm:flex sm:items-end sm:px-6 sm:space-x-6 lg:-mt-15"
                            >
                                <div>
                                    <div class="-m-1 flex">
                                        <div
                                            class="z-10 inline-flex rounded-lg overflow-hidden border-4 border-white"
                                        >
                                            <img
                                                v-if="animalData.profile_pic"
                                                :src="animalData.profile_pic"
                                                :alt="animalData.name"
                                                class="flex-shrink-0 object-cover h-24 w-24 sm:h-40 sm:w-40 lg:w-48 lg:h-48"
                                            />
                                            <div
                                                v-else
                                                class="flex-shrink-0 bg-gray-200 h-24 w-24 sm:h-40 sm:w-40 lg:w-48 lg:h-48"
                                            >
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
                                        </div>
                                    </div>
                                </div>
                                <div class="space-y-5 sm:flex-1">
                                    <div>
                                        <div
                                            class="flex items-center space-x-2.5"
                                        >
                                            <h3
                                                class="font-bold text-xl leading-7 text-gray-900 sm:text-2xl sm:leading-8"
                                            >
                                                {{ animalData.name }}
                                            </h3>
                                            <img
                                                v-if="animalData.sex === 'male'"
                                                src="@/assets/images/male.svg"
                                                alt="male"
                                                class="pr-2 h-5"
                                            />
                                            <img
                                                v-else
                                                src="@/assets/images/female.svg"
                                                alt="female"
                                                class="pr-2 h-5"
                                            />
                                        </div>
                                        <p
                                            class="text-sm leading-5 text-gray-500"
                                        >
                                            {{ animalData.id }}
                                        </p>
                                    </div>
                                    <div class="flex flex-wrap">
                                        <span
                                            class="flex-shrink-0 w-full inline-flex rounded-md shadow-sm sm:flex-1"
                                        >
                                            <button
                                                type="button"
                                                class="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-teal-500 hover:bg-primary focus:outline-none focus:border-teal-700 focus:shadow-outline-teal active:bg-secondary transition ease-in-out duration-150"
                                                @click="
                                                    goToAnimal(animalData.id)
                                                "
                                            >
                                                View Animal
                                            </button>
                                        </span>
                                        <span
                                            class="mt-3 flex-1 w-full inline-flex rounded-md shadow-sm sm:mt-0 sm:ml-3"
                                        >
                                            <NuxtLink
                                                to="/add-encounter"
                                                class="w-full inline-flex items-center justify-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150"
                                            >
                                                Add Encounter
                                            </NuxtLink>
                                        </span>
                                        <!-- <span
                                            class="mt-3 ml-3 inline-flex rounded-md shadow-sm sm:mt-0"
                                        >
                                            <div
                                                class="relative inline-block text-left"
                                            >
                                                <button
                                                    type="button"
                                                    class="inline-flex items-center p-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-400 bg-white hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150"
                                                    @click.stop="
                                                        isAnimalActionSheetOpen = !isAnimalActionSheetOpen
                                                    "
                                                >
                                                    <svg
                                                        class="h-5 w-5"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                    >
                                                        <path
                                                            d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"
                                                        />
                                                    </svg>
                                                </button>

                                                <transition
                                                    enter-active-class="transition ease-out duration-100"
                                                    enter-class="transform opacity-0 scale-95"
                                                    enter-to-class="transform opacity-100 scale-100"
                                                    leave-active-class="transition ease-in duration-75"
                                                    leave-class="transform opacity-100 scale-100"
                                                    leave-to-class="transform opacity-0 scale-95"
                                                >
                                                    <div
                                                        v-show="
                                                            isAnimalActionSheetOpen
                                                        "
                                                        class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg"
                                                    >
                                                        <div
                                                            class="rounded-md bg-white shadow-xs"
                                                        >
                                                            <div
                                                                class="py-1"
                                                                role="menu"
                                                                aria-orientation="vertical"
                                                                aria-labelledby="options-menu"
                                                            >
                                                                <a
                                                                    href="#"
                                                                    class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                                                                    role="menuitem"
                                                                    >View
                                                                    profile</a
                                                                >
                                                                <a
                                                                    href="#"
                                                                    class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                                                                    role="menuitem"
                                                                    >Copy
                                                                    profile
                                                                    link</a
                                                                >
                                                            </div>
                                                        </div>
                                                    </div>
                                                </transition>
                                            </div>
                                        </span> -->
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="px-4 py-5 sm:px-0 sm:py-0">
                            <dl class="space-y-8 sm:space-y-0">
                                <div
                                    class="sm:flex sm:space-x-6 sm:px-6 sm:py-5"
                                >
                                    <dt
                                        class="text-sm leading-5 font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-48"
                                    >
                                        Total Encounters
                                    </dt>
                                    <dd
                                        class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2"
                                    >
                                        <p>
                                            {{ animalData.totalEncounters }}
                                        </p>
                                    </dd>
                                </div>
                                <div
                                    class="sm:flex sm:space-x-6 sm:border-t sm:border-gray-200 sm:px-6 sm:py-5"
                                >
                                    <dt
                                        class="text-sm leading-5 font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-48"
                                    >
                                        Length/Height
                                    </dt>
                                    <dd
                                        class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2"
                                    >
                                        {{ animalData.length }} cm
                                    </dd>
                                </div>
                                <div
                                    class="sm:flex sm:space-x-6 sm:border-t sm:border-gray-200 sm:px-6 sm:py-5"
                                >
                                    <dt
                                        class="text-sm leading-5 font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-48"
                                    >
                                        Weight
                                    </dt>
                                    <dd
                                        class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2"
                                    >
                                        {{ animalData.weight }} kg
                                    </dd>
                                </div>
                                <div
                                    class="sm:flex sm:space-x-6 sm:border-t sm:border-gray-200 sm:px-6 sm:py-5"
                                >
                                    <dt
                                        class="text-sm leading-5 font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-48"
                                    >
                                        Status
                                    </dt>
                                    <dd
                                        class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2"
                                    >
                                        {{ animalData.status }}
                                    </dd>
                                </div>
                            </dl>
                        </div>
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
            required: true
        },
        data: {
            type: Object,
            default: () => {}
        }
    },

    data() {
        return {
            animalId: null,
            encounterLocation: {},
            animalImg: null,
            isAnimalActionSheetOpen: false
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
            }
        },

        animalData() {
            const animal = this.$store.state.animals.find(doc => {
                return doc.id === this.data.animalId
            })
            return animal
        }
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
                .then(url => {
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
        }
    }
}
</script>

<style scoped></style>
