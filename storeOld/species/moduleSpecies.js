/*=========================================================================================
  File Name: moduleSpecies.js
  Description: Species Module
  ----------------------------------------------------------------------------------------
  Item Name: Animali
  Author: PJManning
  Author URL: https://pjmanning.dev
==========================================================================================*/

import state from './moduleSpeciesState'
import mutations from './moduleSpeciesMutations.js'
import actions from './moduleSpeciesActions.js'
import getters from './moduleSpeciesGetters.js'

export default {
  isRegistered: false,
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}
