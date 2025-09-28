/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        blob: {
          '0%': { transform: 'scale(1)'},
          '33%': { transform: 'scale(1)'},
          '66%': { transform: 'scale(1)'},
          '100%': { transform: 'scale(1)'},
          },
        },
        animation: {
          blob: 'blob 10s infinite',
        },
        backgroundImage: {
          'skills-gradient': 'linear-gradient(38.73deg, rgba(13,148,136,0.15) 0%, rgba(13,148,136,0) 50%), linear-gradient(141.27deg, rgba(13,148,136,0) 50%, rgba(13,148,136,0.15) 100%)',
        },
    },
  },
  plugins: [],
}
