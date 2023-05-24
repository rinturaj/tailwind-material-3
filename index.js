import btn from "./src/components/btn";

const deepmerge = require("deepmerge");

const materialTailwindConfig = {
  content: ["./src/**/*.{html,js,css}"],
  theme: {
    colors: {
    
      primary:{
        DEFAULT:'#6750A4',
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
      secondary:{
        DEFAULT:'#958da5',
          '50': '#faf9fb', 
          '100': '#f4f4f6', 
          '200': '#e5e3e9', 
          '300': '#d5d1db', 
          '400': '#b5afc0', 
          '500': '#958da5', 
          '600': '#867f95', 
          '700': '#706a7c', 
          '800': '#595563', 
          '900': '#494551'
      
      },
      tertiary:{
        DEFAULT:'#b58392',
        '50': '#fbf9fa', 
        '100': '#f8f3f4', 
        '200': '#ede0e4', 
        '300': '#e1cdd3', 
        '400': '#cba8b3', 
        '500': '#b58392', 
        '600': '#a37683', 
        '700': '#88626e', 
        '800': '#6d4f58', 
        '900': '#594048'
    },
      neutral:{
        DEFAULT:'#939094',
        '50': '#faf9fa', 
        '100': '#f4f4f4', 
        '200': '#e4e3e4', 
        '300': '#d4d3d4', 
        '400': '#b3b1b4', 
        '500': '#939094', 
        '600': '#848285', 
        '700': '#6e6c6f', 
        '800': '#585659', 
        '900': '#484749'
    },
      danger: {
        DEFAULT:'#b3261e',
        '50': '#fbf4f4', 
        '100': '#f7e9e9', 
        '200': '#ecc9c7', 
        '300': '#e1a8a5', 
        '400': '#ca6762', 
        '500': '#b3261e', 
        '600': '#a1221b', 
        '700': '#861d17', 
        '800': '#6b1712', 
        '900': '#58130f'
    },
      success: {
        DEFAULT:'#21b31e',
    
        '50': '#f4fbf4', 
        '100': '#e9f7e9', 
        '200': '#c8ecc7', 
        '300': '#a6e1a5', 
        '400': '#64ca62', 
        '500': '#21b31e', 
        '600': '#1ea11b', 
        '700': '#198617', 
        '800': '#146b12', 
        '900': '#10580f'
    },
      warning: {
        '50': '#fefdf8', 
        '100': '#fefbf0', 
        '200': '#fcf4db', 
        '300': '#f9edc5', 
        '400': '#f5e099', 
        '500': '#f1d26d', 
        '600': '#d9bd62', 
        '700': '#b59e52', 
        '800': '#917e41', 
        '900': '#766735'
    }

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
        DEFAULT: '1rem',
        'none': '0rem',
        'extrasmall':'0.375rem',
        'small':'0.625rem',
        'medium':'1rem',
        'large':'1.25rem',
        'extralarge':'1.875rem',
        'full': '50%'
      },
      boxShadow:{
        DEFAULT:'0 0.0625rem 0.125rem 0 rgba(0,0,0,.3), 0 0.0625rem 0.1875rem 0.0625rem rgba(0,0,0,.15)',
        'sm':'0 0.0625rem 0.125rem 0 rgba(0,0,0,.3), 0 0.0625rem 0.1875rem 0.0625rem rgba(0,0,0,.15)'
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
