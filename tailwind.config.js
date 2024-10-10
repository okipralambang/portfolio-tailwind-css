/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container:{
      center:true,
      padding:"16px",

    },
    extend: {
      colors:{
        primary:"#14b8a6",
        drak:"#0f172a",
        secondary:"#64748b"
      },
      screens:{
        "2xl":"1320px"
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

