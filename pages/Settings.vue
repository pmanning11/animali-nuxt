<template>
  <div class="pt-2 pb-6 md:py-6">
    <div class="max-w-7xl mx-auto px-4 pb-4 sm:px-6 md:px-8">
      <h1 class="text-2xl font-semibold text-gray-900">Settings</h1>
    </div>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
      <!-- Content section -->

      <!-- Program Info -->
      <div class="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
        <div class="md:grid md:grid-cols-3 md:gap-6">
          <div class="md:col-span-1">
            <h3 class="text-lg font-medium leading-6 text-gray-900">Program</h3>
            <p class="mt-1 text-sm leading-5 text-gray-500">
              This information will be displayed if you turn the public switch
              on.
            </p>
          </div>
          <div class="mt-5 md:mt-0 md:col-span-2">
            <form action="#" method="POST">
              <div class="grid grid-cols-3 gap-6">
                <div class="col-span-3 sm:col-span-2">
                  <label
                    for="company_website"
                    class="block text-sm font-medium leading-5 text-gray-700"
                  >
                    Website
                  </label>
                  <div class="mt-1 flex rounded-md shadow-sm">
                    <span
                      class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm"
                    >
                      http://
                    </span>
                    <input
                      id="company_website"
                      class="form-input flex-1 block w-full rounded-none rounded-r-md transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                      placeholder="www.example.com"
                    />
                  </div>
                </div>
                <div class="col-span-1 text-right mr-2">
                  <label
                    for="is_public"
                    class="block text-sm font-medium leading-5 text-gray-700"
                  >
                    Public
                  </label>
                  <span
                    @click="isPublic = !isPublic"
                    role="checkbox"
                    tabindex="0"
                    aria-checked="false"
                    :class="
                      `${
                        isPublic ? 'bg-indigo-600' : 'bg-gray-200'
                      } relative inline-flex flex-shrink-0 h-6 w-11 mt-2 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:shadow-outline`
                    "
                  >
                    <span
                      aria-hidden="true"
                      :class="
                        `${
                          isPublic ? 'translate-x-5' : 'translate-x-0'
                        } relative inline-block h-5 w-5 rounded-full bg-white shadow transform transition ease-in-out duration-200`
                      "
                    >
                      <span
                        :class="
                          `${
                            isPublic
                              ? 'opacity-0 ease-out duration-100'
                              : 'opacity-100 ease-in duration-200'
                          } absolute inset-0 h-full w-full flex items-center justify-center transition-opacity`
                        "
                      >
                        <svg
                          class="h-3 w-3 text-gray-400"
                          fill="none"
                          viewBox="0 0 12 12"
                        >
                          <path
                            d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </span>
                      <span
                        :class="
                          `${
                            isPublic
                              ? 'opacity-100 ease-in duration-200'
                              : 'opacity-0 ease-out duration-100'
                          } absolute inset-0 h-full w-full flex items-center justify-center transition-opacity`
                        "
                      >
                        <svg
                          class="h-3 w-3 text-indigo-600"
                          fill="currentColor"
                          viewBox="0 0 12 12"
                        >
                          <path
                            d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z"
                          />
                        </svg>
                      </span>
                    </span>
                  </span>
                </div>
              </div>

              <div class="mt-6">
                <label
                  for="about"
                  class="block text-sm leading-5 font-medium text-gray-700"
                >
                  About
                </label>
                <div class="rounded-md shadow-sm">
                  <textarea
                    id="about"
                    rows="3"
                    class="form-textarea mt-1 block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                    placeholder="you@example.com"
                  ></textarea>
                </div>
                <p class="mt-2 text-sm text-gray-500">
                  Brief description for your profile. URLs are hyperlinked.
                </p>
              </div>

              <div class="mt-6">
                <label
                  class="block text-sm leading-5 font-medium text-gray-700"
                >
                  Logo
                </label>
                <div class="mt-2 flex items-center">
                  <span
                    class="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100"
                  >
                    <img
                      v-if="activeUserInfo.imageLogo"
                      :src="activeUserInfo.imageLogo"
                      :alt="activeUserInfo.name"
                    />
                    <svg
                      v-else
                      class="h-full w-full text-gray-300"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                  </span>
                  <span class="ml-5 rounded-md shadow-sm">
                    <input
                      type="file"
                      ref="logoInput"
                      class="hidden"
                      accept="image/jpeg, image/png"
                      name="photo"
                      @change="detectLogoFile($event)"
                    />
                    <button
                      type="button"
                      @click="selectLogo"
                      class="py-2 px-3 border border-gray-300 rounded-md text-sm leading-4 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out"
                    >
                      Change Logo
                    </button>
                  </span>
                </div>
              </div>

              <div class="mt-6">
                <label
                  class="block text-sm leading-5 font-medium text-gray-700"
                >
                  Cover photo
                </label>
                <input
                  type="file"
                  ref="headerInput"
                  class=" hidden"
                  accept="image/jpeg, image/png"
                  name="photo"
                  @change="detectHeaderFile($event)"
                />
                <div v-if="activeUserInfo.imageHeader">
                  <img
                    :src="activeUserInfo.imageHeader"
                    :alt="activeUserInfo.programName"
                    class="mt-2 flex justify-center pt-2 pb-6 rounded-md"
                  />
                  <button
                    type="button"
                    @click="selectHeader"
                    class="py-2 px-3 border border-gray-300 rounded-md text-sm leading-4 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out"
                  >
                    Change Cover
                  </button>
                </div>
                <div
                  v-else
                  class="mt-2 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md"
                >
                  <div class="text-center">
                    <svg
                      class="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <p class="mt-1 text-sm text-gray-600">
                      <button
                        @click="selectHeader"
                        class="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition duration-150 ease-in-out"
                      >
                        Upload a file
                      </button>
                    </p>
                    <p class="mt-1 text-xs text-gray-500">
                      PNG, JPG up to 5MB
                    </p>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <!-- Personal Info -->
      <div class="mt-6 bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
        <div class="md:grid md:grid-cols-3 md:gap-6">
          <div class="md:col-span-1">
            <h3 class="text-lg font-medium leading-6 text-gray-900">
              Personal Information
            </h3>
            <p class="mt-1 text-sm leading-5 text-gray-500">
              This information will not be shared with others.
            </p>
          </div>
          <div class="mt-5 md:mt-0 md:col-span-2">
            <form action="#" method="POST">
              <div class="grid grid-cols-6 gap-6">
                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="first_name"
                    class="block text-sm font-medium leading-5 text-gray-700"
                    >First name</label
                  >
                  <input
                    v-model="firstName"
                    id="first_name"
                    class="mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  />
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="last_name"
                    class="block text-sm font-medium leading-5 text-gray-700"
                    >Last name</label
                  >
                  <input
                    v-model="lastName"
                    id="last_name"
                    class="mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  />
                </div>

                <div class="col-span-6 sm:col-span-4">
                  <label
                    for="email_address"
                    class="block text-sm font-medium leading-5 text-gray-700"
                    >Email address</label
                  >
                  <input
                    v-model="email"
                    id="email_address"
                    class="mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  />
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="country"
                    class="block text-sm font-medium leading-5 text-gray-700"
                    >Country / Region</label
                  >
                  <select
                    v-model="country"
                    id="country"
                    class="mt-1 block form-select w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </select>
                </div>

                <div class="col-span-6">
                  <label
                    for="street_address"
                    class="block text-sm font-medium leading-5 text-gray-700"
                    >Street address</label
                  >
                  <input
                    id="street_address"
                    class="mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  />
                </div>

                <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                  <label
                    for="city"
                    class="block text-sm font-medium leading-5 text-gray-700"
                    >City</label
                  >
                  <input
                    id="city"
                    class="mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  />
                </div>

                <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                  <label
                    for="state"
                    class="block text-sm font-medium leading-5 text-gray-700"
                    >State / Province</label
                  >
                  <input
                    id="state"
                    class="mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  />
                </div>

                <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                  <label
                    for="postal_code"
                    class="block text-sm font-medium leading-5 text-gray-700"
                    >ZIP / Postal</label
                  >
                  <input
                    id="postal_code"
                    class="mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <!-- Notifications -->
      <!-- <div class="mt-6 bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
        <div class="md:grid md:grid-cols-3 md:gap-6">
          <div class="md:col-span-1">
            <h3 class="text-lg font-medium leading-6 text-gray-900">
              Notifications
            </h3>
            <p class="mt-1 text-sm leading-5 text-gray-500">
              Decide which communications you'd like to receive and how.
            </p>
          </div>
          <div class="mt-5 md:mt-0 md:col-span-2">
            <form action="#" method="POST">
              <fieldset>
                <legend class="text-base leading-6 font-medium text-gray-900">
                  By Email
                </legend>
                <div class="mt-4">
                  <div class="flex items-start">
                    <div class="flex items-center h-5">
                      <input
                        id="comments"
                        type="checkbox"
                        class="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                      />
                    </div>
                    <div class="ml-3 text-sm leading-5">
                      <label for="comments" class="font-medium text-gray-700"
                        >Comments</label
                      >
                      <p class="text-gray-500">
                        Get notified when someones posts a comment on a posting.
                      </p>
                    </div>
                  </div>
                  <div class="mt-4">
                    <div class="flex items-start">
                      <div class="flex items-center h-5">
                        <input
                          id="candidates"
                          type="checkbox"
                          class="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                        />
                      </div>
                      <div class="ml-3 text-sm leading-5">
                        <label
                          for="candidates"
                          class="font-medium text-gray-700"
                          >Candidates</label
                        >
                        <p class="text-gray-500">
                          Get notified when a candidate applies for a job.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="mt-4">
                    <div class="flex items-start">
                      <div class="flex items-center h-5">
                        <input
                          id="offers"
                          type="checkbox"
                          class="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                        />
                      </div>
                      <div class="ml-3 text-sm leading-5">
                        <label for="offers" class="font-medium text-gray-700"
                          >Offers</label
                        >
                        <p class="text-gray-500">
                          Get notified when a candidate accepts or rejects an
                          offer.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </fieldset>
              <fieldset class="mt-6">
                <legend class="text-base leading-6 font-medium text-gray-900">
                  Push Notifications
                </legend>
                <p class="text-sm leading-5 text-gray-500">
                  These are delivered via SMS to your mobile phone.
                </p>
                <div class="mt-4">
                  <div class="flex items-center">
                    <input
                      id="push_everything"
                      name="form-input push_notifications"
                      type="radio"
                      class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                    />
                    <label for="push_everything" class="ml-3">
                      <span
                        class="block text-sm leading-5 font-medium text-gray-700"
                        >Everything</span
                      >
                    </label>
                  </div>
                  <div class="mt-4 flex items-center">
                    <input
                      id="push_email"
                      name="form-input push_notifications"
                      type="radio"
                      class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                    />
                    <label for="push_email" class="ml-3">
                      <span
                        class="block text-sm leading-5 font-medium text-gray-700"
                        >Same as email</span
                      >
                    </label>
                  </div>
                  <div class="mt-4 flex items-center">
                    <input
                      id="push_nothing"
                      name="form-input push_notifications"
                      type="radio"
                      class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                    />
                    <label for="push_nothing" class="ml-3">
                      <span
                        class="block text-sm leading-5 font-medium text-gray-700"
                        >No push notifications</span
                      >
                    </label>
                  </div>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div> -->

      <div class="mt-6 bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
        <span class="inline-flex rounded-md shadow-sm">
          <button
            type="button"
            class="inline-flex items-center px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
          >
            Save Changes
          </button>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import slugify from 'slugify'

