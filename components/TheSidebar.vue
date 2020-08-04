<template>
  <div class="flex flex-col flex-grow bg-animali-900 pt-2 pb-4 overflow-y-auto">
    <nuxt-link
      to="/dashboard"
      id="logo"
      class="flex items-center flex-shrink-0 px-6 bg-primary"
    >
      <logo class="h-8 w-auto mr-4 fill-current text-primary" />
      <h1 class="font-national text-4xl font-medium text-primary">
        Animali
      </h1>
    </nuxt-link>
    <div class="mt-5 flex flex-1 flex-col">
      <nav class="flex-1 px-2 bg-animali-900">
        <nuxt-link
          to="/dashboard"
          class="group flex items-center px-2 py-2 text-md leading-5 font-medium text-white rounded-md focus:outline-none focus:bg-teal-500 hover:bg-teal-500 transition ease-in-out duration-150"
        >
          <svg
            class="mr-3 h-8 w-8 transition ease-in-out duration-150"
            fill="white"
            viewBox="0 0 20 20"
          >
            <path
              d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"
            />
          </svg>
          Dashboard
        </nuxt-link>
        <nuxt-link
          to="/list"
          class="mt-2 group flex items-center px-2 py-2 text-md leading-5 font-medium text-white rounded-md hover:text-white hover:bg-teal-500 focus:outline-none focus:text-white focus:bg-teal-500 transition ease-in-out duration-150"
        >
          <svg
            class="mr-3 h-8 w-8 transition ease-in-out duration-150"
            fill="white"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            />
          </svg>
          Animals
        </nuxt-link>
        <nuxt-link
          to="/map"
          class="mt-2 group flex items-center px-2 py-2 text-base leading-5 font-medium text-white rounded-md hover:text-white hover:bg-teal-500 focus:outline-none focus:text-white focus:bg-teal-500 transition ease-in-out duration-150"
        >
          <svg
            class="mr-3 h-8 w-8 transition ease-in-out duration-150"
            fill="white"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
              clip-rule="evenodd"
            />
          </svg>
          Map
        </nuxt-link>
        <nuxt-link
          to="/add-encounter"
          class="mt-2 group flex items-center px-2 py-2 text-base leading-5 font-medium text-white rounded-md hover:text-white hover:bg-teal-500 focus:outline-none focus:text-white focus:bg-teal-500 transition ease-in-out duration-150"
        >
          <svg
            class="mr-3 h-8 w-8 transition ease-in-out duration-150"
            fill="white"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
              clip-rule="evenodd"
            />
          </svg>
          Add Encounter
        </nuxt-link>
      </nav>

      <hr class="h-px flex mt-auto bg-teal-800 border-none" />

      <nav class="flex-col px-2 bg-animali-900">
        <nuxt-link
          to="/settings"
          class="mt-2 group flex items-center px-2 py-2 text-base leading-5 font-medium text-white rounded-md hover:text-white hover:bg-teal-500 focus:outline-none focus:text-white focus:bg-teal-500 transition ease-in-out duration-150"
        >
          <svg
            class="mr-3 h-8 w-8 transition ease-in-out duration-150"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          Settings
        </nuxt-link>

        <a
          @click="installApp"
          class="cursor-pointer mt-2 group flex items-center px-2 py-2 text-base leading-5 font-medium text-white rounded-md hover:text-white hover:bg-teal-500 focus:outline-none focus:text-white focus:bg-teal-500 transition ease-in-out duration-150"
        >
          <svg
            class="mr-3 h-8 w-8 transition ease-in-out duration-150"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          Install the App
        </a>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      deferredPrompt: null,
    }
  },

  methods: {
    async installApp() {
      console.log('install app triggered')

      if (this.deferredPrompt) {
        console.log('deferredPrompt exists')
        this.deferredPrompt.prompt()
        // Wait for the user to respond to the prompt:
        this.deferredPrompt.userChoice.then((choiceResult) => {
          if (choiceResult.outcome === 'accepted') {
            console.log('User accepted the install prompt')
          } else {
            console.log('User dismissed the install prompt')
          }

          this.deferredPrompt = null
        })
      } else {
        this.$emit('presentNotification', {
          status: 'error',
          title: 'Unsupported or already installed',
          body:
            'The app may already be installed or your browser may not support it',
        })
      }
    },
  },

  beforeMount() {
    window.addEventListener('beforeinstallprompt', (e) => {
      console.log('beforeinstallprompt listener')
      e.preventDefault()
      // Stash the event so it can be triggered later.
      this.deferredPrompt = e
    })

    window.addEventListener('appinstalled', () => {
      console.log('appinstalled listener')
      this.deferredPrompt = null
    })
  },
}
</script>
