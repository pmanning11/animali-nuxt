import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

import moduleAuth from './auth/moduleAuth.js'
import moduleSpecies from './species/moduleSpecies.js'
import moduleAnimals from './animals/moduleAnimals.js'

export default new Vuex.Store({
  getters,
  mutations,
  state,
  actions,
  modules: {
    auth: moduleAuth,
    species: moduleSpecies,
    animals: moduleAnimals,
  },
  strict: process.env.NODE_ENV !== 'production',
})
