/*=========================================================================================
  File Name: state.js
  Description: Vuex Store - state
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

// import firebase from 'firebase/app'
// import 'firebase/auth'
// import 'firebase/firestore'
// import navbarSearchAndPinList from '@/layouts/components/navbar/navbarSearchAndPinList'
// import themeConfig, { colors } from '@/../themeConfig.js'

// /////////////////////////////////////////////
// Helper
// /////////////////////////////////////////////

// *From Auth - Data will be received from auth provider
// const userDefaults = {
//   uid: 0, // From Auth
//   displayName: 'n/a', // From Auth
//   about:
//     'Dessert chocolate cake lemon drops jujubes. Biscuit cupcake ice cream bear claw brownie brownie marshmallow.',
//   photoURL: require('@/assets/images/portrait/small/avatar-s-11.jpg'), // From Auth
//   project: 'n/a', // from Auth
//   status: 'online',
//   userRole: 'admin',
// }

// const userDefaults = {
//   uid: 'n/a', // From Auth
//   displayName: 'n/a', // From Auth
//   about: 'n/a',
//   photoURL: require('@/assets/images/portrait/small/avatar-s-11.jpg'), // From Auth
//   project: 'n/a', // from Auth
//   status: 'offline',
//   userRole: 'viewer', // from Auth
// }

// const userDefaults = {}

const userInfoLocalStorage = JSON.parse(localStorage.getItem('userInfo')) || {}

const getUserInfo = () => {
  console.log('getUserInfo')
  const userInfo = {}

  this.$fireAuth.onAuthStateChanged(async function(user) {
    if (user) {
      // User is signed in.
      await this.$fireStore
        .collection('users')
        .doc(user.uid)
        .get()
        .then((snapshot) => {
          const currentUser = snapshot.data()
          userInfo.name = currentUser.name
          userInfo.programId = currentUser.programId
          userInfo.userRole = currentUser.userRole
        })

      await this.$fireStore
        .collection('programs')
        .doc(userInfo.programId)
        .get()
        .then((snapshot) => {
          const program = snapshot.data()
          const dateFoundedTimestamp = firebase.firestore.Timestamp.fromDate(
            new Date(program.dateFounded.seconds * 1000)
          ).toDate()
          userInfo.programName = program.name
          userInfo.programSlug = program.slug
          userInfo.imageLogo = program.imageLogo
          userInfo.imageHeader = program.imageHeader
          userInfo.description = program.description
          userInfo.dateFounded = dateFoundedTimestamp
          userInfo.programEmail = program.email
          userInfo.isPublic = program.isPublic
          userInfo.linkDonate = program.linkDonate
          userInfo.linkFacebook = program.linkFacebook
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

      // Update property in user
      Object.keys(userInfo).forEach((key) => {
        // If property is defined in localStorage => Use that
        userInfo[key] = userInfoLocalStorage[key]
          ? userInfoLocalStorage[key]
          : userInfo[key]
      })

      // console.log('userInfo: ', userInfo)
      localStorage.setItem('userInfo', JSON.stringify(userInfo))
      // console.log('localstorage: ', userInfoLocalStorage)

      // Include properties from localStorage
      // Object.keys(userInfoLocalStorage).forEach((key) => {
      //   if (userInfo[key] === undefined && userInfoLocalStorage[key] !== null)
      //     userInfo[key] = userInfoLocalStorage[key]
      // })
    } else {
      // No user is signed in.
      console.log('no user logged in')
    }
  })

  // Include properties from localStorage
  // Object.keys(userInfoLocalStorage).forEach((key) => {
  //   if (userInfo[key] === undefined && userInfoLocalStorage[key] !== null)
  //     userInfo[key] = userInfoLocalStorage[key]
  // })

  return userInfo
}

// Set default values for active-user
// More data can be added by auth provider or other plugins/packages
// const getUserInfo = () => {
//   const userInfo = {}

//   // Update property in user
//   Object.keys(userDefaults).forEach((key) => {
//     // If property is defined in localStorage => Use that
//     userInfo[key] = userInfoLocalStorage[key]
//       ? userInfoLocalStorage[key]
//       : userDefaults[key]
//   })

//   // Include properties from localStorage
//   Object.keys(userInfoLocalStorage).forEach((key) => {
//     if (userInfo[key] === undefined && userInfoLocalStorage[key] !== null)
//       userInfo[key] = userInfoLocalStorage[key]
//   })

//   return userInfo
// }

// Check if device is touch device
// This is used to remove perfect scrollbar from touch devices
// Using Dynamic components
const is_touch_device = () => {
  const prefixes = ' -webkit- -moz- -o- -ms- '.split(' ')
  const mq = function(query) {
    return window.matchMedia(query).matches
  }

  if ('ontouchstart' in window || window.DocumentTouch) {
    return true
  }

  // include the 'heartz' as a way to have a non matching MQ to help terminate the join
  // https://git.io/vznFH
  const query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('')
  return mq(query)
}

// /////////////////////////////////////////////
// State
// /////////////////////////////////////////////

const state = {
  user: null,
  // AppActiveUser: getUserInfo(),
  // bodyOverlay: false,
  // isVerticalNavMenuActive: true,
  // is_touch_device: is_touch_device(),
  // mainLayoutType: themeConfig.mainLayoutType || 'vertical',
  // navbarSearchAndPinList,
  // reduceButton: themeConfig.sidebarCollapsed,
  // verticalNavMenuWidth: 'default',
  // verticalNavMenuItemsMin: false,
  // scrollY: 0,
  // starredPages: navbarSearchAndPinList['pages'].data.filter(
  //   (page) => page.is_bookmarked
  // ),
  // theme: themeConfig.theme || 'light',
  // themePrimaryColor: colors.primary,
  // // Can be used to get current window with
  // // Note: Above breakpoint state is for internal use of sidebar & navbar component
  // windowWidth: null,
}

export default state
