/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      fontFamily: {
        main: ['Poppins'],
      },
      width: {
        widthSize: '1160px',
      },
      height: {
        logoHeight: '100px',
      },
      opacity: {
        svgOpacity: '0.8',
      },
      boxShadow: {
        mainShadow:
          '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
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
  plugins: [
    function ({ addComponents, theme }) {
      const headings = {
        '.heading-primary': {
          fontSize: '64px',
          fontWeight: '500',
          lineHeight: '1.25',
        },
        '.heading-secondary': {
          fontSize: '30px',
          color: theme('colors.primary'),
          fontWeight: '600',
        },
        '.subtitle': {
          fontSize: '16px',
          color: theme('colors.description'),
          fontWeight: '500',
          textTransform: 'uppercase',
        },
      };
      addComponents(headings);
    },
    function ({ addComponents, theme }) {
      const buttons = {
        '.btn-info': {
          display: 'flex',
          alignItems: 'center',
          padding: '16px 8px 16px 0',
          gap: '20px',
          fontSize: '20px',
          color: theme('colors.accent'),
          textTransform: 'uppercase',
        },
        '.btn-arrow': {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '56px',
          height: '56px',
          padding: '16px',
          borderRadius: '50%',
          fill: 'currentColor',
          transition: 'all 0.5s',
          '&:hover': {
            backgroundColor: theme('colors.accent'),
            color: '#ffffff',
          },
        },
      };
      addComponents(buttons);
    },
  ],
};
