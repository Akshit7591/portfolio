// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'primary': '#1a202c', // A custom dark background color
        'secondary': '#2d3748', // A slightly lighter dark shade
        'accent': '#4299e1', // A custom accent color for links and buttons
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Setting a custom default font
      },
    },
  },
  plugins
};