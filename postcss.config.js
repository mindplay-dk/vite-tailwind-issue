/**
 * @type {import('postcss').AcceptedPlugin}
 */
const options = {
  modules: true,
  plugins: {
    tailwindcss: {},
    autoprefixer: {}, // NOTE: this plugin uses the .browserslistrc file
  },
}

export default options
