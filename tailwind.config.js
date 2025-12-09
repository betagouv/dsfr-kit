/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.js",
    "./temp_output/**/*.js",
    "./test-output/**/*.js",
    "./.storybook/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Placeholder for DSFR colors which will be generated
        dsfr: {
          blue: {
            france: '#000091',
          },
          red: {
            marianne: '#E1000F',
          }
        }
      }
    },
  },
  plugins: [],
}
