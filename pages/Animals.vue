<template>
    <div class="pt-4 pb-6 md:py-6">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
            <h1 class="text-2xl font-semibold text-gray-900">Animal List</h1>
        </div>
        <div class="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
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
        CellSex
    },

    data() {
        return {
            columns: [
                {
                    id: 'id',
                    name: 'ID'
                },
                {
                    id: 'name',
                    name: 'Name',
                    formatter: (cell, row) => {
                        const current = this.$gridjs.uuid()
                        this.$gridjs.render(
                            `[data-ref="${current}"]`,
                            CellAnimalName,
                            {
                                content: this.$store.state.animals.filter(
                                    doc => doc.id === row.cells[0].data
                                )
                            }
                        )
                        return this.$gridjs.html(
                            `<div data-ref="${current}"></div>`
                        )
                    }
                },
                {
                    id: 'sex',
                    name: 'Sex',
                    formatter: cell => {
                        const current = this.$gridjs.uuid()
                        this.$gridjs.render(
                            `[data-ref="${current}"]`,
                            CellSex,
                            {
                                gender: cell
                            }
                        )
                        return this.$gridjs.html(
                            `<div data-ref="${current}"></div>`
                        )
                    }
                },
                {
                    id: 'totalEncounters',
                    name: '📍'
                },
                {
                    id: 'dateFirstSeen',
                    name: 'First Seen',
                    formatter: cell =>
                        `${this.$moment(cell.seconds * 1000).format('ll')}`
                },
                {
                    id: 'dateLastSeen',
                    name: 'Last Seen',
                    formatter: cell =>
                        `${this.$moment(cell.seconds * 1000).format('ll')}`
                },
                {
                    id: 'status',
                    name: 'Status',
                    formatter: cell => {
                        const current = this.$gridjs.uuid()
                        this.$gridjs.render(
                            `[data-ref="${current}"]`,
                            CellStatus,
                            {
                                status: cell
                            }
                        )
                        return this.$gridjs.html(
                            `<div data-ref="${current}"></div>`
                        )
                    }
                }
            ],
            language: {
                // search: {
                //   placeholder: '🔍 Search...',
                // },
                pagination: {
                    previous: '⬅️',
                    next: '➡️',
                    showing: '🐻 Displaying',
                    results: () => 'Animals'
                }
            },
            pagination: {
                enabled: true,
                limit: 8,
                summary: true
            }
        }
    },

    computed: {
        animalsData() {
            return this.$store.state.animals
        }
    },

    created() {}
}
</script>

<style scoped></style>
