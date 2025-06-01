/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ptserif: ['PT Serif', 'serif'],
        vazirmatn: ['Vazirmatn', 'sans-serif'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(10px)' },
        },
      },
      animation: {
        float: 'float 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

// module.exports = {
//   theme: {
//     extend: {
//       fontFamily: {
//         ptserif: ['PT Serif', 'serif'],
//         vazirmatn: ['Vazirmatn', 'sans-serif'],
//       },
//     },
//   },
// }