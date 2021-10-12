export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Pide tu calaverita',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Crea tu avatar de calaverita personalizada para Día de Muertos.' },
      { hid: 'og:title', name: 'og:title', content: 'Pide tu calaverita' },
      { hid: 'og:description', name: 'og:description', content: 'Crea tu avatar de calaverita personalizada para Día de Muertos.' },
      { hid: 'og:image', name: 'og:image', content: '/calaverita.png' },
      { hid: 'og:url', name: 'og:url', content: 'http://calaveritas.lifeonmars.com.mx' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', 
      href: 'https://fonts.googleapis.com/css2?family=Bubblegum+Sans&display=swap' },
      {rel:'stylesheet',
      href:'https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    ['@nuxtjs/google-analytics', {
      id: 'UA-109143007-1'
    }]
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    'vue-social-sharing/nuxt'
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
