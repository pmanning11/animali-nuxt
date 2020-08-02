<template>
  <div class="min-h-screen bg-white flex">
    <Notification
      class="z-50"
      v-show="showNotification"
      :title="notificationTitle"
      :body="notificationBody"
      :status="notificationStatus"
    />
    <PasswordResetModal
      v-show="showPasswordResetModal"
      @closeModal="showPasswordResetModal = false"
      @showNotification="presentNotification"
    />
    <div
      class="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24"
    >
      <div class="mx-auto w-full max-w-sm">
        <div>
          <Logo class="h-12 w-auto" alt="Animali" />
          <h2 class="mt-6 text-3xl leading-9 font-extrabold text-secondary">
            Sign in to your account
          </h2>
          <p class="mt-2 text-sm leading-5 text-gray-600 max-w">
            Or
            <nuxt-link
              to="/register"
              class="font-medium text-animali-600 hover:text-animali-500 focus:outline-none focus:underline transition ease-in-out duration-150"
              >register for a 30-day free trial</nuxt-link
            >
          </p>
        </div>

        <div class="mt-8">
          <!-- <div>
            <div>
              <p class="text-sm leading-5 font-medium text-gray-700">
                Sign in with
              </p>

              <div class="mt-1 grid grid-cols-3 gap-3">
                <div>
                  <span class="w-full inline-flex rounded-md shadow-sm">
                    <button
                      type="button"
                      class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition duration-150 ease-in-out"
                      aria-label="Sign in with Facebook"
                    >
                      <svg
                        class="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </button>
                  </span>
                </div>

                <div>
                  <span class="w-full inline-flex rounded-md shadow-sm">
                    <button
                      type="button"
                      class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition duration-150 ease-in-out"
                      aria-label="Sign in with Twitter"
                    >
                      <svg
                        class="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"
                        />
                      </svg>
                    </button>
                  </span>
                </div>

                <div>
                  <span class="w-full inline-flex rounded-md shadow-sm">
                    <button
                      type="button"
                      class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition duration-150 ease-in-out"
                      aria-label="Sign in with GitHub"
                    >
                      <svg
                        class="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </button>
                  </span>
                </div>
              </div>
            </div>

            <div class="mt-6 relative">
              <div class="absolute inset-0 flex items-center">
                <div class="w-full border-t border-gray-300"></div>
              </div>
              <div class="relative flex justify-center text-sm leading-5">
                <span class="px-2 bg-white text-gray-500">
                  Or continue with
                </span>
              </div>
            </div>
          </div> -->

          <div class="mt-6">
            <form action="#" method="POST">
              <div>
                <label
                  for="email"
                  class="block text-sm font-medium leading-5 text-gray-700"
                  >Email address</label
                >
                <div class="mt-1 rounded-md shadow-sm">
                  <input
                    :disabled="isLoading"
                    v-model="email"
                    id="email"
                    type="email"
                    required
                    class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  />
                </div>
              </div>

              <div class="mt-6">
                <label
                  for="password"
                  class="block text-sm font-medium leading-5 text-gray-700"
                  >Password</label
                >
                <div class="mt-1 rounded-md shadow-sm">
                  <input
                    :disabled="isLoading"
                    v-model="password"
                    id="password"
                    type="password"
                    required
                    class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  />
                </div>
              </div>

              <div class="mt-6 flex items-center justify-between">
                <div class="flex items-center">
                  <input
                    v-model="checkbox_remember_me"
                    id="remember_me"
                    type="checkbox"
                    class="form-checkbox h-4 w-4 text-primary transition duration-150 ease-in-out"
                  />
                  <label
                    for="remember_me"
                    class="ml-2 block text-sm leading-5 text-gray-900"
                    >Remember me</label
                  >
                </div>

                <div class="text-sm leading-5">
                  <a
                    @click="showPasswordResetModal = true"
                    class="cursor-pointer font-medium text-animali-600 hover:text-animali-500 focus:outline-none focus:underline transition ease-in-out duration-150"
                    >Forgot your password?</a
                  >
                </div>
              </div>

              <div class="mt-6">
                <span class="block w-full rounded-md shadow-sm">
                  <button
                    :disabled="isLoading"
                    type="submit"
                    :class="
                      `${
                        isLoading ? 'opacity-75 cursor-not-allowed' : ''
                      } w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-animali-700 hover:bg-primary focus:outline-none active:bg-secondary transition duration-150 ease-in-out`
                    "
                    @click.prevent="login"
                  >
                    <svg
                      v-if="isLoading"
                      class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      viewBox="0 0 24 24"
                    >
                      <path
                        class="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sign in
                  </button>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="hidden lg:block relative w-0 flex-1">
      <img
        class="absolute inset-0 h-full w-full object-cover"
        src="https://source.unsplash.com/XSNmXUiEZqI/"
        alt="whale shark"
      />
    </div>
  </div>
</template>

<script>
import Logo from '../components/Logo'
import Notification from '../components/Notification'
import PasswordResetModal from '../components/PasswordResetModal'

export default {
  layout: 'blank',

  components: {
    Logo,
    Notification,
    PasswordResetModal,
  },

  data() {
    return {
      isLoading: false,
      checkbox_remember_me: false,
      showPasswordResetModal: false,
      showNotification: false,
      email: '',
      password: '',
      notificationTitle: '',
      notificationBody: '',
      notificationStatus: '',
    }
  },

  methods: {
    async login() {
      this.isLoading = true
      try {
        console.log('began login function')
        await this.$store
          .dispatch('login', {
            email: this.email,
            password: this.password,
            checkbox_remember_me: this.checkbox_remember_me,
          })
          .catch((err) => {
            this.isLoading = false
            console.log('mofuckin erra gah ', err)
          })
      } catch (error) {
        this.isLoading = false
        console.log('error logging in from login.vue: ', error)
      }
    },

    presentNotification(e) {
      console.log('present notification called')

      this.showPasswordResetModal = false
      this.showNotification = true
      this.notificationTitle = e.title
      this.notificationBody = e.body
      this.notificationStatus = e.status
      // Delay 1 second then hide notification
      setTimeout(() => {
        this.showNotification = false
      }, 5000)
    },
  },
}
</script>

<style>
.login-tabs-container {
  min-height: 505px;
}
.con-tab {
  padding-bottom: 14px;
}

.con-slot-tabs {
  margin-top: 1rem;
}

.gradient-bg {
  background: linear-gradient(105deg, #3cdfd9 1.79%, #1b4ea2 100%);
}
</style>
