/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px'
    },
    extend: {
      colors: {
        lightBlue: '#00008B',
        fontColor: '#333333',
        secondaryColor: '#d25f15',
        brighterBlue: '#3399ff'
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1.5rem'
        }
      },
      fontFamily: {
        oswald: ['Oswald', 'sans-serif'],
        dmsans: ['DM Sans', 'sans-serif'],
        nunito: ['Nunito Sans', 'sans-serif']
      },
    },
  },
  plugins: [],
}

