
import themeConfig from './src/theme/theme.js';
import deepmerge from 'deepmerge';

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