/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      keyframes: {
        "slide-in-down": {
          "0%": {
            visibility: "visible",
            transform: "translate3d(0, -10%, 0)",
          },
          "100%": {
            transform: "translate3d(0, 0, 0)",
          },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        "slide-in-down": 'slide-in-down 0.3s ease-in-out',
        fadeIn: 'fadeIn 0.3s ease-in-out',
      },
      colors: {
        background: '#ede9e5',
        header: '#5a4131',
        primary: '#a36314',
        lightBrown: '#422714',
        special: '#9684A1',
        events: '#4CB944'
      },
      fontFamily: {
        title: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}

