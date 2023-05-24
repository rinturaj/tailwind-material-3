const { map } = require("lodash");
const plugin = require("tailwindcss/plugin");

module.exports = plugin(function ({ addComponents, theme, e, addVariant }) {
  const color = Object.keys(theme("colors"));
  let varients = color.map((x) => {
    return {
      [`.raised-btn.color-${x}`]: {
        backgroundColor: theme(`colors.${x}.100`) + '!important',
        color: theme(`colors.${x}.700`) + '!important',

          "&:focus": {
            backgroundColor: theme(`colors.${x}.200`) + '!important',
            color: theme(`colors.${x}.800`) + '!important',
          },
          "&:hover": {
            backgroundColor: theme(`colors.${x}.200`) + '!important',
            color: theme(`colors.${x}.800`) + '!important',
          },
          "&:active": {
            backgroundColor: theme(`colors.${x}.200`) + '!important',
            color: theme(`colors.${x}.800`) + '!important',
          }
      }
    };
  });

  varients =varients.reduce(((r, c) => Object.assign(r, c)), {});


  const buttons = {
    ".raised-btn": {
      backgroundColor: theme("colors.primary.100"),
      color: theme("colors.primary.700"),
      borderRadius: theme("borderRadius.extralarge"),
      paddingBottom: theme("spacing.small"),
      paddingRight: theme("spacing.large"),
      paddingTop: theme("spacing.extrasmall"),
      paddingLeft: theme("spacing.large"),
      boxShadow: theme("boxShadow.DEFAULT"),
      "&:hover": {
        backgroundColor: theme("colors.primary.200"),
        color: theme("colors.primary.800"),
      },
      "&:active": {
        backgroundColor: theme("colors.primary.300"),
        color: theme("colors.primary.800"),
        boxShadow: "none",
        borderRadius: theme("borderRadius.medium"),
      },
    },

    ".filled-btn": {
      backgroundColor: theme("colors.primary.800"),
      color: theme("colors.primary.50"),
      borderRadius: theme("borderRadius.extralarge"),
      paddingBottom: theme("spacing.small"),
      paddingRight: theme("spacing.large"),
      paddingTop: theme("spacing.extrasmall"),
      paddingLeft: theme("spacing.large"),
      "&:disabled,filled-btn[disabled]": {
        backgroundColor: theme("colors.primary.100") + '!important',
        color: theme("colors.primary.400") + '!important',
        boxShadow: "none !important",

      },
      "&:hover": {
        backgroundColor: theme("colors.primary.600"),
        color: theme("colors.primary.50"),
        boxShadow: theme("boxShadow.DEFAULT"),

      },
      "&:active": {
        backgroundColor: theme("colors.primary.400"),
        color: theme("colors.primary.50"),
        boxShadow: "none",
        borderRadius: theme("borderRadius.medium"),
      },
    },
    ".filled-tonal-btn": {
      backgroundColor: theme("colors.primary.100"),
      color: theme("colors.secondary.900"),
      borderRadius: theme("borderRadius.extralarge"),
      paddingBottom: theme("spacing.small"),
      paddingRight: theme("spacing.large"),
      paddingTop: theme("spacing.extrasmall"),
      paddingLeft: theme("spacing.large"),
      "&:disabled,filled-btn[disabled]": {
        backgroundColor: theme("colors.primary.100") + '!important',
        color: theme("colors.primary.400") + '!important',
        boxShadow: "none !important",

      },
      "&:hover": {
        backgroundColor: theme("colors.primary.200"),
        color: theme("colors.primary.900"),
        boxShadow: theme("boxShadow.DEFAULT"),

      },
      "&:active": {
        backgroundColor: theme("colors.primary.300"),
        color: theme("colors.primary.900"),
        boxShadow: "none",
        borderRadius: theme("borderRadius.medium"),
      },
    },
    ".outlined-btn": {},
    ".text-btn": {},
    ".icon-btn": {},
    ".fab-btn": {},
    ".extended-fab-btn": {},
    ...varients
  };
  console.log(buttons);
  //   addComponents(varients)
  addComponents(buttons);
});
