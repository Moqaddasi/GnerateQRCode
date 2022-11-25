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
        primary: '#002333',
        secondary: '#DEEFE7',
        tertiary: '#159A9C',
      },
    },
  },
  plugins: [],
}
