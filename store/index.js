import { registerVersion } from 'firebase'

export const strict = false

export const state = () => ({
  user: null,
  species: [],
  animals: [],
  encounters: [],
  notification: null,
  bodyOverlay: null,
})

export const mutations = {
  // /////////////////////////////////////////////
  // User/Account
  // /////////////////////////////////////////////
  SET_USER(state, user) {
    state.user = user
  },

  UPDATE_USER(state, payload) {
    for (const property of Object.keys(payload)) {
      state.user[property] = payload[property]
    }
  },

  // ON_AUTH_STATE_CHANGED_MUTATION: (state, { authUser, claims }) => {
  //   // Do this:
  //   state.user.id = authUser.uid
  //   state.user.email = authUser.email
  //   state.user.emailVerified = authUser.emailVerified

  //   // // Or this:
  //   // const { uid, email, emailVerified } = authUser
  //   // state.user = { uid, email, emailVerified }
  // },

  // /////////////////////////////////////////////
  // Animals
  // /////////////////////////////////////////////
  SET_ANIMALS(state, animals) {
    state.animals = animals
  },
  // ADD_ANIMAL(state, animal) {
  //   console.log(animal)
  //   state.animals.push(animal)
  // },
  UPDATE_ANIMAL(state, animal) {
    const animalIndex = state.animals.findIndex((a) => a.id === animal.id)
    Object.assign(state.animals[animalIndex], animal)
  },
  REMOVE_RECORD(state, itemId) {
    const animalIndex = state.animals.findIndex((u) => u.id === itemId)
    state.animals.splice(animalIndex, 1)
  },

  // /////////////////////////////////////////////
  // Encounters
  // /////////////////////////////////////////////
  SET_ENCOUNTERS(state, encounters) {
    state.encounters = encounters
  },
  // /////////////////////////////////////////////
  // Notifications
  // /////////////////////////////////////////////
  SET_NOTIFICATION(state, notification) {
    state.notification = notification
  },

  // ////////////////////////////////////////////
  // UI
  // ////////////////////////////////////////////
  TOGGLE_CONTENT_OVERLAY(state, val) {
    state.bodyOverlay = val
  },
}

