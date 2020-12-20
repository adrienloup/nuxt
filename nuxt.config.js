import bodyParser from 'body-parser'

export default {

  dev: process.env.NODE_ENV !== 'production',

  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000'
  },

  /*
  ** Headers of the page
  */
  head: {
    title: 'Nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt sample' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  generate: {
    dir: 'gh_pages',
    subFolders: false
  },

  /*
  ** Build configuration
  ** Doc: https://nuxtjs.org/api/configuration-build
  */
  build: {
    extend(config, ctx) {}
  },

  /*
  ** Activate components - https://nuxtjs.org/docs/2.x/directory-structure/components#components-module
  */
  components: false,

  /*
  ** Customize the progress-bar color
  */
  loading: '~/components/base/Loading.vue',

  /*
  ** Global CSS
  */
  css: [ '@/assets/scss/main' ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],

  /*
  ** Modules - https://nuxtjs.org/docs/2.x/directory-structure/modules
  */
  // TODO http ??
  modules: ['@nuxt/http', '@nuxtjs/axios', '@nuxtjs/auth'],

  buildModules: ['@nuxt/typescript-build'],

  /*
  ** Router property -  https://nuxtjs.org/docs/2.x/features/file-system-routing#the-router-property
  */
  router: {
    middleware: ['class']
  },

  /*
   ** Add server middleware
   */
  serverMiddleware: [bodyParser.json(),  '~/api'],

  axios: {
    proxy: true
  },

  auth: {
    plugins: [
      {
        src: '~plugins/auth.js',
        ssr: false
      }
    ],
    strategies: {
      local: {
        endpoints: {
          login: { url: '/api/login', method: 'post', propertyName: 'token' },
          logout: false,
          user: false
        }
      }
    }
  }

}
