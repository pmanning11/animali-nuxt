<template>
    <main class="flex-1 relative z-0 overflow-y-auto">
        <!-- Page header -->
        <div class="bg-white shadow">
            <div class="px-4 sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
                <div
                    class="py-6 md:flex md:items-center md:justify-between lg:border-t lg:border-cool-gray-200"
                >
                    <div v-if="animal_data" class="flex-1 min-w-0">
                        <!-- Profile -->
                        <div class="flex items-center">
                            <img class="h-15 w-15 rounded-full" :src="animal_data.profile_pic" alt />

                            <div class="flex flex-col">
                                <div class="flex items-center">
                                    <h1
                                        class="ml-3 text-2xl font-bold leading-7 text-cool-gray-900 sm:leading-9 sm:truncate"
                                    >{{ animal_data.name }}</h1>
                                    <img
                                        v-if="animal_data.sex === 'male'"
                                        src="@/assets/images/male.svg"
                                        alt="male"
                                        class="pl-2 h-5"
                                    />
                                    <img
                                        v-else
                                        src="@/assets/images/female.svg"
                                        alt="female"
                                        class="pl-2 h-5"
                                    />
                                </div>

                                <dl class="mt-1 ml-3 flex flex-row">
                                    <dt class="sr-only">Company</dt>
                                    <dd
                                        class="flex items-center text-sm leading-5 text-cool-gray-500 font-medium capitalize mr-6"
                                    >{{ animal_data.id }}</dd>
                                    <dt class="sr-only">Account status</dt>
                                    <dd
                                        class="flex items-center text-sm leading-5 text-cool-gray-500 font-medium mr-6 capitalize"
                                    >
                                        <div
                                            class="flex items-center"
                                            v-if="
                                                animal_data.status === 'active'
                                            "
                                        >
                                            <span
                                                class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium leading-5 bg-teal-100 text-teal-800"
                                            >active</span>
                                        </div>
                                        <div
                                            v-else-if="
                                                animal_data.status ===
                                                    'deceased'
                                            "
                                            class="flex items-center"
                                        >
                                            <span
                                                class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium leading-5 bg-pink-100 text-pink-800"
                                            >deceased</span>
                                        </div>
                                        <div v-else>
                                            <span
                                                class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium leading-5 bg-orange-100 text-orange-800"
                                            >inactive</span>
                                        </div>
                                    </dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                    <div class="mt-6 flex space-x-3 md:mt-0 md:ml-4">
                        <span class="shadow-sm rounded-md">
                            <nuxt-link
                                to="/add-encounter"
                                class="inline-flex items-center px-4 py-2 border border-cool-gray-300 text-sm leading-5 font-medium rounded-md text-cool-gray-700 bg-white hover:text-cool-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:text-cool-gray-800 active:bg-cool-gray-50 transition duration-150 ease-in-out"
                            >Add Encounter</nuxt-link>
                        </span>
                        <span class="shadow-sm rounded-md">
                            <a
                                href="#track"
                                class="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-teal-600 hover:bg-teal-500 focus:outline-none focus:shadow-outline-teal focus:border-teal-700 active:bg-teal-700 transition duration-150 ease-in-out"
                            >View Track</a>
                        </span>
                    </div>
                </div>
            </div>
        </div>

        <div class="mt-8">
            <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <!-- Card -->

                    <div class="bg-white overflow-hidden shadow rounded-lg">
                        <div class="bg-white px-4 py-4 border-b border-gray-200 sm:px-6">
                            <h3 class="text-lg leading-6 font-medium text-gray-900">First Encounter</h3>
                        </div>

                        <div v-if="firstEncounter" class="p-5">
                            <div class="flex items-center">
                                <dl class="w-full">
                                    <div class="sm:flex sm:justify-between sm:px-6 sm:py-5">
                                        <dt
                                            class="text-sm leading-5 font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-48"
                                        >Date</dt>
                                        <dd
                                            class="mt-1 mb-2 text-sm leading-5 text-gray-900 sm:mt-0 sm:mb-0 sm:col-span-2"
                                        >
                                            <p>
                                                {{ $moment(
                                                firstEncounter.timestamp
                                                .seconds * 1000
                                                ).format('llll')}}
                                            </p>
                                        </dd>
                                    </div>
                                    <div class="sm:flex sm:justify-between sm:px-6 sm:py-5">
                                        <dt
                                            class="text-sm leading-5 font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-48"
                                        >Seen by</dt>
                                        <dd
                                            class="mt-1 mb-2 text-sm leading-5 text-gray-900 sm:mt-0 sm:mb-0 sm:col-span-2"
                                        >{{ firstEncounter.contributorName }}</dd>
                                    </div>
                                    <div class="sm:flex sm:justify-between sm:px-6 sm:py-5">
                                        <dt
                                            class="text-sm leading-5 font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-48"
                                        >Location</dt>
                                        <dd
                                            class="mt-1 mb-2 text-sm leading-5 text-gray-900 sm:mt-0 sm:mb-0 sm:col-span-2"
                                        >{{ `${firstEncounter.location.latitude}, ${firstEncounter.location.longitude}` }}</dd>
                                    </div>
                                    <div class="sm:px-6 sm:py-5 sm:border-t sm:border-gray-100">
                                        <dt
                                            class="text-sm leading-5 font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-48"
                                        >Notes</dt>
                                        <dd
                                            class="mt-1 mb-2 text-sm leading-5 text-gray-900 sm:mt-0 sm:mb-0 sm:col-span-2"
                                        >{{ firstEncounter.notes }}</dd>
                                    </div>
                                </dl>
                            </div>
                        </div>
                    </div>

                    <!-- Last Encounter -->
                    <div class="bg-white overflow-hidden shadow rounded-lg">
                        <div class="bg-white px-4 py-4 border-b border-gray-200 sm:px-6">
                            <h3 class="text-lg leading-6 font-medium text-gray-900">Last Encounter</h3>
                        </div>

                        <div v-if="lastEncounter" class="p-5">
                            <div class="flex items-center">
                                <dl class="w-full">
                                    <div class="sm:flex sm:justify-between sm:px-6 sm:py-5">
                                        <dt
                                            class="text-sm leading-5 font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-48"
                                        >Date</dt>
                                        <dd
                                            class="mt-1 mb-2 text-sm leading-5 text-gray-900 sm:mt-0 sm:mb-0 sm:col-span-2"
                                        >
                                            <p>
                                                {{ $moment(
                                                lastEncounter.timestamp
                                                .seconds * 1000
                                                ).format('llll')}}
                                            </p>
                                        </dd>
                                    </div>
                                    <div class="sm:flex sm:justify-between sm:px-6 sm:py-5">
                                        <dt
                                            class="text-sm leading-5 font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-48"
                                        >Seen by</dt>
                                        <dd
                                            class="mt-1 mb-2 text-sm leading-5 text-gray-900 sm:mt-0 sm:mb-0 sm:col-span-2"
                                        >{{ lastEncounter.contributorName }}</dd>
                                    </div>
                                    <div class="sm:flex sm:justify-between sm:px-6 sm:py-5">
                                        <dt
                                            class="text-sm leading-5 font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-48"
                                        >Location</dt>
                                        <dd
                                            class="mt-1 mb-2 text-sm leading-5 text-gray-900 sm:mt-0 sm:mb-0 sm:col-span-2"
                                        >{{ `${lastEncounter.location.latitude}, ${lastEncounter.location.longitude}` }}</dd>
                                    </div>
                                    <div class="sm:px-6 sm:py-5 sm:border-t sm:border-gray-100">
                                        <dt
                                            class="text-sm leading-5 font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-48"
                                        >Notes</dt>
                                        <dd
                                            class="mt-1 mb-2 text-sm leading-5 text-gray-900 sm:mt-0 sm:mb-0 sm:col-span-2"
                                        >{{ lastEncounter.notes }}</dd>
                                    </div>
                                </dl>
                            </div>
                        </div>
                    </div>

                    <!-- More cards... -->
                </div>
            </div>

            <h2
                class="max-w-6xl mx-auto mt-8 px-4 text-lg leading-6 font-medium text-cool-gray-900 sm:px-6 lg:px-8"
            >All Encounters</h2>

            <!-- Activity list (smallest breakopoint only) -->
            <div class="shadow sm:hidden">
                <ul class="mt-2 divide-y divide-cool-gray-200 overflow-hidden shadow sm:hidden">
                    <li v-for="(encounter, index) in encounterData" :key="index">
                        <a href="#" class="block px-4 py-4 bg-white hover:bg-cool-gray-50">
                            <div class="flex items-center space-x-4">
                                <div class="flex-1 flex space-x-2 truncate">
                                    <svg
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        class="flex-shrink-0 h-5 w-5 text-cool-gray-400"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                        />
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                    </svg>
                                    <div class="text-cool-gray-500 text-sm truncate">
                                        <p class="truncate">
                                            {{
                                            $moment(
                                            encounter.timestamp
                                            .seconds * 1000
                                            ).format('llll')
                                            }}
                                        </p>
                                        <p>
                                            <span class="text-cool-gray-900 font-medium">
                                                {{
                                                `${encounter.location.latitude}, ${encounter.location.longitude}`
                                                }}
                                            </span>
                                        </p>
                                        <p>{{ encounter.contributorName }}</p>
                                    </div>
                                </div>
                                <div class="flex flex-row items-center space-x-6">
                                    <span
                                        v-if="encounter.verified"
                                        aria-label="Verified"
                                        class="h-4 w-4 mx-auto bg-green-100 rounded-full flex items-center justify-center"
                                    >
                                        <span class="h-2 w-2 bg-green-400 rounded-full"></span>
                                    </span>
                                    <span
                                        v-else
                                        aria-label="Pending"
                                        class="h-4 w-4 mx-auto bg-gray-100 rounded-full flex items-center justify-center"
                                    >
                                        <span class="h-2 w-2 bg-gray-400 rounded-full"></span>
                                    </span>
                                    <svg
                                        class="flex-shrink-0 h-5 w-5 text-cool-gray-400"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </a>
                    </li>

                    <!-- More items... -->
                </ul>
                <nav
                    class="bg-white px-4 py-3 flex items-center justify-between border-t border-cool-gray-200"
                >
                    <div class="flex-1 flex justify-between">
                        <a
                            href="#"
                            class="relative inline-flex items-center px-4 py-2 border border-cool-gray-300 text-sm leading-5 font-medium rounded-md text-cool-gray-700 bg-white hover:text-cool-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-cool-gray-100 active:text-cool-gray-700 transition ease-in-out duration-150"
                        >Previous</a>
                        <a
                            href="#"
                            class="ml-3 relative inline-flex items-center px-4 py-2 border border-cool-gray-300 text-sm leading-5 font-medium rounded-md text-cool-gray-700 bg-white hover:text-cool-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-cool-gray-100 active:text-cool-gray-700 transition ease-in-out duration-150"
                        >Next</a>
                    </div>
                </nav>
            </div>

            <!-- Activity table (small breakopoint and up) -->
            <div class="hidden sm:block">
                <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="flex flex-col mt-2">
                        <div
                            class="align-middle min-w-full overflow-x-auto shadow overflow-hidden sm:rounded-lg"
                        >
                            <table class="min-w-full divide-y divide-cool-gray-200">
                                <thead>
                                    <tr>
                                        <th
                                            class="px-6 py-3 bg-cool-gray-50 text-left text-xs leading-4 font-medium text-cool-gray-500 uppercase tracking-wider"
                                        >Date Seen</th>
                                        <th
                                            class="px-6 py-3 bg-cool-gray-50 text-right text-xs leading-4 font-medium text-cool-gray-500 uppercase tracking-wider"
                                        >Location</th>
                                        <th
                                            class="hidden px-6 py-3 bg-cool-gray-50 text-left text-xs leading-4 font-medium text-cool-gray-500 uppercase tracking-wider md:block"
                                        >Injury</th>
                                        <th
                                            class="px-6 py-3 bg-cool-gray-50 text-right text-xs leading-4 font-medium text-cool-gray-500 uppercase tracking-wider"
                                        >Verified</th>
                                        <th
                                            class="px-6 py-3 bg-cool-gray-50 text-right text-xs leading-4 font-medium text-cool-gray-500 uppercase tracking-wider"
                                        >Contributor</th>
                                    </tr>
                                </thead>
                                <tbody class="bg-white divide-y divide-cool-gray-200">
                                    <tr
                                        v-for="(encounter,
                                        index) in encounterData"
                                        :key="index"
                                        class="bg-white"
                                    >
                                        <td
                                            class="max-w-0 w-full px-6 py-4 whitespace-no-wrap text-sm leading-5 text-cool-gray-900"
                                        >
                                            <div class="flex">
                                                <a
                                                    href="#"
                                                    class="group inline-flex space-x-2 truncate text-sm leading-5"
                                                >
                                                    <svg
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                        class="flex-shrink-0 h-5 w-5 text-cool-gray-400 group-hover:text-cool-gray-500 transition ease-in-out duration-150"
                                                    >
                                                        <path
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            stroke-width="2"
                                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                                        />
                                                        <path
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            stroke-width="2"
                                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                                        />
                                                    </svg>
                                                    <p
                                                        class="text-cool-gray-500 truncate group-hover:text-cool-gray-900 transition ease-in-out duration-150"
                                                    >
                                                        {{
                                                        $moment(
                                                        encounter
                                                        .timestamp
                                                        .seconds *
                                                        1000
                                                        ).format('llll')
                                                        }}
                                                    </p>
                                                </a>
                                            </div>
                                        </td>
                                        <td
                                            class="px-6 py-4 text-right whitespace-no-wrap text-sm leading-5 text-cool-gray-500"
                                        >
                                            <span class="text-cool-gray-900 font-medium">
                                                {{
                                                `${encounter.location.latitude}, ${encounter.location.longitude}`
                                                }}
                                            </span>
                                        </td>
                                        <td
                                            class="hidden px-6 py-4 whitespace-no-wrap text-sm leading-5 text-cool-gray-500 md:block"
                                        >
                                            <span
                                                v-if="!encounter.injury"
                                                class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium leading-4 bg-green-100 text-green-800 capitalize"
                                            >Good</span>
                                            <span
                                                v-else
                                                class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium leading-4 bg-red-100 text-red-800 capitalize"
                                            >Injury</span>
                                        </td>
                                        <td
                                            class="px-6 py-4 text-right whitespace-no-wrap text-sm leading-5 text-cool-gray-500"
                                        >
                                            <span
                                                v-if="encounter.verified"
                                                aria-label="Verified"
                                                class="h-4 w-4 mx-auto bg-green-100 rounded-full flex items-center justify-center"
                                            >
                                                <span class="h-2 w-2 bg-green-400 rounded-full"></span>
                                            </span>
                                            <span
                                                v-else
                                                aria-label="Pending"
                                                class="h-4 w-4 mx-auto bg-gray-100 rounded-full flex items-center justify-center"
                                            >
                                                <span class="h-2 w-2 bg-gray-400 rounded-full"></span>
                                            </span>
                                        </td>
                                        <td
                                            class="px-6 py-4 text-right whitespace-no-wrap text-sm leading-5 text-cool-gray-500"
                                        >{{ encounter.contributorName }}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <!-- Pagination -->
                            <nav
                                class="bg-white px-4 py-3 flex items-center justify-between border-t border-cool-gray-200 sm:px-6"
                            >
                                <div class="hidden sm:block">
                                    <p class="text-sm leading-5 text-cool-gray-700">
                                        <!-- Showing
                                        <span class="font-medium">1</span>
                                        to
                                        <span class="font-medium">10</span>
                                        of-->
                                        <span class="font-medium">
                                            {{
                                            encounterData.length
                                            }}
                                        </span>
                                        results
                                    </p>
                                </div>
                                <div class="flex-1 flex justify-between sm:justify-end">
                                    <a
                                        href="#"
                                        class="relative inline-flex items-center px-4 py-2 border border-cool-gray-300 text-sm leading-5 font-medium rounded-md text-cool-gray-700 bg-white hover:text-cool-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-cool-gray-100 active:text-cool-gray-700 transition ease-in-out duration-150"
                                    >Previous</a>
                                    <a
                                        href="#"
                                        class="ml-3 relative inline-flex items-center px-4 py-2 border border-cool-gray-300 text-sm leading-5 font-medium rounded-md text-cool-gray-700 bg-white hover:text-cool-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-cool-gray-100 active:text-cool-gray-700 transition ease-in-out duration-150"
                                    >Next</a>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

            <!-- map header -->
            <div class="pb-5 border-b border-gray-200">
                <h3
                    class="max-w-6xl mx-auto mt-8 px-4 text-lg leading-6 font-medium text-cool-gray-900 sm:px-6 lg:px-8"
                >Track</h3>
            </div>

            <!-- Map view -->
            <div class="relative w-full" id="track">
                <EncounterSidebar
                    :isSidebarActive="encounterSidebar"
                    @closeSidebar="toggleEncounterSidebar"
                    :data="sidebarData"
                />
                <GmapMap
                    :center="center"
                    :zoom="6"
                    :options="mapOptions"
                    style="width: 100%; height: calc(100vh - 62px)"
                >
                    <gmap-polyline
                        v-if="path.length > 0"
                        :path="path"
                        :editable="false"
                        :options="polylineOptions"
                        ref="polyline"
                    ></gmap-polyline>
                    <GmapMarker
                        v-for="(encounter, index) in encounterData"
                        :key="index"
                        :position="latLng(encounter)"
                        :clickable="true"
                        @click="expandSidebar(encounter)"
                    ></GmapMarker>
                </GmapMap>
            </div>
        </div>
    </main>
