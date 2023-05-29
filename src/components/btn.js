const { map } = require("lodash");
const plugin = require("tailwindcss/plugin");

module.exports = plugin(function ({ addComponents, theme, config }) {
 
  const color = Object.keys(config("theme.colors")).filter((x) =>
    /^\w+-light/.test(x)
  );
  const uniqueArray = [
    ...new Set(color.map((item) => item.split("-light")[0])),
  ];

  let varients = uniqueArray.map((x) => {
    return {
      [`.raised-btn.color-${x}-light`]: {
        backgroundColor: theme(`colors.${x}-container-light`) + "!important",
        color: theme(`colors.${x}-light`) + "!important",

        "&:focus": {
          backgroundColor:
            theme(`colors.${x}-container-light-focus`) + "!important",
          color: theme(`colors.${x}-light-focus`) + "!important",
        },
        "&:hover": {
          backgroundColor:
            theme(`colors.${x}-container-light-hover`) + "!important",
          color: theme(`colors.${x}-light-hover`) + "!important",
        },
        "&:active": {
          backgroundColor:
            theme(`colors.${x}-container-light-press`) + "!important",
          color: theme(`colors.${x}-light-press`) + "!important",
        },
      },
      [`.raised-btn.color-${x}-dark`]: {
        backgroundColor: theme(`colors.${x}-container-dark`) + "!important",
        color: theme(`colors.${x}-dark`) + "!important",

        "&:focus": {
          backgroundColor:
            theme(`colors.${x}-container-dark-focus`) + "!important",
          color: theme(`colors.${x}-dark-focus`) + "!important",
        },
        "&:hover": {
          backgroundColor:
            theme(`colors.${x}-container-dark-hover`) + "!important",
          color: theme(`colors.${x}-dark-hover`) + "!important",
        },
        "&:active": {
          backgroundColor:
            theme(`colors.${x}-container-dark-press`) + "!important",
          color: theme(`colors.${x}-dark-press`) + "!important",
        },
      },
    };
  });

  varients = varients.reduce((r, c) => Object.assign(r, c), {});

  const buttons = {
    ".raised-btn": {
      backgroundColor: theme("colors.primary-container-light"),
      color: theme("colors.primary-light"),
      borderRadius: theme("borderRadius.extralarge"),
      paddingBottom: theme("spacing.small"),
      paddingRight: theme("spacing.large"),
      paddingTop: theme("spacing.extrasmall"),
      paddingLeft: theme("spacing.large"),
      boxShadow: theme("boxShadow.DEFAULT"),
      "&:hover": {
        backgroundColor: theme("colors.primary-container-light-hover"),
        color: theme("colors.primary-light-hover"),
      },
      "&:active": {
        backgroundColor: theme("colors.primary-container-light-press"),
        color: theme("colors.primary-light-press"),
        boxShadow: "none",
        borderRadius: theme("borderRadius.medium"),
      },
    },

    ".filled-btn": {
      backgroundColor: theme("colors.primary-light"),
      color: theme("colors.on-primary-light"),
      borderRadius: theme("borderRadius.extralarge"),
      paddingBottom: theme("spacing.small"),
      paddingRight: theme("spacing.large"),
      paddingTop: theme("spacing.extrasmall"),
      paddingLeft: theme("spacing.large"),
      "&:disabled,filled-btn[disabled]": {
        backgroundColor: theme("colors.primary-light"),
        color: theme("colors.on-primary-light"),
        opacity:'.12',
        boxShadow: "none !important",
        borderRadius: 'none !important'
      },
      "&:hover": {
        backgroundColor: theme("colors.primary-light-hover"),
        color: theme("colors.on-primary-light"),
        boxShadow: theme("boxShadow.DEFAULT"),
      },
      "&:active": {
        backgroundColor: theme("colors.primary-light-press"),
        color: theme("colors.on-primary-light-press"),
        boxShadow: "none",
        borderRadius: theme("borderRadius.medium"),
      },
    },
    ".filled-tonal-btn": {
      backgroundColor: theme("colors.primary-container-light"),
      color: theme("colors.on-primary-container-light"),
      borderRadius: theme("borderRadius.extralarge"),
      paddingBottom: theme("spacing.small"),
      paddingRight: theme("spacing.large"),
      paddingTop: theme("spacing.extrasmall"),
      paddingLeft: theme("spacing.large"),
      "&:disabled,filled-btn[disabled]": {
        backgroundColor: theme("colors.primary-container-light") + "!important",
        color: theme("colors.primary-on-container-light") + "!important",
        opacity:'.12',
        boxShadow: "none !important",
        borderRadius: 'none !important'
      },
      "&:hover": {
        backgroundColor: theme("colors.primary-container-light-hover"),
        color: theme("colors.on-primary-container-light"),
        boxShadow: theme("boxShadow.DEFAULT"),
      },
      "&:active": {
        backgroundColor: theme("colors.primary-container-light-press"),
        color: theme("colors.on-primary-container-light"),
        boxShadow: "none",
        borderRadius: theme("borderRadius.medium"),
      },
    },
    ".outlined-btn": {
      backgroundColor: 'transparent',
      color: theme("colors.primary-light"),
      borderRadius: theme("borderRadius.extralarge"),
      paddingBottom: theme("spacing.small"),
      paddingRight: theme("spacing.large"),
      paddingTop: theme("spacing.extrasmall"),
      paddingLeft: theme("spacing.large"),
      borderColor: theme("colors.outline"),
      borderWidth: '1px',
      "&:disabled,filled-btn[disabled]": {
        backgroundColor: theme("colors.inverse-primary") + "!important",
        color: theme("colors.primary") + "!important",
        opacity:'.12',
        boxShadow: "none !important",
        borderRadius: 'none !important'
      },
      "&:hover": {
        backgroundColor: theme("colors.inverse-primary"),
        color: theme("colors.on-primary-container-light"),
        boxShadow: theme("boxShadow.DEFAULT"),
      },
      "&:active": {
        backgroundColor: theme("colors.primary-container-light-press"),
        color: theme("colors.on-primary-container-light"),
        boxShadow: "none",
        borderRadius: theme("borderRadius.medium"),
      },
    },
    ".text-btn": {},
    ".icon-btn": {},
    ".fab-btn": {},
    ".extended-fab-btn": {},
    ...varients,
  };

  // console.log(buttons);
  addComponents(buttons);
});
