/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      backgroundImage: {
        texture: "url('/texture.png')",
      },
    },
  },
  plugins: [],
}
