/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '375px',
      },
      colors: {
        'dark-bg': '#111111',
        'darker-bg': '#0a0a0a',
        'accent-yellow': '#de1204',
      },
      fontFamily: {
        'marcellus': ['Marcellus', 'serif'],
      },
    },
  },
  plugins: [],
}