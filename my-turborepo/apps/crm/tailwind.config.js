module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./modules/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  plugins: [require('tailwindcss-primeui')]
};