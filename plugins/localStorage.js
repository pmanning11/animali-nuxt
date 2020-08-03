import createPersistedState from 'vuex-persistedstate'

export default ({ store }) => {
  let user = store.state.user
  window.onNuxtReady(() => {
    createPersistedState({
      key: 'vuex',
    })
  })
}
