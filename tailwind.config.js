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
      minHeight: {
        'screen-height': 'calc(100vh - 82px)',
      },
      keyframes: {
        pong: {
          '75%, 100%': {
            transform: 'scale(1.4)',
            opacity: '0',
          },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(-20%)' },
          '50%': { transform: 'translateY(20%)' },
        }
      },
      animation: {
        pong: 'pong 1.4s linear infinite',
        bounce: 'bounce 1s ease infinite'
      },
    },
  },
  plugins: [require("@tailwindcss/forms")({
    strategy: 'class', // only generate classes
  }),],
}

