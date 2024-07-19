/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      fontFamily: {
        main: ['Poppins'],
      },
      colors: {
        primary: '#1d1e21',
        description: '#929395',
        accent: '#5994D9',
        background: '#F5F5F5',
        buttonHover: '#2254A3',
      },
    },
  },
};
