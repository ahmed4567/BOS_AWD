/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        prussianBlue: {
          '50': '#eefaff',
          '100': '#dcf5ff',
          '200': '#b2edff',
          '300': '#6de1ff',
          '400': '#20d3ff',
          '500': '#00beff',
          '600': '#0099df',
          '700': '#0079b4',
          '800': '#006795',
          '900': '#00547a',
          '950': '#003049',
      },
      
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
        barcode : "113.39px"
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
      animation:{
        'spin-slow': 'spin 50s linear infinite',
        blob :"blob 7s infinite",
       
      },
      keyframes:{
        blob:{
        "0%":{
          transform:" translate(0px,0px) scale(1)"
        },
        "33%":{
          transform:"translate(30px,-50px) scale(1.1)"
        },
        "66%":{
          transform:"translate(-20px,20px) scale(0.9)"
        },
        "100%":{
          transform:"translate(0px,0px) scale(1)"
        }
      }
    }
    },
  },
  plugins: [],
};