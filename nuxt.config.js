export default {
    /*
     ** Nuxt rendering mode
     ** See https://nuxtjs.org/api/configuration-mode
     */
    mode: 'spa',
    /*
     ** Nuxt target
     ** See https://nuxtjs.org/api/configuration-target
     */
    target: 'static',
    /*
     ** Headers of the page
     ** See https://nuxtjs.org/api/configuration-head
     */
    head: {
        htmlAttrs: {
            lang: 'en'
        },
        title:
            'Animali - Conservation Platform for Endangered and At-Risk Species',
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content:
                    'Animali is a platform for identifying and tracking endangered species.'
            }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'stylesheet', href: 'https://rsms.me/inter/inter.css' },
            { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' }
        ]
    },
    /*
     ** Progress Bar
     */
    loading: {
        color: '#3cdfd9',
        height: '2px'
    },
    /*
     ** Global CSS
     */
    css: [],
    /*
     ** Plugins to load before mounting the App
     ** https://nuxtjs.org/guide/plugins
     */
    plugins: [
        { src: '~plugins/crisp.js', ssr: false },
        { src: '~plugins/googleMaps', ssr: false },
        { src: '~plugins/localStorage.js', ssr: false },
        { src: '~plugins/grid.js', ssr: false }
        // { src: '~plugins/fullstory.js', ssr: false },
    ],
    /*
     ** Auto import components
     ** See https://nuxtjs.org/api/configuration-components
     */
    components: true,
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [
        // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
        '@nuxtjs/tailwindcss'
    ],
    /*
     ** Nuxt.js modules
     */
    modules: ['@nuxtjs/pwa', '@nuxtjs/firebase', '@nuxtjs/moment'],

    //Nuxt-Fire Module Options
    firebase: {
        config: {
            apiKey: process.env.FIREBASE_APIKEY,
            authDomain: process.env.FIREBASE_AUTHDOMAIN,
            databaseURL: process.env.FIREBASE_DATABASEURL,
            projectId: process.env.FIREBASE_PROJECTID,
            storageBucket: process.env.FIREBASE_STORAGEBUCKET,
            messagingSenderId: process.env.FIREBASE_MESSAGINGSENDERID,
            appId: process.env.FIREBASE_APPID,
            measurementId: process.env.FIREBASE_MEASUREMENTID
        },
        onFirebaseHosting: true,
        services: {
            auth: {
                persistence: 'local', // default
                initialize: {
                    // onAuthStateChangedMutation: 'ON_AUTH_STATE_CHANGED_MUTATION',
                    onAuthStateChangedAction: 'onAuthStateChanged'
                },
                ssr: true
            },
            firestore: true,
            storage: true,
            performance: true
            // analytics: true,
        }
    },

    pwa: {
        // disable the modules you don't need
        meta: {
            name: 'Animali',
            appleStatusBarStyle: '#3cdfd9',
            mobileAppIOS: true,
            nativeUI: true
        },
        // icon: false,
        // if you omit a module key form configuration sensible defaults will be applied
        // manifest: false,

        workbox: {
            importScripts: [
                // ...
                '/firebase-auth-sw.js'
            ],
            // by default the workbox module will not install the service worker in dev environment to avoid conflicts with HMR
            // only set this true for testing and remember to always clear your browser cache in development
            dev: false
        }
    },
    /*
     ** Build configuration
     ** See https://nuxtjs.org/api/configuration-build/
     */
    build: {
        babel: {
            configFile: './babel.config.js'
        },
        transpile: [/^vue2-google-maps($|\/)/, 'vee-validate/dist/rules']
    }
}
