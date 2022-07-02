module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    // screens :{
    //   'sm' : {'max' : '480px'},
    //   'md' : {'max' : '768px'},
    //   'lg' : {'max' : '1024px'},
    //   'xl' : {'max' : '1200px'},
    //   '2xl' : {'min' : '1201px'}
    // },
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
