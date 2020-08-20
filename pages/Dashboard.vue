<template>
    <div class="pt-4 pb-6 md:py-6">
        <div
            class="flex justify-between items-baseline max-w-7xl mx-auto px-4 sm:px-6 md:px-8"
        >
            <h1 class="text-2xl font-semibold text-gray-900">Dashboard</h1>
            <!-- Profile dropdown -->
            <div class="relative flex justify-end">
                <div>
                    <button
                        class="max-w-xs flex items-center text-sm focus:outline-none p-2 rounded-md hover:bg-gray-200"
                        id="user-menu"
                        aria-label="User menu"
                        aria-haspopup="true"
                        @click="isTimeframeMenuOpen = !isTimeframeMenuOpen"
                    >
                        <p
                            class="block ml-3 text-cool-gray-700 text-sm leading-5 font-medium"
                        >
                            Last {{ timeframe }}
                        </p>
                        <svg
                            class="block flex-shrink-0 ml-1 h-5 w-5 text-cool-gray-400"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clip-rule="evenodd"
                            />
                        </svg>
                    </button>
                </div>
                <transition
                    enter-active-class="transition ease-out duration-100"
                    enter-class="transform opacity-0 scale-95"
                    enter-to-class="transform opacity-100 scale-100"
                    leave-active-class="transition ease-in duration-75"
                    leave-class="transform opacity-100 scale-100"
                    leave-to-class="transform opacity-0 scale-95"
                >
                    <div
                        v-show="isTimeframeMenuOpen"
                        class="origin-top-right absolute right-2 top-10 w-32 rounded-md shadow-lg z-10"
                    >
                        <div
                            class="py-1 rounded-md bg-white shadow-xs"
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="user-menu"
                        >
                            <a
                                href="#"
                                class="block px-4 py-2 text-sm text-cool-gray-700 hover:bg-cool-gray-100 transition ease-in-out duration-150"
                                role="menuitem"
                                @click="changeTimeframe('Week')"
                                >Last Week</a
                            >
                            <a
                                href="#"
                                class="block px-4 py-2 text-sm text-cool-gray-700 hover:bg-cool-gray-100 transition ease-in-out duration-150"
                                role="menuitem"
                                @click="changeTimeframe('Month')"
                                >Last Month</a
                            >
                            <a
                                href="#"
                                class="block px-4 py-2 text-sm text-cool-gray-700 hover:bg-cool-gray-100 transition ease-in-out duration-150"
                                role="menuitem"
                                @click="changeTimeframe('Year')"
                                >Last Year</a
                            >
                        </div>
                    </div>
                </transition>
            </div>
        </div>
        <!-- End dropdown -->
        <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <!-- Replace with your content -->
            <div
                class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
            >
                <div class="bg-white overflow-hidden shadow rounded-lg">
                    <div class="px-4 py-5 sm:p-6">
                        <div class="flex items-center">
                            <div
                                class="flex-shrink-0 bg-primary rounded-md p-3"
                            >
                                <svg
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    class="h-6 w-6 text-white"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                                    ></path>
                                </svg>
                            </div>
                            <div class="ml-5 w-0 flex-1">
                                <dl>
                                    <dt
                                        class="text-sm leading-5 font-medium text-gray-500 truncate"
                                    >
                                        Total Encounters
                                    </dt>
                                    <dd class="flex items-baseline">
                                        <div
                                            class="text-2xl leading-8 font-semibold text-gray-900"
                                        >
                                            {{ encountersData.length }}
                                        </div>
                                        <div
                                            class="ml-2 flex items-baseline text-sm leading-5 font-semibold"
                                            :class="
                                                `${
                                                    encounterChange >= 0
                                                        ? 'text-green-600'
                                                        : 'text-red-500'
                                                }`
                                            "
                                        >
                                            <svg
                                                v-if="encounterChange >= 0"
                                                class="self-center flex-shrink-0 h-5 w-5 text-green-500"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z"
                                                    clip-rule="evenodd"
                                                />
                                            </svg>
                                            <svg
                                                v-else
                                                class="self-center flex-shrink-0 h-5 w-5 text-red-500"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z"
                                                    clip-rule="evenodd"
                                                />
                                            </svg>
                                            <span class="sr-only">
                                                Increased by
                                            </span>
                                            {{ Math.abs(encounterChange) }}
                                        </div>
                                    </dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                    <div class="bg-gray-50 px-4 py-4 sm:px-6">
                        <div class="text-sm leading-5">
                            <a
                                href="#"
                                class="font-medium text-teal-600 hover:text-teal-500 transition ease-in-out duration-150"
                            >
                                View all
                            </a>
                        </div>
                    </div>
                </div>
                <div class="bg-white overflow-hidden shadow rounded-lg">
                    <div class="px-4 py-5 sm:p-6">
                        <div class="flex items-center">
                            <div
                                class="flex-shrink-0 bg-primary rounded-md p-3"
                            >
                                <svg
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    class="finger-print w-6 h-6 text-white"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                                    ></path>
                                </svg>
                            </div>
                            <div class="ml-5 w-0 flex-1">
                                <dl>
                                    <dt
                                        class="text-sm leading-5 font-medium text-gray-500 truncate"
                                    >
                                        Total Animals
                                    </dt>
                                    <dd class="flex items-baseline">
                                        <div
                                            class="text-2xl leading-8 font-semibold text-gray-900"
                                        >
                                            {{ totalAnimals }}
                                        </div>
                                        <div
                                            class="ml-2 flex items-baseline text-sm leading-5 font-semibold"
                                            :class="
                                                `${
                                                    animalChange >= 0
                                                        ? 'text-green-600'
                                                        : 'text-red-500'
                                                }`
                                            "
                                        >
                                            <svg
                                                v-if="animalChange >= 0"
                                                class="self-center flex-shrink-0 h-5 w-5 text-green-500"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z"
                                                    clip-rule="evenodd"
                                                />
                                            </svg>
                                            <svg
                                                v-else
                                                class="self-center flex-shrink-0 h-5 w-5 text-red-500"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z"
                                                    clip-rule="evenodd"
                                                />
                                            </svg>
                                            <span class="sr-only">
                                                Increased by
                                            </span>
                                            {{ Math.abs(animalChange) }}
                                        </div>
                                    </dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                    <div class="bg-gray-50 px-4 py-4 sm:px-6">
                        <div class="text-sm leading-5">
                            <NuxtLink
                                to="/animals"
                                class="font-medium text-teal-600 hover:text-teal-500 transition ease-in-out duration-150"
                            >
                                View all
                            </NuxtLink>
                        </div>
                    </div>
                </div>
                <div class="bg-white overflow-hidden shadow rounded-lg">
                    <div class="px-4 py-5 sm:p-6">
                        <div class="flex items-center">
                            <div
                                class="flex-shrink-0 bg-primary rounded-md p-3"
                            >
                                <svg
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    class="text-white w-6 h-6"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                    ></path>
                                </svg>
                            </div>
                            <div class="ml-5 w-0 flex-1">
                                <dl>
                                    <dt
                                        class="text-sm leading-5 font-medium text-gray-500 truncate"
                                    >
                                        Total Contributors
                                    </dt>
                                    <dd class="flex items-baseline">
                                        <div
                                            class="text-2xl leading-8 font-semibold text-gray-900"
                                        >
                                            {{ totalContributors }}
                                        </div>
                                        <div
                                            class="ml-2 flex items-baseline text-sm leading-5 font-semibold"
                                            :class="
                                                `${
                                                    contributorChange >= 0
                                                        ? 'text-green-600'
                                                        : 'text-red-500'
                                                }`
                                            "
                                        >
                                            <svg
                                                v-if="contributorChange >= 0"
                                                class="self-center flex-shrink-0 h-5 w-5 text-green-500"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z"
                                                    clip-rule="evenodd"
                                                />
                                            </svg>
                                            <svg
                                                v-else
                                                class="self-center flex-shrink-0 h-5 w-5 text-red-500"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z"
                                                    clip-rule="evenodd"
                                                />
                                            </svg>
                                            <span class="sr-only">
                                                Decreased by
                                            </span>
                                            {{ Math.abs(contributorChange) }}
                                        </div>
                                    </dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                    <div class="bg-gray-50 px-4 py-4 sm:px-6">
                        <div class="text-sm leading-5">
                            <a
                                href="#"
                                class="font-medium text-teal-600 hover:text-teal-500 transition ease-in-out duration-150"
                            >
                                View all
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mt-5 grid grid-cols-1 gap-5 md:grid-cols-3">
                <div class="sm:col-span-2">
                    <grid
                        :auto-width="true"
                        :search="false"
                        :sort="true"
                        :fixedHeader="true"
                        :cols="columns"
                        :rows="encountersData"
                        :pagination="pagination"
                        :language="language"
                    ></grid>
                </div>
                <div class="bg-white overflow-hidden shadow rounded-lg">
                    <div class="px-4 py-5 sm:p-6">
                        <div
                            class="text-sm leading-5 font-medium text-gray-500 truncate"
                        >
                            New vs. Returning Animals
                        </div>
                        <apexchart
                            type="pie"
                            :options="chartConfigs.pieChartOptions"
                            :series="newReturning"
                        />
                    </div>
                </div>
            </div>
        </div>

        <!-- End replace-->
    </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'