</template>

<script>
import EncounterSidebar from '@/components/EncounterSidebar'

import mapStyle from '@/assets/map-styles'

export default {
    components: {
        EncounterSidebar,
    },

    data() {
        return {
            // map
            mapOptions: {
                styles: mapStyle,
                streetViewControl: false,
                mapTypeControl: false,
                gestureHandling: 'cooperative',
                fullscreenControlOptions: {
                    position: 6,
                },
                zoomControlOptions: {
                    position: 6,
                },
            },
            polylineOptions: {
                strokeColor: '#ffffff',
                strokeWeight: 4,
                geodesic: true,
            },
            center: { lat: 47.376332, lng: 8.547511 },

            // encounterData: null,
            path: [],
            animal_not_found: false,

            encounterSidebar: false,
            sidebarData: {},
        }
    },

    watch: {
        //   $route(to, from) {
        //     // react to route changes...
        //     // show loading
        //     this.fetch_encounterData(this.$route.params.id);
        //   },

        encounterData() {
            const encounters = this.encounterData
            const length = encounters.length
            let totalLat = 0
            let totalLng = 0
            encounters.map(encounter => {
                totalLat += encounter.location.latitude
                totalLng += encounter.location.longitude
                this.path.push({
                    lat: encounter.location.latitude,
                    lng: encounter.location.longitude,
                })
            })
            const newLat = totalLat / length
            const newLng = totalLng / length
            const newCenter = { lat: newLat, lng: newLng }

            this.center = newCenter
        },
    },

    computed: {
        animal_data() {
            return this.$store.state.animals.find(animal => {
                return animal.id === this.$route.params.id
            })
        },

        firstEncounter() {
            let sortedEncounters = this.encounterData.sort((a, b) => {
                return (
                    new Date(a.timestamp.seconds * 1000) -
                    new Date(b.timestamp.seconds * 1000)
                )
            })
            return sortedEncounters[0]
        },

        lastEncounter() {
            let sortedEncounters = this.encounterData.sort((a, b) => {
                return (
                    new Date(a.timestamp.seconds * 1000) -
                    new Date(b.timestamp.seconds * 1000)
                )
            })
            return sortedEncounters[sortedEncounters.length - 1]
        },

        encounterData() {
            return this.$store.state.encounters.filter(encounter => {
                return encounter.animalId === this.$route.params.id
            })
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

        toggleEncounterSidebar() {
            this.encounterSidebar = !this.encounterSidebar
        },

        expandSidebar(encounter) {
            const center = {
                lat: encounter.location.latitude,
                lng: encounter.location.longitude,
            }
            this.center = center
            this.sidebarData = encounter
            this.encounterSidebar = true
        },

        reCenter() {
            const encounters = this.encounterData
            const length = encounters.length
            let totalLat = 0
            let totalLng = 0
            encounters.map(encounter => {
                totalLat += encounter.location.latitude
                totalLng += encounter.location.longitude
                this.path.push({
                    lat: encounter.location.latitude,
                    lng: encounter.location.longitude,
                })
            })
            const newLat = totalLat / length
            const newLng = totalLng / length
            const newCenter = { lat: newLat, lng: newLng }

            this.center = newCenter
        },

        // fetch_encounterData(animalId) {
        //   const animalRef = this.$fireStore.collection("animals").doc(animalId);
        //   animalRef
        //     .collection("encounters")
        //     .get()
        //     .then((querySnapshot) => {
        //       const documents = [];
        //       querySnapshot.forEach((doc) => {
        //         const encounter = doc.data();
        //         encounter.id = doc.id;
        //         documents.push(encounter);
        //       });
        //       this.encounterData = documents;
        //       // close loading
        //     })
        //     .catch(function (error) {
        //       console.log("Error getting collection:", error);
        //     });
        // },
    },

    created() {
        // this.fetch_encounterData(this.$route.params.id);
    },

    mounted() {
        this.reCenter()
    },
}
</script>
