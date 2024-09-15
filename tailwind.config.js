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
  daisyui: {
    themes: false, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
}
