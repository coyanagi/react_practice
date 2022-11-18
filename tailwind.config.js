/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './dist/index.html',
    './src/*.{html,js,jsx,ts,tsx}',
    './src/components/*.{html,js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
