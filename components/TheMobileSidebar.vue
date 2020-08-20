<template>
  <div class="md:hidden">
    <div :class="`fixed inset-0 flex ${isSidebarOpen ? 'z-50' : 'z-0'}`" v-show="isSidebarOpen">
      <transition
        enter-active-class="transition-opacity ease-linear duration-300"
        enter-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition-opacity ease-linear duration-300"
        leave-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div class="fixed inset-0" v-show="isSidebarOpen" @click="$emit('close')">
          <div class="absolute inset-0 bg-gray-600 opacity-75"></div>
        </div>
      </transition>
      <!--
        Off-canvas menu, show/hide based on off-canvas menu state.

        Entering: "transition ease-in-out duration-300 transform"
          From: "-translate-x-full"
          To: "translate-x-0"
        Leaving: "transition ease-in-out duration-300 transform"
          From: "translate-x-0"
          To: "-translate-x-full"
      -->
      <transition
        enter-active-class="transition ease-in-out duration-300 transform"
        enter-class="-translate-x-full"
        enter-to-class="translate-x-0"
        leave-active-class="transition ease-in-out duration-300 transform"
        leave-class="translate-x-0"
        leave-to-class="-translate-x-full"
      >
        <div
          class="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-animali-900"
          v-show="isSidebarOpen"
        >
          <div class="absolute top-0 right-0 -mr-14 p-1">
            <button
              class="flex items-center justify-center h-12 w-12 rounded-full focus:outline-none focus:bg-gray-600"
              aria-label="Close sidebar"
              v-show="isSidebarOpen"
              @click="$emit('close')"
            >
              <svg
                class="h-6 w-6 text-white"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
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
          <nuxt-link to="/dashboard" class="flex-shrink-0 flex items-center px-6" id="logo">
            <logo class="h-8 w-auto mr-4 fill-current text-primary" />
            <h1 class="font-national text-4xl font-medium text-primary">Animali</h1>
          </nuxt-link>
          <div class="mt-5 flex flex-1 flex-col h-0 overflow-y-auto">
            <nav class="px-2">
              <nuxt-link
                to="/dashboard"
                class="group flex items-center px-2 py-3 text-lg leading-6 font-medium rounded-md text-white focus:outline-none focus:bg-teal-500 hover:bg-teal-500 transition ease-in-out duration-150"
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
                to="/animals"
                class="mt-2 group flex items-center px-2 py-3 text-lg leading-6 font-medium rounded-md text-white hover:text-white hover:bg-teal-500 focus:outline-none focus:text-white focus:bg-teal-500 transition ease-in-out duration-150"
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
                class="mt-2 group flex items-center px-2 py-3 text-lg leading-6 font-medium rounded-md text-white hover:text-white hover:bg-teal-500 focus:outline-none focus:text-white focus:bg-teal-500 transition ease-in-out duration-150"
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
                class="mt-2 group flex items-center px-2 py-3 text-lg leading-6 font-medium rounded-md text-white hover:text-white hover:bg-teal-500 focus:outline-none focus:text-white focus:bg-teal-500 transition ease-in-out duration-150"
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
                class="mt-2 group flex items-center px-2 py-3 text-lg leading-5 font-medium text-white rounded-md hover:text-white hover:bg-teal-500 focus:outline-none focus:text-white focus:bg-teal-500 transition ease-in-out duration-150"
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

              <!-- <a
                @click="installApp"
                class="cursor-pointer mt-2 group flex items-center px-2 py-3 text-lg leading-5 font-medium text-white rounded-md hover:text-white hover:bg-teal-500 focus:outline-none focus:text-white focus:bg-teal-500 transition ease-in-out duration-150"
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
              </a>-->
            </nav>
          </div>
        </div>
      </transition>
      <div class="flex-shrink-0 w-14">
        <!-- Dummy element to force sidebar to shrink to fit close icon -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isSidebarOpen: {
      type: Boolean,
      required: true,
    },
  },

  data() {
    return {
      deferredPrompt: null,
    };
  },

  methods: {
    async installApp() {
      console.log("install app triggered");

      if (this.deferredPrompt) {
        this.deferredPrompt.prompt();
        // Wait for the user to respond to the prompt:
        this.deferredPrompt.userChoice.then((choiceResult) => {
          if (choiceResult.outcome === "accepted") {
            console.log("User accepted the install prompt");
          } else {
            console.log("User dismissed the install prompt");
          }

          this.deferredPrompt = null;
        });
      }

      this.notificationStatus = "error";
      this.notificationTitle = "Unsupported or already installed";
      this.notificationBody =
        "The app may already be installed or your browser may not support it";
      this.showNotification = true;

      // Delay seconds then hide notification
      setTimeout(() => {
        this.showNotification = false;
      }, 6000);
    },
  },

  created() {},

  beforeMount() {
    window.addEventListener("beforeinstallprompt", (e) => {
      console.log("beforeinstallprompt listener");
      e.preventDefault();
      // Stash the event so it can be triggered later.
      this.deferredPrompt = e;
    });

    window.addEventListener("appinstalled", () => {
      console.log("appinstalled listener");
      this.deferredPrompt = null;
    });
  },

  // beforeDestroy() {
  //   window.removeEventListener('beforeinstallprompt')
  //   window.removeEventListener('appinstalled')
  // },
};
</script>
