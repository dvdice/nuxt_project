// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  app: {
    head: {
      title: 'My Project',
      meta: [
        { name: "description", content: 'Learn Nuxt 3' }
      ],
      link: [
        {
          rel: "stylesheet", href: 'https://fonts.googleapis.com/icon?family=Material+Icons'
        }
      ]
    }
  }
})
