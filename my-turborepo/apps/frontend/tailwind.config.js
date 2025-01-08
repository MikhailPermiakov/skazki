export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./modules/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    './node_modules/primevue/**/*.{js,ts,vue}', // Сканируем файлы PrimeVue
  ],
  // plugins: [require('tailwindcss-primeui')]
};