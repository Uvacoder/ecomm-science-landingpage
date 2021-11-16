const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: [
    './index.html', 
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'trueGray': colors.trueGray,
        'emerald': colors.emerald,
        'sky': colors.sky,
        pony: {
          'primary': '#303030',
          'secondary': '#212121',
          'button': '#1d4ed8',
          'card': '#424242',
        }
      },
      fontFamily: {
        materialdesign: "'materialdesignicons', serif"
      },
    },
    boxShadow: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      none: 'none',
      red: '10px 5px 5px 10px rgba(255, 0, 0, 0.10)',
      green: '0 5px 20px -5px rgba(52, 209, 191, 100)',
      blue: '0 5px 20px -5px rgba(47, 85, 212, 100)',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}