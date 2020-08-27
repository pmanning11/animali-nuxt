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
                v-if="data"
                v-show="isSidebarActiveLocal"
                class="w-screen max-w-md z-50"
            >
                <div
                    class="h-full flex flex-col bg-white shadow-xl overflow-y-scroll"
                >
                    <!-- <header class -->
                    <!-- Main -->
                    <div>
                        <div class="pb-1 sm:pb-6">
                            <div class="space-y-6">
                                <div class="relative h-40 sm:h-56">
                                    <div
                                        class="absolute z-50 top-0 left-0 cursor-pointer"
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
                                    <img
                                        v-if="encounterImages.length > 0"
                                        :src="encounterImages[0]"
                                        class="absolute w-full h-full object-cover"
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
                                </div>
                                <div
                                    class="px-4 space-y-6 sm:-mt-8 sm:flex sm:items-end sm:px-6 sm:space-x-6"
                                >
                                    <div class="space-y-5 sm:flex-1">
                                        <div>
                                            <div
                                                class="flex items-center space-x-2.5"
                                            >
                                                <h3
                                                    class="font-bold text-xl leading-7 text-gray-900 sm:text-2xl sm:leading-8"
                                                >
                                                    {{
                                                        this.data
                                                            .contributorName
                                                    }}
                                                </h3>
                                            </div>
                                            <p
                                                class="text-sm leading-5 text-gray-500"
                                            >
                                                Contributor
                                            </p>
                                        </div>
                                        <!-- <div class="flex flex-wrap">
                                            <span
                                                class="flex-shrink-0 w-full inline-flex rounded-md shadow-sm sm:flex-1"
                                            >
                                                <button
                                                    type="button"
                                                    class="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
                                                >
                                                    Message
                                                </button>
                                            </span>
                                            <span
                                                class="mt-3 flex-1 w-full inline-flex rounded-md shadow-sm sm:mt-0 sm:ml-3"
                                            >
                                                <button
                                                    type="button"
                                                    class="w-full inline-flex items-center justify-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150"
                                                >
                                                    Call
                                                </button>
                                            </span>
                                            <span
                                                class="mt-3 ml-3 inline-flex rounded-md shadow-sm sm:mt-0"
                                            >
                                                <div
                                                    class="relative inline-block text-left"
                                                >
                                                    <button
                                                        type="button"
                                                        class="inline-flex items-center p-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-400 bg-white hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150"
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
                                            </span>
                                        </div> -->
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="px-4 pt-5 pb-5 sm:px-0 sm:pt-0">
                            <dl class="space-y-8 px-4 sm:px-6 sm:space-y-6">
                                <div class="space-y-1">
                                    <dt
                                        class="text-sm leading-5 font-medium text-gray-500 sm:w-40 sm:flex-shrink-0"
                                    >
                                        Date
                                    </dt>
                                    <dd
                                        class="text-sm leading-5 text-gray-900 sm:col-span-2"
                                    >
                                        <p>
                                            {{ formattedDate }}
                                        </p>
                                    </dd>
                                </div>
                                <div class="space-y-1">
                                    <dt
                                        class="text-sm leading-5 font-medium text-gray-500 sm:w-40 sm:flex-shrink-0"
                                    >
                                        Location
                                    </dt>
                                    <dd
                                        class="text-sm leading-5 text-gray-900 sm:col-span-2"
                                    >
                                        <p>{{ formattedLocation }}</p>
                                    </dd>
                                </div>
                                <div class="space-y-1">
                                    <dt
                                        class="text-sm leading-5 font-medium text-gray-500 sm:w-40 sm:flex-shrink-0"
                                    >
                                        Injury
                                    </dt>
                                    <dd
                                        class="text-sm leading-5 text-gray-900 sm:col-span-2"
                                    >
                                        <p>
                                            {{
                                                this.data.injury ? 'Yes' : 'No'
                                            }}
                                        </p>
                                    </dd>
                                </div>
                                <div class="space-y-1">
                                    <dt
                                        class="text-sm leading-5 font-medium text-gray-500 sm:w-40 sm:flex-shrink-0"
                                    >
                                        Notes
                                    </dt>
                                    <dd
                                        class="text-sm leading-5 text-gray-900 sm:col-span-2"
                                    >
                                        <p>
                                            {{ this.data.notes }}
                                        </p>
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
            encounterImages: []
        }
    },

    watch: {
        encounterId() {
            this.getEncounterImages()
        }
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

        encounterId() {
            return this.data.encounterId
        },

        formattedDate() {
            if (this.data.timestamp)
                return this.$moment(this.data.timestamp.seconds * 1000).format(
                    'll'
                )
            return 'n/a'
        },

        formattedLocation() {
            if (this.data.location) {
                return `${this.data.location.latitude}, ${this.data.location.longitude}`
            }
            return 'n/a'
        }
    },

    methods: {
        // Get the Encounter Images
        async getEncounterImages() {
            // Reference to the encounter storage
            const encounterRef = this.$fireStorage.ref(
                `animals/${this.$route.params.id}/encounters/${this.encounterId}`
            )

            // Reset the encounterImages to [] after changing views
            this.encounterImages = []

            // Get a list of all the images in the encounter
            const encounterImgs = await encounterRef.listAll()

            // For each encounter - get the url and push to encounterImages array
            await encounterImgs.items.forEach(async imageRef => {
                const image = await imageRef.getDownloadURL()
                this.encounterImages.push(image)
            })
        }
    }
}
</script>

<style scoped></style>
