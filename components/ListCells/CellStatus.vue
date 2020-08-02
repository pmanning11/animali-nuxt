<template>
  <div class="flex items-center">
    <div class="flex items-center" v-if="status === 'active'">
      <span
        class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium leading-5 bg-teal-100 text-teal-800"
      >
        active
      </span>
    </div>
    <div v-else-if="status === 'deceased'" class="flex items-center">
      <span
        class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium leading-5 bg-pink-100 text-pink-800"
      >
        deceased
      </span>
    </div>
    <div v-else>
      <span
        class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium leading-5 bg-orange-100 text-orange-800"
      >
        inactive
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CellStatus',

  props: {
    status: {
      type: String,
      required: true,
    },
  },
}
</script>
