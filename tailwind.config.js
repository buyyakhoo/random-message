/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx,js,tsx,ts}"],
  theme: {
    extend: {
      spacing: {
        'boxWidth': '45rem',
        'boxHeight': '30rem',
        'gapinbox': '1.5rem',
      }
    },
  },
  plugins: [],
}