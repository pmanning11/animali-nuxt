<template>
  <div class="h-screen flex overflow-hidden bg-gray-100">
    <!-- Off-canvas menu for mobile -->
    <div class="md:hidden" v-show="isSidebarOpen">
      <div class="fixed inset-0 flex z-40" v-show="isSidebarOpen">
        <transition
          enter-active-class="transition-opacity ease-linear duration-300"
          enter-class="opacity-0"
          enter-to-class="opacity-100"
          leave-active-class="transition-opacity ease-linear duration-300"
          leave-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <div class="fixed inset-0" v-show="isSidebarOpen" @click="isSidebarOpen = false">
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
                @click="isSidebarOpen = false"
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
            <nuxt-link to="/dashboard" class="flex-shrink-0 flex items-center px-6">
              <logo class="h-8 w-auto mr-4 fill-current text-primary" />
              <h1 class="font-national text-4xl font-medium text-primary">Animali</h1>
            </nuxt-link>
            <div class="mt-5 flex flex-1 flex-col h-0 overflow-y-auto">
              <nav class="px-2">
                <nuxt-link
                  to="/dashboard"
                  class="group flex items-center px-2 py-4 text-lg leading-6 font-medium rounded-md text-white focus:outline-none focus:bg-teal-500 hover:bg-teal-500 transition ease-in-out duration-150"
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
                  class="mt-2 group flex items-center px-2 py-4 text-lg leading-6 font-medium rounded-md text-white hover:text-white hover:bg-teal-500 focus:outline-none focus:text-white focus:bg-teal-500 transition ease-in-out duration-150"
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
                  class="mt-2 group flex items-center px-2 py-4 text-lg leading-6 font-medium rounded-md text-white hover:text-white hover:bg-teal-500 focus:outline-none focus:text-white focus:bg-teal-500 transition ease-in-out duration-150"
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
                  class="mt-2 group flex items-center px-2 py-4 text-lg leading-6 font-medium rounded-md text-white hover:text-white hover:bg-teal-500 focus:outline-none focus:text-white focus:bg-teal-500 transition ease-in-out duration-150"
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

              <hr class="h-px flex mt-auto bg-teal-600 border-none" />

              <nav class="flex-col px-2 bg-animali-900">
                <nuxt-link
                  to="/settings"
                  class="mt-2 group flex items-center px-2 py-4 text-lg leading-5 font-medium text-white rounded-md hover:text-white hover:bg-teal-500 focus:outline-none focus:text-white focus:bg-teal-500 transition ease-in-out duration-150"
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
                  class="cursor-pointer mt-2 group flex items-center px-2 py-4 text-lg leading-5 font-medium text-white rounded-md hover:text-white hover:bg-teal-500 focus:outline-none focus:text-white focus:bg-teal-500 transition ease-in-out duration-150"
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
                    <path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Install the App
                </a>
              </nav>
            </div>
          </div>
        </transition>
        <div class="flex-shrink-0 w-14">
          <!-- Dummy element to force sidebar to shrink to fit close icon -->
        </div>
      </div>
    </div>

    <!-- Static sidebar for desktop -->
    <div class="hidden md:flex md:flex-shrink-0">
      <div class="flex flex-col w-64">
        <!-- Sidebar component, swap this element with another sidebar if you like -->
        <div class="flex flex-col flex-grow bg-animali-900 pt-2 pb-4 overflow-y-auto">
          <nuxt-link to="/dashboard" class="flex items-center flex-shrink-0 px-6">
            <logo class="h-8 w-auto mr-4 fill-current text-primary" />
            <h1 class="font-national text-4xl font-medium text-primary">Animali</h1>
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

            <hr class="h-px flex mt-auto bg-teal-600 border-none" />

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
                  <path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Install the App
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>

    <!-- Search bar and main area -->
    <div class="flex flex-col w-0 flex-1 overflow-hidden">
      <div class="relative z-10 flex-shrink-0 flex h-16 bg-white shadow">
        <button
          class="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:bg-gray-100 focus:text-gray-600 md:hidden"
          aria-label="Open sidebar"
          @click.stop="isSidebarOpen = true"
        >
          <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </button>
        <div class="flex-1 px-6 flex justify-between">
          <div class="flex-1 flex">
            <form class="w-full flex md:ml-0" action="#" method="GET">
              <label for="search_field" class="sr-only">Search</label>
              <div class="relative w-full text-gray-400 focus-within:text-gray-600">
                <div class="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                  <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    />
                  </svg>
                </div>
                <input
                  id="search_field"
                  class="block w-full h-full pl-8 pr-3 py-2 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 sm:text-sm"
                  placeholder="Search"
                  type="search"
                />
              </div>
            </form>
          </div>
          <div class="ml-4 flex items-center md:ml-6">
            <!-- Profile dropdown -->
            <div class="ml-3 relative">
              <div>
                <button
                  class="max-w-xs flex items-center text-sm rounded-full focus:outline-none focus:shadow-outline"
                  id="user-menu"
                  aria-label="User menu"
                  aria-haspopup="true"
                  @click="isAvatarMenuOpen = !isAvatarMenuOpen"
                >
                  <img
                    class="h-8 w-8 rounded-full"
                    :src="activeUserInfo.imageLogo"
                    :alt="activeUserInfo.name"
                  />
                </button>
              </div>

              <transition
                enter-active-class="transition ease-out duration-100"
                enter-class="transform opacity-0 scale-95"
                enter-to-class="transform opacity-100 scale-100"
                leave-active-class="transition ease-in duration-75"
                leave-class="transform opacity-100 scale-100"
                leave-to-class="transform opacity-0 scale-95"
              >
                <div
                  class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg"
                  v-show="isAvatarMenuOpen"
                >
                  <div
                    class="py-1 rounded-md bg-white shadow-xs"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu"
                  >
                    <a
                      v-if="activeUserInfo.isPublic"
                      :href="
                        `https://animali.life/programs/${activeUserInfo.programSlug}/${activeUserInfo.programId}`
                      "
                      target="_blank"
                      class="flex justify-between items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition ease-in-out duration-150"
                      role="menuitem"
                    >
                      Program Page
                      <svg
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        class="h-4"
                      >
                        <path
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                    <nuxt-link
                      to="/settings"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition ease-in-out duration-150"
                      role="menuitem"
                    >Settings</nuxt-link>
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition ease-in-out duration-150"
                      role="menuitem"
                      @click="logout"
                    >Sign out</a>
                  </div>
                </div>
              </transition>
            </div>
          </div>
        </div>
      </div>

      <main class="flex-1 relative z-0 overflow-y-auto focus:outline-none" tabindex="0">
        <nuxt />
      </main>
    </div>
  </div>
