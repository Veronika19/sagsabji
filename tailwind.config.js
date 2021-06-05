module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        yellow: {
          DEFAULT: '#ffa827',
          light: '#5c6ac4',
          dark: '#202e78',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
