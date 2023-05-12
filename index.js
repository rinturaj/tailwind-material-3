const deepmerge = require("deepmerge");

const materialTailwindConfig = {
  content: ["./src/**/*.{html,js,css}"],
  theme: {
    colors: {
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
        'rin': '4rem'

      },
      borderRadius: {
        '4xl': '2rem',
        'rin': '4rem'
      }
    }
  },
  plugins: [],
};

function useMD3(tailwindConfig) {
  return deepmerge(materialTailwindConfig, { ...tailwindConfig });
}

export default useMD3;