export default {
  data() {
    return {
      isPublic: false,
      firstName: '',
      lastName: '',
      email: '',
      country: '',
    }
  },

  computed: {
    activeUserInfo() {
      return this.$store.state.user
    },
  },

  methods: {
    selectLogo() {
      this.$refs.logoInput.click()
    },

    selectHeader() {
      this.$refs.headerInput.click()
    },

    detectLogoFile(e) {
      const fileList = e.target.files || e.dataTransfer.files
      Array.from(Array(fileList.length).keys()).map((x) => {
        this.uploadLogo(fileList[x])
      })
    },

    detectHeaderFile(e) {
      const fileList = e.target.files || e.dataTransfer.files
      Array.from(Array(fileList.length).keys()).map((x) => {
        this.uploadHeader(fileList[x])
      })
    },

    uploadLogo(file) {
      const programId = this.activeUserInfo.programId

      const payload = {
        programId,
        file,
        isReloadRequired: true,
      }

      this.$store.dispatch('updateLogo', payload).catch((err) => {
        console.log(err)
      })
    },

    uploadHeader(file) {
      const programId = this.activeUserInfo.programId

      const payload = {
        programId,
        file,
        isReloadRequired: true,
      }

      this.$store.dispatch('updateHeader', payload).catch((err) => {
        console.log(err)
      })
    },

    async saveChanges() {
      const slug = await slugify(this.programName, {
        replacement: '-',
        // eslint-disable-next-line no-useless-escape
        remove: /[$*_+~.()'"!\=:@]/g,
        lower: true,
      })
      this.$fireStore
        .collection('programs')
        .doc(this.activeUserInfo.programId)
        .update({
          name: this.programName,
          isPublic: this.isPublic,
          programEmail: this.programEmail,
          slug,
        })
        .then(() => {
          // Update the user and program in state
          const payload = {
            displayName: this.name,
            email: this.email,
            programSlug: slug,
            programName: this.programName,
            programEmail: this.programEmail,
            isPublic: this.isPublic,
            isReloadRequired: true,
            notify: this.$vs.notify,
          }
          this.$store.dispatch('updateUsername', payload).catch((err) => {
            // notify error
            console.log(err)
          })
          // notify success
        })
        .catch((err) => {
          // notify error
          console.log(err)
        })
    },
  },
}
</script>
