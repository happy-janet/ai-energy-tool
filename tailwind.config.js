// module.exports = {
//   content: [
//     './src/components/*.{js,ts,jsx,tsx}', // Scans all files in the src directory
//     './src/components/**/*.{js,jsx}', // Explicitly includes .jsx files in the components folder
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };



module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // Scans all files in the `src` directory and its subdirectories
    './public/index.html',       // Scans the `index.html` file in the `public` folder (if applicable)
  ],
  theme: {
    extend: {
      // Add customizations here if needed
      colors: {
        primary: '#0070f3', // Example: Custom primary color
        secondary: '#1a202c', // Example: Custom secondary color
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Example: Custom font family
      },
      spacing: {
        '128': '32rem', // Example: Custom spacing value
      },
      screens: {
        'xs': '480px', // Example: Custom screen size
      },
    },
  },
  plugins: [],
};