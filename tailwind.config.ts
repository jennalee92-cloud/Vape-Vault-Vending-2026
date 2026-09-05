/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0f051a',
          purple: '#7c3aed',
          cyan: '#06b6d4',
          green: '#10b981',
          orange: '#f59e0b',
        },
      },
    },
  },
  plugins: [],
};
module.exports = config;
