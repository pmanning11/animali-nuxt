<template>
  <div class="pt-2 pb-6 md:py-6">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
      <h1 class="text-2xl font-semibold text-gray-900">List</h1>
    </div>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
      <!-- Replace with your content -->

      <div class="py-4">
        <div
          class="border-4 border-dashed border-gray-200 rounded-lg h-96"
        ></div>
      </div>
      <!-- /End replace -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },

  computed: {
    animalsData() {
      return this.$store.state.animals
    },
  },

  created() {
    // If Animal state is not registered - register and get animals
    // if (!moduleAnimals.isRegistered) {
    //   this.$store.registerModule('animals', moduleAnimals)
    //   moduleAnimals.isRegistered = true
    if (this.$store.state.animals.length < 1) {
      // Get the animals
      const programId = this.$store.state.user.programId
      this.$store.dispatch('fetchAnimals', programId).catch((err) => {
        console.error('error dispatching animals', err)
      })
    }
  },
}
</script>

<style scoped></style>
