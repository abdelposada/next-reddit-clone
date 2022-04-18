module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './src/types.ts'],
  darkMode: 'class',
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        dark: '#1a1a1b',
        light: '#ffffff',
        primary: '#f21170',
        secondary: '#eefc57',
        tertiary: '#56EEF4',
      },
    },
  },
  plugins: [],
};
