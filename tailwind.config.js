/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ajusta según tu estructura de carpetas
  ],
  theme: {
    extend: {
      screens: {
        'mobile': {'max': '720px'},
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif']
      },
      colors: {
        "Grey-grey-0":'#FFF',
        "Grey-grey-30":"#F9F9F9",
        "Grey-grey-40":"#EEEEEE",
        "Grey-grey-60":"#DEDEDE",
        "Grey-grey-70":"#BCBCBC",
        "Grey-grey-80":"#A2A2A2",
        "Grey-grey-100":"#626262",
        "Grey-grey-120":"#4D4D4D",

        'primary-primary-130':'#217A6F',
        'primary-primary-100':'#34AE9F',
        'primary-primary-80':'#7FDFD3',

        'secondary-green-120': '#467C1D',
        'secondary-green-100': '#5B9B2B',
        'secondary-green-20': '#E5FFD2',

        'secondary-purple-100': '#842592',
        'secondary-purple-20': '#F0E4F1',

        'expanded-yellow-150':'#8C6D1A',
        'expanded-yellow-100':'#E5B738',
        'expanded-yellow-20':'#FFF6DF',

        'expanded-red-120':'#A3321F',
        'expanded-red-100':'#BC422D',
        'expanded-red-20':'#F7E8E5',

        'expanded-turquoise-140':'#007775',
        'expanded-turquoise-100':'#38B5B2',
        'expanded-turquoise-20':'#E7F6F5',
        
      },
    },
  },
  plugins: [
    function ({ addBase }) {
      addBase({
        'img': {
          maxWidth: 'none',
          height: 'auto',
        },
        'video': {
          maxWidth: 'none',
          height: 'auto',
        },
      });
    },
  ],
}
