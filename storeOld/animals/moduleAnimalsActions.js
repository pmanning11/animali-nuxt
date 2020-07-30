/*=========================================================================================
  File Name: moduleCalendarActions.js
  Description: Calendar Module Actions
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

// import { db, storage } from '@/firebase/firebaseConfig.js'
// import firebase from 'firebase/app'
// import 'firebase/auth'

export default {
  updateAnimal({ commit }, payload) {
    const animal = payload.animal
    const photoChanged = payload.photoChanged
    const animalRef = this.$fireStore.collection('animals').doc(animal.id)

    return animalRef
      .update({
        sex: animal.sex,
        status: animal.status,
        name: animal.name,
      })
      .then(() => {
        if (photoChanged) {
          // Upload animal profile pic
          const animalProfileRef = this.$fireStorage.ref(
            `animals/${animal.id}/profile_pic.jpg`
          )
          animalProfileRef
            .putString(animal.profile_pic, 'data_url')
            .then(() => {
              console.log('Animal successfully updated with a new image!')
              commit('UPDATE_ANIMAL', animal)
            })
            .catch((error) => {
              console.log(error)
            })
        } else {
          console.log('Animal successfully updated!')
          commit('UPDATE_ANIMAL', animal)
        }
      })
      .catch(function(error) {
        // The document probably doesn't exist.
        console.error('Error updating sex, status, name: ', error)
      })
  },

  fetchAnimals({ commit }, programId) {
    try {
      const animals = []

      // retrieve a collection
      this.$fireStore
        .collection('animals')
        .where('managedBy', '==', programId)
        .get()
        .then(async (querySnapshot) => {
          querySnapshot.docs.map(async (doc) => {
            // Get profile image
            const animalProfileRef = this.$fireStorage.ref(
              `animals/${doc.id}/profile_pic.jpg`
            )
            // Get the download URL
            await animalProfileRef
              .getDownloadURL()
              .then((url) => {
                const animalData = doc.data()
                animalData.profile_pic = url
                // animals.push(animalData)
                console.log('finished fetching animal')
                commit('ADD_ANIMAL', animalData)
              })
              .catch(function(error) {
                console.log(error)
                // A full list of error codes is available at
                // https://firebase.google.com/docs/storage/web/handle-errors
                switch (error.code) {
                  case 'storage/object-not-found':
                    // File doesn't exist
                    break
                  case 'storage/unauthorized':
                    // User doesn't have permission to access the object
                    break
                  case 'storage/canceled':
                    // User canceled the upload
                    break
                  case 'storage/unknown':
                    // Unknown error occurred, inspect the server response
                    break
                }
              })
          })
        })
    } catch (err) {
      console.log('Error getting animals: ', err)
    }
  },

  fetchAnimal(context, animalId) {
    const docRef = this.$fireStore.collection('animals').doc(animalId)
    docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          console.log('Document data:', doc.data())
          return doc.data()
        } else {
          // doc.data() will be undefined in this case
          console.log('No such document!')
        }
      })
      .catch(function(error) {
        console.log('Error getting document:', error)
      })
  },

  removeRecord({ commit }, animalId) {
    const animalRef = this.$fireStore.collection('animals').doc(animalId)

    try {
      // change managedBy field to 'none'
      return animalRef
        .update({
          managedBy: 'none',
        })
        .then(function() {
          commit('REMOVE_RECORD', animalId)
          console.log('Document successfully updated!')
        })
        .catch(function(error) {
          // The document probably doesn't exist.
          console.error('Error updating document: ', error)
        })
    } catch {
      console.log('Error getting animal: ', animalId)
    }
  },
}
