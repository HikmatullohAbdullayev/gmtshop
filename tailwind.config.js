/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'mobile360': {'max':'360px'},
      // => @media (max-width: 360px) { ... }
      'mobile': {'max':'375px'},
      // => @media (max-width: 360px) { ... }
      
      'mobile490': {'max':'490px'},
      // => @media (max-width: 530px) { ... }

      'mobile530': {'max':'530px'},
      // => @media (max-width: 530px) { ... }
      
      'mobil2': {'max':'640px'},
      // => @media (max-width: 640px) { ... }
     
      'mobil670': {'max':'670px'},
      // => @media (max-width: 670px) { ... }
     
      'mobil675': {'max':'675px'},
      // => @media (max-width: 670px) { ... }

      'mobile3': {'max': '768px'},
      // => @media (max-width: 768px) { ... }
      
      'tablemin': {'max': '845px'},
      // => @media (max-width: 845px) { ... }

      'table1005': {'max':'1005px'} ,
      // => @media (max-width: 1005px) { ... }

      'table': {'max':'768px'} ,
      // => @media (max-width: 1024px) { ... }
     
      'table1080': {'max':'1080px'} ,
      // => @media (max-width: 1080px) { ... }
      
      'table1170': {'max':'1170px'} ,
      // => @media (max-width: 1170px) { ... }

      'desktop1220': {'max':'1220px'} ,
      // => @media (max-width: 1220px) { ... }

      'desktop': {'max':'1440px'} ,
      // => @media (max-width: 1280px) { ... }
     
      'desktop1370': {'max':'1370px'} ,
      // => @media (max-width: 1370px) { ... }
    },
    colors: {
      white: "#fff",
      black: "#000",
      primaryGray: "#088269",
      primaryBlack: "#202020",
      primaryMilk: "#F8F7F3",
      secondaryGray:"#23473B",
      secondaryGray100:"#07745E",
      secondaryGray90:"#BDDBC7",
      secondary90:"#E1EFE6",
      secondary2:"#7A7687",
     


    },
  },
  plugins: [],
}