/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        dark: {
          background: '#0C0E12', // Updated from #121212
          surface: '#0C0E12',    // Updated from #1E1E1E
          primary: '#BB86FC',
          secondary: '#03DAC6',
          onPrimary: '#000000',
          onSurface: '#FFFFFF',
          onSurfaceSecondary: '#AAAAAA',
        },
        parents: 'rgb(66, 235, 198)',
        kids: 'rgb(187, 134, 252)',
      }
    },
  },
  plugins: [],
}