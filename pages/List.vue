<template>
  <div class="pt-4 pb-6 md:py-6">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
      <h1 class="text-2xl font-semibold text-gray-900">Animal List</h1>
    </div>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
      <!-- Replace with your content -->

      <div class="py-4">
        <grid
          :auto-width="true"
          :search="false"
          :sort="true"
          :fixedHeader="true"
          :cols="columns"
          :rows="animalsData"
          :pagination="pagination"
          :language="language"
        ></grid>
      </div>
      <!-- /End replace -->
    </div>
  </div>
</template>

<script>
import CellAnimalName from '../components/ListCells/CellAnimalName'
import CellStatus from '../components/ListCells/CellStatus'
import CellSex from '../components/ListCells/CellSex'

export default {
  components: {
    CellAnimalName,
    CellStatus,
    CellSex,
  },

  data() {
    return {
      columns: [
        {
          id: 'id',
          name: 'ID',
        },
        {
          id: 'name',
          name: 'Name',
          formatter: (cell, row) => {
            const current = this.$gridjs.uuid()
            this.$gridjs.render(`[data-ref="${current}"]`, CellAnimalName, {
              content: this.$store.state.animals.filter(
                (doc) => doc.id === row.cells[0].data
              ),
            })
            return this.$gridjs.html(`<div data-ref="${current}"></div>`)
          },
        },
        {
          id: 'sex',
          name: 'Sex',
          formatter: (cell) => {
            const current = this.$gridjs.uuid()
            this.$gridjs.render(`[data-ref="${current}"]`, CellSex, {
              gender: cell,
            })
            return this.$gridjs.html(`<div data-ref="${current}"></div>`)
          },
        },
        {
          id: 'totalEncounters',
          name: '📍',
        },
        {
          id: 'dateFirstSeen',
          name: 'First Seen',
          formatter: (cell) =>
            `${this.$moment(cell.seconds * 1000).format('ll')}`,
        },
        {
          id: 'dateLastSeen',
          name: 'Last Seen',
          formatter: (cell) =>
            `${this.$moment(cell.seconds * 1000).format('ll')}`,
        },
        {
          id: 'status',
          name: 'Status',
          formatter: (cell) => {
            const current = this.$gridjs.uuid()
            this.$gridjs.render(`[data-ref="${current}"]`, CellStatus, {
              status: cell,
            })
            return this.$gridjs.html(`<div data-ref="${current}"></div>`)
          },
        },
      ],
      language: {
        // search: {
        //   placeholder: '🔍 Search...',
        // },
        pagination: {
          previous: '⬅️',
          next: '➡️',
          showing: '🐻 Displaying',
          results: () => 'Animals',
        },
      },
      pagination: {
        enabled: true,
        limit: 8,
        summary: true,
      },
      // classNames: {
      //   td: 'my-td-class',
      //   th: 'my-th-class',
      //   table: 'custom-table-class',
      // },
      // styles: {
      //   table: {
      //     // border: '3px solid #ccc',
      //   },
      //   th: {
      //     // 'background-color': 'rgba(0, 0, 0, 0.1)',
      //     // color: '#000',
      //     // 'border-bottom': '3px solid #ccc',
      //     width: '200px',
      //     'text-align': 'center',
      //   },
      //   td: {
      //     width: '200px',
      //     'text-align': 'left',
      //   },
      // },
    }
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
