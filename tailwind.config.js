module.exports = {
  mode:'jit',
  content: [
    "./public/**/*.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#79b473',
        
      }
    },
  },
  plugins: [],
}
