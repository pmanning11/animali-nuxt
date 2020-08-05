<template>
  <div class="h-screen flex overflow-hidden bg-gray-100">
    <!-- Static sidebar for desktop -->
    <div class="hidden md:flex md:flex-shrink-0">
      <div class="flex flex-col w-64">
        <!-- Sidebar component, swap this element with another sidebar if you like -->
        <TheSidebar @presentNotification="presentNotification" />
      </div>
    </div>

    <!-- Search bar and main area -->
    <div class="flex flex-col w-0 flex-1 overflow-hidden">
      <TheSearchBar />

      <main
        class="flex-1 relative z-0 overflow-y-auto focus:outline-none"
        tabindex="0"
      >
        <nuxt />
      </main>

      <transition
        enter-active-class="transform ease-out duration-300 transition"
        enter-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
        enter-to-class="translate-y-0 opacity-100 sm:translate-x-0"
        leave-active-class="transition ease-in duration-100"
        leave-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <Notification
          class="z-50"
          v-if="showNotification"
          :status="notificationStatus"
          :title="notificationTitle"
          :body="notificationBody"
          @close="closeNotification"
        />
      </transition>
    </div>
  </div>
</template>

<script>
import Notification from '@/components/Notification'
import Logo from '@/components/Logo'
import TheSidebar from '@/components/TheSidebar'
import TheSearchBar from '@/components/TheSearchBar'

var timeout

export default {
  components: {
    Logo,
    Notification,
    TheSearchBar,
    TheSidebar,
  },

  middleware: 'auth',

  data() {
    return {
      showNotification: false,
      notificationTitle: '',
      notificationBody: '',
      notificationStatus: '',
    }
  },

  methods: {
    closeNotification() {
      this.showNotification = false
      clearTimeout(timeout)
    },

    presentNotification(e) {
      this.showNotification = true
      this.notificationTitle = e.title
      this.notificationBody = e.body
      this.notificationStatus = e.status
      // Delay 1 second then hide notification
      timeout = setTimeout(() => {
        this.showNotification = false
      }, 6000)
    },
  },

  created() {
    console.log('default view created')
    const programId = this.$store.state.user.programId

    if (this.$store.state.animals.length < 1) {
      this.$store.dispatch('fetchAnimals', programId).catch((err) => {
        console.error(err)
      })
    }

    if (this.$store.state.encounters.length < 1) {
      this.$store.dispatch('fetchEncounters', programId).catch((err) => {
        console.error(err)
      })
    }
  },
}
</script>
