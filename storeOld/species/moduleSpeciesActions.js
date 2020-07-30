export default {
  fetchSpecies({ commit }) {
    try {
      // retrieve a collection
      this.$fireStore
        .collection('species')
        .get()
        .then((querySnapshot) => {
          const documents = querySnapshot.docs.map((doc) => doc.data())
          // do something with documents
          commit('SET_SPECIES', documents)
        })
    } catch {
      console.log('Error getting species')
    }
  },

  // fetchSpecie(context, specieId) {
  //   try {
  //     // retrieve a collection
  //     db.collection('species')
  //       .doc(specieId)
  //       .get()
  //       .then((doc) => {
  //         const specie = doc.data()
  //         commit('SET_SPECIE', specie)
  //       })
  //   } catch {
  //     console.log('Error getting species')
  //   }
  // },
}
