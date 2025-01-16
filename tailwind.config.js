/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.3s ease-in-out',
      },
      colors: {
        background:'#ede9e5',
        header: '#5a4131',
        primary: '#a36314',
        lightBrown: '#422714' 
      },
      fontFamily: {
        title:["Inter","sans-serif"]
      }
    },
  },
  plugins: [],
}

