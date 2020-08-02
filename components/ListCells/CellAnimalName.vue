<template>
  <a :href="`/animal/view/${content[0].id}`" class="flex items-center">
    <img
      class="inline-block h-8 w-8 mr-2 rounded-full"
      :src="content[0].profile_pic"
      :alt="content[0].id"
    />
    <a :href="url" @click.prevent class="text-inherit hover:text-primary">{{
      content[0].name
    }}</a>
  </a>
</template>

<script>
export default {
  name: 'CellAnimalName',

  props: {
    content: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {}
  },

  computed: {
    url() {
      return `/animal/view/${this.content[0].id}`
    },
  },
}
</script>
