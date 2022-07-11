/**
 * @link https://tailwindcss.com/docs/configuration
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */
const config = {
  purge: {
    enabled: true,
    content: ["./src/**/*.{js,jsx,ts,tsx,scss,css}"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
    },
  },
  variants: {
    extend: {
      backgroundColor: ["odd"],
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
}

module.exports = config
