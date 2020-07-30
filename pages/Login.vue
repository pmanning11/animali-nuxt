<template>
  <div class="min-h-screen bg-white flex">
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
            <a
              href="#"
              class="font-medium text-animali-600 hover:text-animali-500 focus:outline-none focus:underline transition ease-in-out duration-150"
            >
              start your 14-day free trial
            </a>
          </p>
        </div>

        <div class="mt-8">
          <div class="mt-6">
            <form action="#" method="POST">
              <div>
                <label
                  for="email"
                  class="block text-sm font-medium leading-5 text-gray-700"
                >
                  Email address
                </label>
                <div class="mt-1 rounded-md shadow-sm">
                  <input
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
                >
                  Password
                </label>
                <div class="mt-1 rounded-md shadow-sm">
                  <input
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
                    id="remember_me"
                    type="checkbox"
                    class="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <label
                    for="remember_me"
                    class="ml-2 block text-sm leading-5 text-gray-900"
                  >
                    Remember me
                  </label>
                </div>

                <div class="text-sm leading-5">
                  <a
                    href="#"
                    class="font-medium text-animali-600 hover:text-animali-500 focus:outline-none focus:underline transition ease-in-out duration-150"
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>

              <div class="mt-6">
                <span class="block w-full rounded-md shadow-sm">
                  <button
                    type="submit"
                    class="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-animali-700 hover:bg-primary focus:outline-none active:bg-secondary transition duration-150 ease-in-out"
                    @click.prevent="login"
                  >
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
        alt=""
      />
      <!-- <img
        class="absolute inset-0 h-full w-full object-cover"
        src="https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
        alt=""
      /> -->
    </div>
  </div>
</template>

<script>
// import LoginFirebase from '../components/auth/LoginFirebase.vue'
import Logo from '../components/Logo'

export default {
  layout: 'blank',

  components: {
    // LoginFirebase,
    Logo,
  },

  data() {
    return {
      loading: false,
      email: '',
      password: '',
    }
  },

  methods: {
    async login() {
      this.loading = true
      try {
        console.log('began login function')
        await this.$store.dispatch('login', {
          email: this.email,
          password: this.password,
        })
        this.$router.push('/')
      } catch (error) {
        this.loading = false
        console.error(error.message)
      }
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