export const actions = {
  // /////////////////////////////////////////////
  // User/Account
  // /////////////////////////////////////////////
  async logout({ commit }) {
    await this.$fireAuth.signOut()
    commit('SET_USER', null)
    this.$router.push('/login')
  },

  async register({ commit }, { data }) {
    try {
      // await this.$fireAuth.createUserWithEmailAndPassword(email, password)
      // const user = this.$fireAuth.currentUser
      // var actionCodeSettings = {
      //   url: 'https://app.animali.life/dashboard?email=verified',
      // }
      // await user.sendEmailVerification(actionCodeSettings)
      // const userInfo = {
      //   id: user.uid,
      //   email: user.email,
      //   verified: user.emailVerified,
      // }
      // commit('SET_USER', userInfo)
    } catch (error) {
      const self = this
      if (error.code === 'auth/email-already-in-use') {
        console.log(error)
      }
    }
  },

  async login({ commit }, { checkbox_remember_me, email, password }) {
    const self = this

    try {
      // If remember_me is enabled change firebase Persistence
      if (!checkbox_remember_me) {
        this.$fireAuth
          .setPersistence(this.$fireAuthObj.Auth.Persistence.SESSION)
          .then(async function() {
            const user = await self.$fireAuth.signInWithEmailAndPassword(
              email,
              password
            )
            self.$router.push('/dashboard')
          })
          .catch(function(err) {
            console.log('error here: ', err)
            throw new Error('An Error Ocurred trying to connect with FB: ', err)
            commit('SET_NOTIFICATION', err)
          })
      } else {
        // If Remember me NOT checked -> Try to login
        const user = await this.$fireAuth.signInWithEmailAndPassword(
          email,
          password
        )
        this.$router.push('/dashboard')
      }
    } catch (error) {
      throw new Error('An Error Ocurred trying to connect with FB: ', error)
    }
  },

  async onAuthStateChanged({ commit }, { authUser, claims }) {
    console.log('getUserInfo from onauthstatechanged')
    const userInfo = {}
    if (authUser) {
      // get the user data from firestore
      await this.$fireStore
        .collection('users')
        .doc(authUser.uid)
        .get()
        .then((snapshot) => {
          const currentUser = snapshot.data()
          userInfo.firstName = currentUser.firstName
          userInfo.lastName = currentUser.lastName
          userInfo.email = currentUser.email
          userInfo.programId = currentUser.programId
          userInfo.userRole = currentUser.userRole
        })

      await this.$fireStore
        .collection('programs')
        .doc(userInfo.programId)
        .get()
        .then((snapshot) => {
          const program = snapshot.data()
          const dateFoundedTimestamp = this.$fireStoreObj.Timestamp.fromDate(
            new Date(program.dateFounded.seconds * 1000)
          ).toDate()
          userInfo.programName = program.programName
          userInfo.programSlug = program.programSlug
          userInfo.imageLogo = program.imageLogo
          userInfo.imageHeader = program.imageHeader
          userInfo.description = program.description
          userInfo.dateFounded = dateFoundedTimestamp
          userInfo.programEmail = program.programEmail
          userInfo.isPublic = program.isPublic
          userInfo.linkDonate = program.linkDonate
          userInfo.linkFacebook = program.linkFacebook
          userInfo.linkInstagram = program.linkInstagram
          userInfo.linkTwitter = program.linkTwitter
          userInfo.linkWebsite = program.linkWebsite
          userInfo.linkYoutube = program.linkYoutube
          userInfo.locationArea = program.locationArea
          userInfo.locationCity = program.locationCity
          userInfo.locationCountry = program.locationCountry
          userInfo.locationCoordinates = program.locationCoordinates
          userInfo.primarySpecies = program.primarySpecies
          userInfo.totalEncounters = program.totalEncounters
        })

      commit('SET_USER', userInfo)
      this.$router.push('/dashboard')
    } else {
      console.log('Auth State Changed -> No User')
      commit('SET_USER', null)
      authUser = null
      claims = null
    }
  },

  updateUser({ commit }, payload) {
    const user = this.$fireAuth.currentUser
    const self = this
    // Update the users fireAuth displayname and email
    user
      .updateProfile({
        displayName: `${payload.firstName} ${payload.lastName}`,
        email: payload.email,
      })
      .then(async () => {
        // Update user name, email in firestore
        await this.$fireStore
          .collection('users')
          .doc(user.uid)
          .set(
            {
              // all the deets
              firstName: payload.firstName,
              lastName: payload.lastName,
              email: payload.email,
            },
            { merge: true }
          )

        // Update the program details
        await this.$fireStore
          .collection('programs')
          .doc(payload.programId)
          .update({
            isPublic: payload.isPublic,
            programName: payload.programName,
            primarySpecies: payload.primarySpecies,
            description: payload.description,
            programEmail: payload.programEmail,
            programSlug: payload.programSlug,
            locationCity: payload.locationCity,
            dateFounded: payload.dateFounded,
            locationArea: payload.locationArea,
            locationCountry: payload.locationCountry,
            linkWebsite: payload.linkWebsite,
            linkDonate: payload.linkDonate,
            linkTwitter: payload.linkTwitter,
            linkFacebook: payload.linkFacebook,
            linkInstagram: payload.linkInstagram,
            linkYoutube: payload.linkYoutube,
          })

        // Update the store
        commit('UPDATE_USER', payload)

        // If reload is required to get fresh data after update
        // Reload current page
        if (payload.isReloadRequired) {
          self.$router.go(self.$router.currentRoute)
        }
      })
      .catch((err) => {
        console.log(err)
      })
  },

  updateLogo({ commit }, payload) {
    const programId = payload.programId

    const ref = this.$fireStorage.ref(
      `programs/${programId}/${programId}_logo.jpg`
    )
    console.log(ref)
    const self = this
    ref.put(payload.file).then(function(snapshot) {
      // Upload completed successfully, now we can get the download URL
      snapshot.ref.getDownloadURL().then(function(downloadURL) {
        console.log('File available at', downloadURL)
        // update photoURL in db and localstorage
        self.$fireStore
          .collection('programs')
          .doc(programId)
          .update({
            imageLogo: downloadURL,
          })
          .then(function() {
            console.log('Document successfully updated!')
            // update photoUrl in localstorage
            const localPayload = {
              imageLogo: downloadURL,
            }
            commit('UPDATE_USER', localPayload, { root: true })
            // If reload is required to get fresh data after update
            // Reload current page
            if (payload.isReloadRequired) {
              self.$router.go(self.$router.currentRoute)
              // router.push(router.currentRoute.query.to || '/settings')
            }
          })
          .catch(function(error) {
            // The document probably doesn't exist.
            console.error('Error updating document: ', error)
          })
      })
    })
  },

  updateHeader({ commit }, payload) {
    const programId = payload.programId

    const ref = this.$fireStorage.ref(
      `programs/${programId}/${programId}_header.jpg`
    )
    console.log(ref)
    const self = this
    ref.put(payload.file).then(function(snapshot) {
      // Upload completed successfully, now we can get the download URL
      snapshot.ref.getDownloadURL().then(function(downloadURL) {
        console.log('File available at', downloadURL)
        // update photoURL in db and localstorage
        self.$fireStore
          .collection('programs')
          .doc(programId)
          .update({
            imageHeader: downloadURL,
          })
          .then(function() {
            console.log('Document successfully updated!')
            // update photoUrl in localstorage
            const localPayload = {
              imageHeader: downloadURL,
            }
            commit('UPDATE_USER', localPayload, { root: true })
            // If reload is required to get fresh data after update
            // Reload current page
            if (payload.isReloadRequired) {
              self.$router.go(self.$router.currentRoute)
              // router.push(router.currentRoute.query.to || '/settings')
            }
          })
          .catch(function(error) {
            // The document probably doesn't exist.
            console.error('Error updating document: ', error)
          })
      })
    })
  },

  // /////////////////////////////////////////////
  // Animals
  // /////////////////////////////////////////////
  updateAnimal({ commit }, payload) {
    const animal = payload.animal
    const photoChanged = payload.photoChanged
    const animalRef = db.collection('animals').doc(animal.id)

    return animalRef
      .update({
        sex: animal.sex,
        status: animal.status,
        name: animal.name,
      })
      .then(() => {
        if (photoChanged) {
          // Upload animal profile pic
          const animalProfileRef = storage.ref(
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

  async fetchAnimals({ commit }, programId) {
    try {
      const animals = []
      // retrieve a collection
      await this.$fireStore
        .collection('animals')
        .where('managedBy', '==', programId)
        .get()
        .then(async (querySnapshot) => {
          await querySnapshot.docs.map(async (doc) => {
            // Get profile image
            const animalProfileRef = this.$fireStorage.ref(
              `animals/${doc.id}/profile_pic.jpg`
            )
            // Get the download URL
            await animalProfileRef
              .getDownloadURL()
              .then((url) => {
                const animal = doc.data()
                animal.profile_pic = url
                animals.push(animal)
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
      commit('SET_ANIMALS', animals)
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

  // /////////////////////////////////////////////
  // Encounters
  // /////////////////////////////////////////////
  async fetchEncounters({ commit }, programId) {
    const animalsRef = await this.$fireStore
      .collection('animals')
      .where('managedBy', '==', programId)

    await animalsRef
      .get()
      .then(async (querySnapshot) => {
        const encounters = []
        await querySnapshot.forEach((doc) => {
          this.$fireStore
            .collection('animals')
            .doc(doc.id)
            .collection('encounters')
            .get()
            .then((snapshot) => {
              snapshot.forEach((encounter) => {
                const singleEncounter = encounter.data()
                singleEncounter.id = doc.id
                encounters.push(singleEncounter)
              })
            })
            .catch((err) => {
              console.log(err)
            })
        })
        commit('SET_ENCOUNTERS', encounters)
      })
      .catch(function(error) {
        console.log('Error getting encounters:', error)
      })
  },
}
