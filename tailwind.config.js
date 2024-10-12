/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", 'node_modules/preline/dist/*.js',],
  theme: {
    extend: {
      colors: {
        customGray: '#303030',
      },
      colors: {
        blackNew: "#181818"
      },
      fontFamily: {
        body: ['embed']
      }
    },
  },
  plugins: [require('preline/plugin'),],
}

