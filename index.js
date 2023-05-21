import btn from "./src/components/btn";

const deepmerge = require("deepmerge");

const materialTailwindConfig = {
  content: ["./src/**/*.{html,js,css}"],
  theme: {
    colors: {
    
      primary:{
        'default':'#6750A4',
        '50': '#f3f3fb',
        '100': '#e7e5f4',
        '200': '#d3d0ed',
        '300': '#b3b0e0',
        '400': '#918ad0',
        '500': '#7c6ec3',
        '600': '#6f5bb5',
        '700': '#6750a4',
        '800': '#5a4687',
        '900': '#4a3c6c',
        '950': '#302843',
      },
      secondary:'#958DA5',
      tertiary:'#B58392',
      neutral:'#939094',
      danger:'#B3261E',
      success:'#21b31e',
      warning:'#f1d26d',

    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      roboto: ['Roboto', 'serif'],
    },
    extend: {
    
      spacing: {
        'none': '0rem',
        'extrasmall':'0.375rem',
        'small':'0.625rem',
        'medium':'1rem',
        'large':'1.25rem',
        'extralarge':'1.875rem',
      },

      borderRadius: {
        'none': '0rem',
        'extrasmall':'0.375rem',
        'small':'0.625rem',
        'medium':'1rem',
        'large':'1.25rem',
        'extralarge':'1.875rem',
        'full': '50%'
      }
    }
  },
  // prefix: 'mat',
  plugins: [
    require('./src/components/btn'),
    require('./src/components/card')

  ],
};

function useMD3(tailwindConfig) {
  console.log(materialTailwindConfig);
  return deepmerge(materialTailwindConfig, { ...tailwindConfig });
}

export default useMD3;
