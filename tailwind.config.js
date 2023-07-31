/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Source_Sans: ["Source Sans 3", "sans-serif"]
      },
      screens: {
        'wide':'576px',
      },
    },
  },
  plugins: [],
}

