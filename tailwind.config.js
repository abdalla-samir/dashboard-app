/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      transitionProperty: {
        'width': 'width',
      },
      width: {
        'calc-one': 'calc(50% - 10px)', // Example: custom width using calc
      },
      keyframes: {
        pong: {
          '75%, 100%': {
            transform: 'scale(1.4)',
            opacity: '0',
          },
        },
      },
      animation: {
        pong: 'pong 1.4s linear infinite',
      }
    },
  },
  plugins: [require("@tailwindcss/forms")({
    strategy: 'class', // only generate classes
  }),],
}

