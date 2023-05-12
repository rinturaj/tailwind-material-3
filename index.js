
const themeConfig  = require( './src/theme/theme.js')
const deepmerge  = require ('deepmerge');

const materialTailwindConfig = {
    content: [],
    theme: {
        themeConfig
    },
    plugins: [],
  };

function useMD3(tailwindConfig) {
    return deepmerge(materialTailwindConfig, { ...tailwindConfig });
  }
  
  export default useMD3;