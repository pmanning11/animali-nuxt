const actions = {
  // /////////////////////////////////////////////
  // User/Account
  // /////////////////////////////////////////////

  updateUserInfo({ commit }, payload) {
    commit('UPDATE_USER_INFO', payload)
  },

  // updateUserRole({ dispatch }, payload) {
  //   // Change client side
  //   payload.aclChangeRole(payload.userRole)

  //   // Make API call to server for changing role

  //   // Change userInfo in localStorage and store
  //   dispatch('updateUserInfo', { userRole: payload.userRole })
  // },

  //   async logout({ commit }) {
  //     // if user is logged in via firebase
  //     const firebaseCurrentUser = this.$fireAuth.currentUser

  //     if (firebaseCurrentUser) {
  //       this.$fireAuth.signOut().then(() => {
  //         this.$router.push('/login').catch((e) => {
  //           console.log(e)
  //         })
  //       })
  //     }

  //     // Change role on logout. Same value as initialRole of acj.js
  //     localStorage.removeItem('userInfo')
  //     commit('SET_USER', null)
  //   },
  // }

  async login({ commit }, { email, password }) {
    try {
      // console.log('trying to creating user')
      await this.$fireAuth.createUserWithEmailAndPassword(email, password)
      const user = this.$fireAuth.currentUser
      await user.sendEmailVerification()
      commit('SET_USER', user.user)
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        // console.log('email already exists trying to sign in user user')
        try {
          const user = await this.$fireAuth.signInWithEmailAndPassword(
            email,
            password
          )
          commit('SET_USER', user.user)
        } catch (error) {
          throw new Error('An Error Ocurred: ', error)
        }
      } else {
        throw new Error('An Error Ocurred: ', error)
      }
    }
  },

  async logout({ commit }) {
    await this.$fireAuth.signOut()
    commit('SET_USER', null)
  },
}
export default actions
