/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      heading: ['Satoshi', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [require('prettier-plugin-tailwindcss')],
};
