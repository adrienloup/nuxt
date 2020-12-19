import pkg from './package.json';

export default {

  dev: process.env.NODE_ENV !== 'production',

  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000'
  },

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
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
  components: true,

  /*
  ** Customize the progress-bar color
  */
  // loading: { color: '#3b8070' },
  loading: '~/components/Loader2.vue',

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
  modules: ['@nuxt/http'],

  buildModules: ['@nuxt/typescript-build'],

  /*
  ** Router property -  https://nuxtjs.org/docs/2.x/features/file-system-routing#the-router-property
  */
  router: {
    middleware: ['class']
  }

}
