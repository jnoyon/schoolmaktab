module.exports = {
  darkMode: 'class', // Use class strategy for dark mode
  theme: {
    extend: {
      colors: {
        customColor: '#123456', // Light mode color
        customDarkColor: '#654321', // Dark mode color
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
