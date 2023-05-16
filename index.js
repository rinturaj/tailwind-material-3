const deepmerge = require("deepmerge");

const materialTailwindConfig = {
  content: ["./src/**/*.{html,js,css}"],
  theme: {
    colors: {
    
      primary:'#6750A4',
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
  plugins: [],
};

function useMD3(tailwindConfig) {
  return deepmerge(materialTailwindConfig, { ...tailwindConfig });
}

export default useMD3;
