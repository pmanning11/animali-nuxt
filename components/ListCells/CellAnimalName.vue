<template>
  <div class=" w-max-content">
    <a :href="`/animal/view/${content[0].id}`" class="flex items-center">
      <!-- <img
        class="inline-block h-8 w-8 mr-2 rounded-full"
        :src="content[0].profile_pic"
        :alt="content[0].id"
      /> -->
      <div>
        {{ content[0].name }}
      </div>
    </a>
  </div>
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
}
</script>