import chartConfigs from './chartConfigs'

export default {
    components: {
        apexchart: VueApexCharts,
        chartConfigs
    },

    middleware: 'auth',

    data() {
        return {
            chartConfigs,
            timeframe: 'Week',
            isTimeframeMenuOpen: false,

            // STATS
            encounterChange: 0,
            totalAnimals: 0,
            animalChange: 0,
            totalContributors: 0,
            contributorChange: 0,

            // GRID
            columns: [
                {
                    id: 'animalId',
                    name: 'ID'
                },
                {
                    id: 'timestamp',
                    name: 'Date',
                    formatter: cell =>
                        `${this.$moment(cell.seconds * 1000).format('ll')}`
                },
                {
                    id: 'contributorName',
                    name: 'Contributor'
                }
            ],
            language: {
                pagination: {
                    previous: '⬅️',
                    next: '➡️',
                    showing: 'Displaying',
                    results: () => 'Animals'
                }
            },
            pagination: {
                enabled: true,
                limit: 4,
                summary: true
            },

            // PIE CHART
            newReturning: [1, 1]
        }
    },

    computed: {
        encountersData() {
            let allEncounters = this.$store.state.encounters

            if (this.timeframe === 'Year') {
                // filter by year
                let thisYear = allEncounters.filter(encounter => {
                    let date = encounter.timestamp.seconds * 1000

                    let today = new Date()
                    let todayTimestamp = today.getTime()
                    let oneYearAgo = todayTimestamp - 31556926000

                    return date > oneYearAgo
                })

                let lastYear = allEncounters.filter(encounter => {
                    let date = encounter.timestamp.seconds * 1000

                    let today = new Date()
                    let todayTimestamp = today.getTime()
                    let oneYearAgo = todayTimestamp - 31556926000
                    let twoYearAgo = oneYearAgo - 31556926000

                    return date > twoYearAgo && date < oneYearAgo
                })

                this.encounterChange = thisYear.length - lastYear.length
                this.totalAnimals = [
                    ...new Set(thisYear.map(data => data.animalId))
                ].length
                this.animalChange =
                    [...new Set(thisYear.map(data => data.animalId))].length -
                    [...new Set(lastYear.map(data => data.animalId))].length
                this.totalContributors = [
                    ...new Set(thisYear.map(data => data.contributorId))
                ].length
                this.contributorChange =
                    [...new Set(thisYear.map(data => data.contributorId))]
                        .length -
                    [...new Set(lastYear.map(data => data.contributorId))]
                        .length
                let firstEncounters = [
                    ...new Set(
                        thisYear.filter(data => data.firstEncounter === true)
                    )
                ].length
                this.newReturning = [
                    thisYear.length - firstEncounters,
                    firstEncounters
                ]

                return thisYear
            } else if (this.timeframe === 'Month') {
                // filter by month
                let thisMonth = allEncounters.filter(encounter => {
                    let date = encounter.timestamp.seconds * 1000

                    let today = new Date()
                    let todayTimestamp = today.getTime()
                    let oneMonthAgo = todayTimestamp - 2629744000

                    return date > oneMonthAgo
                })

                let lastMonth = allEncounters.filter(encounter => {
                    let date = encounter.timestamp.seconds * 1000

                    let today = new Date()
                    let todayTimestamp = today.getTime()
                    let oneMonthAgo = todayTimestamp - 2629744000
                    let twoMonthAgo = oneMonthAgo - 2629744000

                    return date > twoMonthAgo && date < oneMonthAgo
                })

                this.encounterChange = thisMonth.length - lastMonth.length
                this.totalAnimals = [
                    ...new Set(thisMonth.map(data => data.animalId))
                ].length
                this.animalChange =
                    [...new Set(thisMonth.map(data => data.animalId))].length -
                    [...new Set(lastMonth.map(data => data.animalId))].length
                this.totalContributors = [
                    ...new Set(thisMonth.map(data => data.contributorId))
                ].length
                this.contributorChange =
                    [...new Set(thisMonth.map(data => data.contributorId))]
                        .length -
                    [...new Set(lastMonth.map(data => data.contributorId))]
                        .length
                let firstEncounters = [
                    ...new Set(
                        thisMonth.filter(data => data.firstEncounter === true)
                    )
                ].length
                this.newReturning = [
                    thisMonth.length - firstEncounters,
                    firstEncounters
                ]

                return thisMonth
            } else {
                // filter by week
                let thisWeek = allEncounters.filter(encounter => {
                    let date = encounter.timestamp.seconds * 1000

                    let today = new Date()
                    let todayTimestamp = today.getTime()
                    let oneWeekAgo = todayTimestamp - 604800000

                    return date > oneWeekAgo
                })

                let lastWeek = allEncounters.filter(encounter => {
                    let date = encounter.timestamp.seconds * 1000

                    let today = new Date()
                    let todayTimestamp = today.getTime()
                    let oneWeekAgo = todayTimestamp - 604800000
                    let twoWeekAgo = oneWeekAgo - 604800000

                    return date > twoWeekAgo && date < oneWeekAgo
                })

                this.encounterChange = thisWeek.length - lastWeek.length - 1
                this.totalAnimals = [
                    ...new Set(thisWeek.map(data => data.animalId))
                ].length
                this.animalChange =
                    [...new Set(thisWeek.map(data => data.animalId))].length -
                    [...new Set(lastWeek.map(data => data.animalId))].length
                this.totalContributors = [
                    ...new Set(thisWeek.map(data => data.contributorId))
                ].length
                this.contributorChange =
                    [...new Set(thisWeek.map(data => data.contributorId))]
                        .length -
                    [...new Set(lastWeek.map(data => data.contributorId))]
                        .length
                let firstEncounters = [
                    ...new Set(
                        thisWeek.filter(data => data.firstEncounter === true)
                    )
                ].length
                this.newReturning = [
                    thisWeek.length - firstEncounters,
                    firstEncounters
                ]

                return thisWeek
            }
        }
    },

    methods: {
        changeTimeframe(time) {
            if (time === 'Year') {
                this.timeframe = 'Year'
            } else if (time === 'Month') {
                this.timeframe = 'Month'
            } else {
                this.timeframe = 'Week'
            }
            this.isTimeframeMenuOpen = false
        }
    }
}
</script>
