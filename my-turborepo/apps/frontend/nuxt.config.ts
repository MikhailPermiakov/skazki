// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primevue/themes/aura';

export default defineNuxtConfig({
  compatibilityDate: process.env.COMPATIBILITY_DATE,
  ssr: true,
  devtools: { enabled: true },
  css: ['~/assets/css/root-styles.css', '~/assets/css/tailwind-primevue-styles.css', '~/assets/css/primevue-icons.css'],
  modules: [
    '@primevue/nuxt-module',
    "@nuxt/image"
  ],
  primevue: {
    options: {
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: '.my-app-dark',
          cssLayer: {
            name: 'primevue',
            order: 'tailwind-base, primevue, tailwind-utilities'
          }
        }
      }
    }
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});