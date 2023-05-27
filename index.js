
const deepmerge = require("deepmerge");
const { withMaterialColors } = require("tailwind-material-colors");

let materialTailwindConfig = {

  content: ["./src/**/*.{html,js,css}"],
  theme: {
    colors: {
      primary: "#138b29",
      blue:"#1646f3"
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
          "0 0.0625rem 0.125rem 0 rgba(0,0,0,.3), 0 0.0625rem 0.1875rem 0.0625rem rgba(0,0,0,.15)",
        sm: "0 0.0625rem 0.125rem 0 rgba(0,0,0,.3), 0 0.0625rem 0.1875rem 0.0625rem rgba(0,0,0,.15)",
      },
    },
  },
  // prefix: 'mat',
  plugins: [require("./src/components/btn"), require("./src/components/card")],
};

function useMD3(tailwindConfig) {
  materialTailwindConfig = deepmerge(materialTailwindConfig, { ...tailwindConfig })
  let colorInput = materialTailwindConfig.theme.colors;
  let color = withMaterialColors({}, colorInput);
  materialTailwindConfig.theme.colors = color.theme.colors;

  return materialTailwindConfig;
}

export default useMD3;
