const deepmerge = require("deepmerge");
const { withMaterialColors } = require("tailwind-material-colors");

let materialTailwindConfig = {
  content: ["./src/**/*.{html,js,css}"],
  theme: {
    colors: {
      primary: "#9cd67d",
      blue: "#8116f3",
    },

    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
      roboto: ["Roboto", "serif"],
    },
    extend: {
      
      spacing: {
        none: "0rem",
        extrasmall: "0.375rem",
        small: "0.625rem",
        medium: "1rem",
        large: "1.25rem",
        extralarge: "1.875rem",
      },

      borderRadius: {
        DEFAULT: "1rem",
        none: "0rem",
        extrasmall: "0.375rem",
        small: "0.625rem",
        medium: "1rem",
        large: "1.25rem",
        extralarge: "1.875rem",
        full: "50%",
      },
      boxShadow: {
        DEFAULT:
          "0px 1px 2px 0px rgb(0 0 0 / 30%), 0px 1px 3px 1px rgb(0 0 0 / 15%)",
        l1: " 0px 1px 2px 0px rgb(0 0 0 / 30%), 0px 1px 3px 1px rgb(0 0 0 / 15%)",
        l2: " 0px 1px 2px 0px rgb(0 0 0 / 30%), 0px 2px 6px 2px rgb(0 0 0 / 15%)",
        l3: " 0px 1px 3px 0px rgb(0 0 0 / 30%), 0px 4px 8px 3px rgb(0 0 0 / 15%)",
        l4: " 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
      },
    },
  },
  // prefix: 'mat',
  plugins: [require("./src/components/btn"), require("./src/components/card")],
};

function useMD3(tailwindConfig) {
  materialTailwindConfig = deepmerge(materialTailwindConfig, {
    ...tailwindConfig,
  });
  let colorInput = materialTailwindConfig.theme.colors;
  let color = withMaterialColors({}, colorInput);
  console.log(color);
  materialTailwindConfig.theme.colors = color.theme.colors;

  return materialTailwindConfig;
}

export default useMD3;
