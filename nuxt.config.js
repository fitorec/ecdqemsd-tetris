export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  router: {
    base: '/ecdqemsd-tetris/',
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Tetris-ECDQEMSD',
    htmlAttrs: {
      lang: 'es',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Tetris ecdqemsd - El juego de la nave'
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Tetris ecdqemsd - El juego de la nave',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'Tetris ecdqemsd - El juego de la nave'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'http://www.canaltrans.com/estilos/v21/images/en_caso_de_que_el_mundo_se_desintegre_2021.png'
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/assets/css/main.scss',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  server: {
    port: 9030, // default: 3000
  },
};
