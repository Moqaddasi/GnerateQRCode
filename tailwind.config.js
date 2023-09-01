/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {

    container: {
      padding: {
        DEFAULT: '1rem',
        lg: '3rem',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {

      colors: {
        primary: 'linear-gradient(90deg, #002333, #DEEFE7, #159A9C)',
        secondary: '#F7F7F7',
        tertiary: '#FFA500',
      },

    },
  },
  plugins: [],
}
