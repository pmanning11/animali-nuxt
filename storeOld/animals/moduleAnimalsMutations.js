/*=========================================================================================
  File Name: moduleCalendarMutations.js
  Description: Calendar Module Mutations
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

export default {
  // SET_ANIMALS(state, animals) {
  //   state.animals = animals
  // },
  ADD_ANIMAL(state, animal) {
    state.animals.push(animal)
  },
  UPDATE_ANIMAL(state, animal) {
    const animalIndex = state.animals.findIndex((a) => a.id === animal.id)
    Object.assign(state.animals[animalIndex], animal)
  },
  REMOVE_RECORD(state, itemId) {
    const animalIndex = state.animals.findIndex((u) => u.id === itemId)
    state.animals.splice(animalIndex, 1)
  },
}
