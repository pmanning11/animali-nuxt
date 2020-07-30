/*=========================================================================================
  File Name: moduleAuthActions.js
  Description: Auth Module Actions
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

// import firebase from 'firebase/app'
// import 'firebase/auth'
// import 'firebase/firestore'
// import 'firebase/storage'
// import router from '@/router'
import slugify from 'slugify'

export default {
  loginAttempt({ dispatch }, payload) {
    // New payload for login action
    const newPayload = {
      userDetails: payload.userDetails,
      notify: payload.notify,
      closeAnimation: payload.closeAnimation,
    }

    // If remember_me is enabled change firebase Persistence
    if (!payload.checkbox_remember_me) {
      // Change firebase Persistence
      this.$fireAuth
        .setPersistence(this.$fireAuth.Auth.Persistence.SESSION)

        // If success try to login
        .then(function() {
          dispatch('login', newPayload)
        })

        // If error notify
        .catch(function(err) {
          // Close animation if passed as payload
          if (payload.closeAnimation) payload.closeAnimation()

          payload.notify({
            time: 2500,
            title: 'Error',
            text: err.message,
            iconPack: 'feather',
            icon: 'icon-alert-circle',
            color: 'danger',
          })
        })
    } else {
      // Try to login
      dispatch('login', newPayload)
    }
  },

  login({ commit, state, dispatch }, payload) {
    // If user is already logged in notify and exit
    if (state.isUserLoggedIn()) {
      // Close animation if passed as payload
      if (payload.closeAnimation) payload.closeAnimation()

      payload.notify({
        title: 'Login Attempt',
        text: 'You are already logged in!',
        iconPack: 'feather',
        icon: 'icon-alert-circle',
        color: 'warning',
      })

      return false
    }

    // Try to sigin
    this.$fireAuth
      .signInWithEmailAndPassword(
        payload.userDetails.email,
        payload.userDetails.password
      )
      .then(
        (result) => {
          // Set FLAG username update required for updating username
          let isUsernameUpdateRequired = false

          // if username is provided and updateUsername FLAG is true
          // set local username update FLAG to true
          // try to update username
          if (payload.updateUsername && payload.userDetails.displayName) {
            isUsernameUpdateRequired = true
            console.log('update username called')

            dispatch('updateUsername', {
              user: result.user,
              username: payload.userDetails.displayName,
              notify: payload.notify,
              isReloadRequired: true,
            })
          }

          // Close animation if passed as payload
          if (payload.closeAnimation) payload.closeAnimation()

          // if username update is not required
          // just reload the page to get fresh data
          // set new user data in localstorage
          if (!isUsernameUpdateRequired) {
            console.log('DO NOT update username  -> UPDATE_USER_INFO')
            router.push(router.currentRoute.query.to || '/')
            commit('UPDATE_USER_INFO', result.user.providerData[0], {
              root: true,
            })
          }
        },
        (err) => {
          // Close animation if passed as payload
          if (payload.closeAnimation) payload.closeAnimation()

          payload.notify({
            time: 2500,
            title: 'Error',
            text: err.message,
            iconPack: 'feather',
            icon: 'icon-alert-circle',
            color: 'danger',
          })
        }
      )
  },

  // Google Login
  // loginWithGoogle({ commit, state }, payload) {
  //   if (state.isUserLoggedIn()) {
  //     payload.notify({
  //       title: 'Login Attempt',
  //       text: 'You are already logged in!',
  //       iconPack: 'feather',
  //       icon: 'icon-alert-circle',
  //       color: 'warning',
  //     })
  //     return false
  //   }
  //   const provider = new firebase.auth.GoogleAuthProvider()

  //   firebase
  //     .auth()
  //     .signInWithPopup(provider)
  //     .then((result) => {
  //       router.push(router.currentRoute.query.to || '/')
  //       commit('UPDATE_USER_INFO', result.user.providerData[0], { root: true })
  //     })
  //     .catch((err) => {
  //       payload.notify({
  //         time: 2500,
  //         title: 'Error',
  //         text: err.message,
  //         iconPack: 'feather',
  //         icon: 'icon-alert-circle',
  //         color: 'danger',
  //       })
  //     })
  // },

  // Facebook Login
  // loginWithFacebook({ commit, state }, payload) {
  //   if (state.isUserLoggedIn()) {
  //     payload.notify({
  //       title: 'Login Attempt',
  //       text: 'You are already logged in!',
  //       iconPack: 'feather',
  //       icon: 'icon-alert-circle',
  //       color: 'warning',
  //     })
  //     return false
  //   }
  //   const provider = new firebase.auth.FacebookAuthProvider()

  //   firebase
  //     .auth()
  //     .signInWithPopup(provider)
  //     .then((result) => {
  //       router.push(router.currentRoute.query.to || '/')
  //       commit('UPDATE_USER_INFO', result.user.providerData[0], { root: true })
  //     })
  //     .catch((err) => {
  //       payload.notify({
  //         time: 2500,
  //         title: 'Error',
  //         text: err.message,
  //         iconPack: 'feather',
  //         icon: 'icon-alert-circle',
  //         color: 'danger',
  //       })
  //     })
  // },

  // Twitter Login
  // loginWithTwitter({ commit, state }, payload) {
  //   if (state.isUserLoggedIn()) {
  //     payload.notify({
  //       title: 'Login Attempt',
  //       text: 'You are already logged in!',
  //       iconPack: 'feather',
  //       icon: 'icon-alert-circle',
  //       color: 'warning',
  //     })
  //     return false
  //   }
  //   const provider = new firebase.auth.TwitterAuthProvider()

  //   firebase
  //     .auth()
  //     .signInWithPopup(provider)
  //     .then((result) => {
  //       router.push(router.currentRoute.query.to || '/')
  //       commit('UPDATE_USER_INFO', result.user.providerData[0], { root: true })
  //     })
  //     .catch((err) => {
  //       payload.notify({
  //         time: 2500,
  //         title: 'Error',
  //         text: err.message,
  //         iconPack: 'feather',
  //         icon: 'icon-alert-circle',
  //         color: 'danger',
  //       })
  //     })
  // },

  // Github Login
  // loginWithGithub({ commit, state }, payload) {
  //   if (state.isUserLoggedIn()) {
  //     payload.notify({
  //       title: 'Login Attempt',
  //       text: 'You are already logged in!',
  //       iconPack: 'feather',
  //       icon: 'icon-alert-circle',
  //       color: 'warning',
  //     })
  //     return false
  //   }
  //   const provider = new firebase.auth.GithubAuthProvider()

  //   firebase
  //     .auth()
  //     .signInWithPopup(provider)
  //     .then((result) => {
  //       router.push(router.currentRoute.query.to || '/')
  //       commit('UPDATE_USER_INFO', result.user.providerData[0], { root: true })
  //     })
  //     .catch((err) => {
  //       payload.notify({
  //         time: 2500,
  //         title: 'Error',
  //         text: err.message,
  //         iconPack: 'feather',
  //         icon: 'icon-alert-circle',
  //         color: 'danger',
  //       })
  //     })
  // },

  registerUser({ dispatch }, payload) {
    // create user using firebase
    this.$fireAuth
      .createUserWithEmailAndPassword(
        payload.userDetails.email,
        payload.userDetails.password
      )
      .then(async () => {
        // Get the user uid to write the User to Firestore
        const userId = await this.$fireAuth.currentUser.uid
        const today = await this.$fireStore.FieldValue.serverTimestamp()
        const slug = await slugify(payload.programName, {
          replacement: '-',
          // eslint-disable-next-line no-useless-escape
          remove: /[$*_+~.()'"!\=:@]/g,
          lower: true,
        })

        // Create Program
        this.$fireStore
          .collection('programs')
          .add({
            dateFounded: today,
            dateJoined: today,
            description: '',
            imageHeader: '',
            imageLogo: '',
            isPublic: false,
            linkDonate: '',
            linkFacebook: '',
            linkTwitter: '',
            linkWebsite: '',
            linkYoutube: '',
            locationArea: '',
            locationCity: '',
            locationCoordinates: {},
            locationCountry: '',
            name: payload.programName,
            ownerId: userId,
            primarySpecies: '',
            programEmail: payload.userDetails.email,
            slug,
            totalEncounters: 0,
          })
          .then((program) => {
            // Create User
            this.$fireStore
              .collection('users')
              .doc(userId)
              .set({
                name: payload.userDetails.displayName,
                email: payload.userDetails.email,
                programId: program.id,
                userRole: 'admin',
              })
          })
          .then(() => {
            console.log(
              `wrote ${payload.userDetails.displayName} to database with program: ${payload.programName}`
            )
          })
          .catch((err) => {
            console.log(err)
          })
      })
      .then(
        () => {
          console.log('notify payload')
          payload.notify({
            title: 'Account Created',
            text: 'You are successfully registered!',
            iconPack: 'feather',
            icon: 'icon-check',
            color: 'success',
          })

          const loginPayload = {
            userDetails: {
              name: payload.userDetails.displayName,
              email: payload.userDetails.email,
              password: payload.userDetails.password,
              programName: payload.programName,
            },
            notify: payload.notify,
            updateUsername: true,
          }
          dispatch('login', loginPayload)
        },
        (error) => {
          payload.notify({
            title: 'Error',
            text: error.message,
            iconPack: 'feather',
            icon: 'icon-alert-circle',
            color: 'danger',
          })
        }
      )
  },

  // update the user name
  updateUsername({ commit }, payload) {
    const user = this.$fireAuth.currentUser
    user
      .updateProfile({
        displayName: payload.displayName,
        email: payload.email,
      })
      .then(() => {
        // Update user name / email in firestore
        this.$fireStore
          .collection('users')
          .doc(user.uid)
          .set(
            {
              name: payload.displayName,
              email: payload.email,
            },
            { merge: true }
          )
        // If username update is success
        // update in localstorage
        const newUserData = Object.assign({})
        newUserData.displayName = payload.displayName
        newUserData.email = payload.email
        newUserData.programName = payload.programName
        newUserData.programSlug = payload.programSlug
        newUserData.programEmail = payload.programEmail
        newUserData.isPublic = payload.isPublic
        commit('UPDATE_USER_INFO', newUserData, { root: true })

        // If reload is required to get fresh data after update
        // Reload current page
        if (payload.isReloadRequired) {
          router.go(router.currentRoute)
          // router.push(router.currentRoute.query.to || '/')
        }
      })
      .catch((err) => {
        payload.notify({
          time: 8800,
          title: 'Error',
          text: err.message,
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'danger',
        })
      })
  },

  // update the program links
  updateLinks({ commit }, payload) {
    const programId = payload.programId

    // update in firebase
    this.$fireStore
      .collection('programs')
      .doc(programId)
      .update({
        linkWebsite: payload.linkWebsite || '',
        linkDonate: payload.linkDonate || '',
        linkTwitter: payload.linkTwitter || '',
        linkFacebook: payload.linkFacebook || '',
        linkYoutube: payload.linkYoutube || '',
        linkInstagram: payload.linkInstagram || '',
      })
      .then(() => {
        console.log('Document successfully updated!')
        // commit action to update state
        // update in localstorage
        commit('UPDATE_USER_INFO', payload, { root: true })
        // If reload is required to get fresh data after update
        // Reload current page
        if (payload.isReloadRequired) {
          router.go(router.currentRoute)
          // router.push(router.currentRoute.query.to || '/settings')
        }
        payload.notify({
          color: 'success',
          title: 'Links Successfully Updated',
          text: 'Your program links have been successfully updated',
        })
      })
      .catch((err) => {
        // The document probably doesn't exist.
        payload.notify({
          color: 'error',
          title: 'Update Failed',
          text: `There was an error updating your links: ${err}`,
        })
      })
  },

  // update the program info
  updateProgram({ commit }, payload) {
    const programId = payload.programId

    const dateFoundedTimestamp = this.$fireStore.Timestamp.fromDate(
      new Date(payload.dateFounded)
    ).toDate()

    // update in firebase
    this.$fireStore
      .collection('programs')
      .doc(programId)
      .update({
        description: payload.description,
        dateFounded: dateFoundedTimestamp,
        primarySpecies: payload.primarySpecies,
        locationCity: payload.locationCity,
        locationArea: payload.locationArea,
        locationCountry: payload.locationCountry,
      })
      .then(() => {
        console.log('Document successfully updated!')
        // commit action to update state
        // update in localstorage
        commit('UPDATE_USER_INFO', payload, { root: true })
        // If reload is required to get fresh data after update
        // Reload current page
        if (payload.isReloadRequired) {
          router.go(router.currentRoute)
          // router.push(router.currentRoute.query.to || '/settings')
        }
        payload.notify({
          color: 'success',
          title: 'Program Successfully Updated',
          text: 'Your program has been successfully updated',
        })
      })
      .catch((err) => {
        // The document probably doesn't exist.
        payload.notify({
          color: 'error',
          title: 'Update Failed',
          text: `There was an error updating your program: ${err}`,
        })
      })
  },

  updateLogo({ commit }, payload) {
    const programId = payload.programId

    const ref = firebase
      .storage()
      .ref(`programs/${programId}/${programId}_logo.jpg`)
    console.log(ref)
    ref.put(payload.file).then(function(snapshot) {
      // Upload completed successfully, now we can get the download URL
      snapshot.ref.getDownloadURL().then(function(downloadURL) {
        console.log('File available at', downloadURL)
        // update photoURL in db and localstorage
        const programRef = this.$fireStore.collection('programs').doc(programId)

        // Set the "capital" field of the city 'DC'
        return programRef
          .update({
            imageLogo: downloadURL,
          })
          .then(function() {
            console.log('Document successfully updated!')
            // update photoUrl in localstorage
            const localPayload = {
              photoURL: downloadURL,
            }
            commit('UPDATE_USER_INFO', localPayload, { root: true })
            // If reload is required to get fresh data after update
            // Reload current page
            if (payload.isReloadRequired) {
              router.go(router.currentRoute)
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

    const ref = firebase
      .storage()
      .ref(`programs/${programId}/${programId}_header.jpg`)
    console.log(ref)
    ref.put(payload.file).then(function(snapshot) {
      // Upload completed successfully, now we can get the download URL
      snapshot.ref.getDownloadURL().then(function(downloadURL) {
        console.log('File available at', downloadURL)
        // update photoURL in db and localstorage
        const programRef = this.$fireStore.collection('programs').doc(programId)

        // Set the "capital" field of the city 'DC'
        return programRef
          .update({
            imageHeader: downloadURL,
          })
          .then(function() {
            console.log('Document successfully updated!')
            // update photoUrl in localstorage
            const localPayload = {
              imageHeader: downloadURL,
            }
            commit('UPDATE_USER_INFO', localPayload, { root: true })
            // If reload is required to get fresh data after update
            // Reload current page
            if (payload.isReloadRequired) {
              router.go(router.currentRoute)
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
}
