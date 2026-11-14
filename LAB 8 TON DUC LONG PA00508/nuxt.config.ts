// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  ssr: true,
  app: {
    head: {
      title: 'Nuxt.js',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Dự án Nuxt.js và Vue Router' }
      ],
      link: [
        {
          rel: 'stylesheet',
          href: '/css/bootstrap.min.css'
        }
      ],
      script: [
        {
          src: '/js/bootstrap.bundle.min.js'
        }
      ]
    }
  }
})
