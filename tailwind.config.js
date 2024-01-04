/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: '#272727',
        green: '#56B280',
        "bg-gray": '#F7F8FA',
        "gray-text": '#5E6E89',
      },
      fontFamily: {
        'poppins': "Poppins, verdana",
        'roboto': "Roboto, verdana",
      }
    },
  },
  plugins: [],
}

