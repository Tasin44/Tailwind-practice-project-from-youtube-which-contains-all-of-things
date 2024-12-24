/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  // content:['*'],
  theme: {
    extend: {
      colors:{
        // 'primary':'#3238f2',
        'primary':'#02021a',
      },
      fontFamily:{
        'display':['Poppins','sans-serif'],
        'body':['Inter','sans-serif']
      }
    },
  },
  plugins: [],
}

