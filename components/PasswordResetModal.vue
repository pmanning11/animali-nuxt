<template>
  <div
    class="fixed bottom-0 inset-x-0 z-10 px-4 pb-4 sm:inset-0 sm:flex sm:items-center sm:justify-center"
  >
    <!--
    Background overlay, show/hide based on modal state.

    Entering: "ease-out duration-300"
      From: "opacity-0"
      To: "opacity-100"
    Leaving: "ease-in duration-200"
      From: "opacity-100"
      To: "opacity-0"
  -->
    <transition
      enter-active-class="ease-out duration-300"
      enter-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="ease-in duration-200"
      leave-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div class="fixed inset-0 transition-opacity" @click="closeModal">
        <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
      </div>
    </transition>

    <!--
    Modal panel, show/hide based on modal state.

    Entering: "ease-out duration-300"
      From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      To: "opacity-100 translate-y-0 sm:scale-100"
    Leaving: "ease-in duration-200"
      From: "opacity-100 translate-y-0 sm:scale-100"
      To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
  -->
    <transition
      enter-active-class="ease-out duration-300"
      enter-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      enter-to-class="opacity-100 translate-y-0 sm:scale-100"
      leave-active-class="ease-in duration-200"
      leave-class="opacity-100 translate-y-0 sm:scale-100"
      leave-to-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
    >
      <div
        class="relative bg-white rounded-lg px-4 pt-5 pb-4 overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full sm:p-6"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-headline"
      >
        <div class="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
          <button
            type="button"
            class="text-gray-400 hover:text-gray-500 focus:outline-none focus:text-gray-500 transition ease-in-out duration-150"
            aria-label="Close"
            @click="closeModal"
          >
            <svg
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div class="sm:flex sm:items-start">
          <div class="mt-3 text-center sm:mt-0 sm:text-left">
            <h3
              class="text-lg leading-6 font-medium text-gray-900"
              id="modal-headline"
            >
              Forgot Your Password?
            </h3>
            <div class="mt-2">
              <p class="text-sm leading-5 text-gray-500">
                To reset your password input your email. We will send you a link
                to securely reset your password.
              </p>
            </div>
          </div>
        </div>
        <div class="w-full mt-3">
          <label for="password_reset_email" class="sr-only">Email</label>
          <div class="relative rounded-md shadow-sm">
            <input
              v-model="email"
              id="password_reset_email"
              :class="
                `${
                  error
                    ? 'border-red-300 text-red-900 placeholder-red-300 focus:border-red-300 focus:shadow-outline-red'
                    : ''
                } form-input block w-full sm:text-sm sm:leading-5`
              "
              placeholder="you@example.com"
            />
            <div
              v-if="error"
              class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"
            >
              <svg
                class="h-5 w-5 text-red-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </div>
          <p v-if="error" class="mt-2 text-sm text-red-600" id="email-error">
            {{ error }}
          </p>
        </div>
        <div class="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
          <span class="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
            <button
              type="button"
              @click="sendPasswordResetEmail"
              class="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-animali-700 text-base leading-6 font-medium text-white shadow-sm hover:bg-primary focus:outline-none focus:bg-secondary focus:shadow-outline-teal transition ease-in-out duration-150 sm:text-sm sm:leading-5"
            >
              Reset Password
            </button>
          </span>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import Notification from '../components/Notification'

export default {
  components: {
    Notification,
  },

  data() {
    return {
      email: '',
      error: null,
      loading: false,
    }
  },

  methods: {
    closeModal() {
      this.$emit('closeModal')
    },

    sendPasswordResetEmail() {
      this.error = null
      this.loading = true
      var actionCodeSettings = {
        url: 'https://app.animali.life/login?password=reset',
      }
      const self = this
      this.$fireAuth
        .sendPasswordResetEmail(this.email, actionCodeSettings)
        .then(function() {
          // Email sent.
          console.log('email sent')
          self.error = null
          self.loading = false
          // Delay 1 second then show email sent notification
          setTimeout(() => {
            self.$emit('showNotification', {
              title: 'Email sent',
              body: 'Check your email to reset your password',
            })
          }, 2000)
        })
        .catch(function(error) {
          // An error happened.
          if (error.code === 'auth/user-not-found') {
            self.error = error.message
            console.log(error.message)
          } else if (error.code === 'auth/invalid-email') {
            self.error = error.message
            console.log(error.message)
          }
        })
    },
  },
}
</script>
