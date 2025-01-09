import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: ['@pinia/nuxt'],
  css: ['@/assets/css/tailwind.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  compatibilityDate: '2025-01-08',

  runtimeConfig: {
    public: {
      apiUrl: 'https://voicenter-test-api.voicenter-ltd.workers.dev/api/site-data'
    },
  },

  nitro: {
    prerender: {
      routes: ['/'],
    },
  },

  app: {
    baseURL: '/nuxt3-app/',
  },
})