</template>

<script>
import Logo from "../components/Logo";

export default {
  components: {
    Logo,
  },

  middleware: "auth",

  data() {
    return {
      isSidebarOpen: false,
      isAvatarMenuOpen: false,
      deferredPrompt: null,
    };
  },

  watch: {
    "$route.path": function () {
      this.isSidebarOpen = false;
      this.isAvatarMenuOpen = false;
    },
  },

  computed: {
    activeUserInfo() {
      return this.$store.state.user;
    },
  },

  methods: {
    async logout() {
      try {
        await this.$store.dispatch("logout");
        this.$router.push("/login");
      } catch (e) {
        console.log(e.message);
      }
    },

    async installApp() {
      console.log("before install prompt");
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
    },
  },

  created() {
    console.log("default view created");

    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault();
      // Stash the event so it can be triggered later.
      this.deferredPrompt = e;
    });

    window.addEventListener("appinstalled", () => {
      this.deferredPrompt = null;
    });

    // window.addEventListener("beforeinstallprompt", (e) => {
    //   // Prevent the mini-infobar from appearing on mobile
    //   e.preventDefault();
    //   // Stash the event so it can be triggered later.
    //   deferredPrompt = e;
    //   // Update UI notify the user they can install the PWA
    //   showInstallPromotion();
    // });

    // window.addEventListener("appinstalled", () => {
    //   this.deferredPrompt = null;
    // });
  },
};
</script>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
