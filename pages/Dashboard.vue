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
      <div class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
        <div class="bg-white overflow-hidden shadow rounded-lg">
          <dl class="px-4 pt-5">
            <dt class="text-sm leading-5 font-medium text-gray-500 truncate">
              Encounters
            </dt>
            <dd class="mt-1 text-3xl leading-9 font-semibold text-gray-900">
              234
            </dd>
          </dl>
          <apexchart
            type="area"
            height="100"
            :options="chartConfigs.lineChartOptions"
            :series="encounters"
          ></apexchart>
        </div>
        <div class="bg-white overflow-hidden shadow rounded-lg">
          <dl class="px-4 pt-5">
            <dt class="text-sm leading-5 font-medium text-gray-500 truncate">
              Animals
            </dt>
            <dd class="mt-1 text-3xl leading-9 font-semibold text-gray-900">
              5
            </dd>
          </dl>
          <apexchart
            type="area"
            height="100"
            :options="chartConfigs.lineChartOptions"
            :series="animals"
          ></apexchart>
        </div>
        <div class="bg-white overflow-hidden shadow rounded-lg">
          <dl class="px-4 pt-5">
            <dt class="text-sm leading-5 font-medium text-gray-500 truncate">
              Contributors
            </dt>
            <dd class="mt-1 text-3xl leading-9 font-semibold text-gray-900">
              44
            </dd>
          </dl>
          <apexchart
            type="area"
            height="100"
            :options="chartConfigs.lineChartOptions"
            :series="contributors"
          ></apexchart>
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
            <div class="text-sm leading-5 font-medium text-gray-500 truncate">
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
    chartConfigs,
  },

  middleware: 'auth',

  data() {
    return {
      chartConfigs,
      timeframe: 'Week',
      isTimeframeMenuOpen: false,

      // SPARKLINE DATA
      encounters: [
        {
          name: 'Encounters',
          data: [24, 43, 10, 9, 29, 19, 22, 9, 12, 19, 5, 13, 9, 17, 2, 7, 5],
        },
      ],
      animals: [
        {
          name: 'Animals',
          data: [4, 53, 10, 9, 29, 19, 2, 9, 12, 7, 9, 5, 13, 9, 17, 2, 7, 5],
        },
      ],
      contributors: [
        {
          name: 'Contributors',
          data: [4, 3, 10, 9, 29, 9, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5],
        },
      ],

      // PIE CHART
      newReturning: [690, 258],

      // GRID
      columns: [
        {
          id: 'id',
          name: 'ID',
        },
        {
          id: 'timestamp',
          name: 'Date',
          formatter: (cell) =>
            `${this.$moment(cell.seconds * 1000).format('ll')}`,
        },
        {
          id: 'contributorName',
          name: 'Contributor',
        },
      ],
      language: {
        pagination: {
          previous: '⬅️',
          next: '➡️',
          showing: 'Displaying',
          results: () => 'Animals',
        },
      },
      pagination: {
        enabled: true,
        limit: 4,
        summary: true,
      },
    }
  },

  computed: {
    encountersData() {
      return this.$store.state.encounters

      // filter by week

      // filter by month

      // filter by year
    },
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
    },
  },
}
</script>
