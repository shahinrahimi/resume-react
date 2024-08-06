/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'ubuntu' : ["Ubuntu Mono", "monospace"],
      'roboto' : ["Roboto", "sans-serif"]
    },
    extend: {},
  },
  plugins: [],
}

