/*=========================================================================================
  File Name: moduleAnimals.js
  Description: Animal Module
  ----------------------------------------------------------------------------------------
  Item Name: Animali
  Author: PJManning
  Author URL: https://pjmanning.dev
==========================================================================================*/

import state from './moduleAnimalsState.js'
import mutations from './moduleAnimalsMutations.js'
import actions from './moduleAnimalsActions.js'
import getters from './moduleAnimalsGetters.js'

export default {
  isRegistered: false,
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}
