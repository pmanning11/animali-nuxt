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
            class="max-w-xs flex items-center text-sm focus:outline-none focus:bg-cool-gray-100 p-2 rounded-md hover:bg-cool-gray-100"
            id="user-menu"
            aria-label="User menu"
            aria-haspopup="true"
          >
            <p
              class="block ml-3 text-cool-gray-700 text-sm leading-5 font-medium"
            >
              Last Week
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
        <!--
              Profile dropdown panel, show/hide based on dropdown state.

              Entering: "transition ease-out duration-100"
                From: "transform opacity-0 scale-95"
                To: "transform opacity-100 scale-100"
              Leaving: "transition ease-in duration-75"
                From: "transform opacity-100 scale-100"
                To: "transform opacity-0 scale-95"
        -->
        <div
          class="origin-top-right absolute right-2 top-10 w-32 rounded-md shadow-lg"
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
              >Last Week</a
            >
            <a
              href="#"
              class="block px-4 py-2 text-sm text-cool-gray-700 hover:bg-cool-gray-100 transition ease-in-out duration-150"
              role="menuitem"
              >Last Month</a
            >
            <a
              href="#"
              class="block px-4 py-2 text-sm text-cool-gray-700 hover:bg-cool-gray-100 transition ease-in-out duration-150"
              role="menuitem"
              >Last Year</a
            >
          </div>
        </div>
      </div>
    </div>
    <!-- End dropdown -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
      <!-- Replace with your content -->
      <div class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
        <div class="bg-white overflow-hidden shadow rounded-lg">
          <div class="px-4 py-5 sm:p-6">
            <dl>
              <dt class="text-sm leading-5 font-medium text-gray-500 truncate">
                Total Encounters
              </dt>
              <dd class="mt-1 text-3xl leading-9 font-semibold text-gray-900">
                71,897
              </dd>
            </dl>
          </div>
        </div>
        <div class="bg-white overflow-hidden shadow rounded-lg">
          <div class="px-4 py-5 sm:p-6">
            <dl>
              <dt class="text-sm leading-5 font-medium text-gray-500 truncate">
                New Animals
              </dt>
              <dd class="mt-1 text-3xl leading-9 font-semibold text-gray-900">
                58.16%
              </dd>
            </dl>
          </div>
        </div>
        <div class="bg-white overflow-hidden shadow rounded-lg">
          <div class="px-4 py-5 sm:p-6">
            <dl>
              <dt class="text-sm leading-5 font-medium text-gray-500 truncate">
                Total Contributors
              </dt>
              <dd class="mt-1 text-3xl leading-9 font-semibold text-gray-900">
                24.57%
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </div>

    <!-- /End replace f-->
  </div>
</template>

<script>
export default {
  middleware: 'auth',

  data() {
    return {
      timeline: '',
    }
  },
}
</script>
