// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primevue/themes/aura';
import path from 'path';

export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: true },
  css: ['~/assets/css/styles.css'],
  modules: [
    '@primevue/nuxt-module'
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
  // hooks: {
  //   "pages:extend"(pages) {
  //     pages.push(
  //       {
  //         name: "library",
  //         path: "/:slug*/library",
  //         file: path.resolve(__dirname, "pages/library.vue"),
  //       },
  //     )
  //   },
  // },
});

