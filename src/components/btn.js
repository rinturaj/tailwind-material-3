const { map } = require("lodash");
const plugin = require("tailwindcss/plugin");

module.exports = plugin(function ({ addComponents, theme, config }) {
  const color = Object.keys(config("theme.colors")).filter((x) =>
    /^\w+-light/.test(x)
  );
  const uniqueArray = [
    ...new Set(color.map((item) => item.split("-light")[0])),
  ];

  let variants = uniqueArray.map((x) => {
    return {
      [`.raised-btn.btn-${x}`]: {
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
      [`.raised-btn.btn-${x}-dark`]: {
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
      [`.filled-btn.btn-${x}`]: {
        backgroundColor: theme(`colors.${x}-light`) + "!important",
        color: theme(`colors.on-${x}-light`) + "!important",
        "&:focus": {
          backgroundColor: theme(`colors.${x}-light-focus`) + "!important",
          color: theme(`colors.on-${x}-light`) + "!important",
        },
        "&:hover": {
          backgroundColor: theme(`colors.${x}-light-hover`) + "!important",
          color: theme(`colors.on-${x}-light`) + "!important",
        },
        "&:active": {
          backgroundColor: theme(`colors.${x}-light-press`) + "!important",
          color: theme(`colors.on-${x}-light`) + "!important",
        },
      },
      [`.filled-btn.btn-${x}-dark`]: {
        backgroundColor: theme(`colors.${x}-dark`) + "!important",
        color: theme(`colors.on-${x}-dark`) + "!important",

        "&:focus": {
          backgroundColor: theme(`colors.${x}-dark-focus`) + "!important",
          color: theme(`colors.on-${x}-dark`) + "!important",
        },
        "&:hover": {
          backgroundColor: theme(`colors.${x}-dark-hover`) + "!important",
          color: theme(`colors.on-${x}-dark`) + "!important",
        },
        "&:active": {
          backgroundColor: theme(`colors.${x}-dark-press`) + "!important",
          color: theme(`colors.on-${x}-dark`) + "!important",
        },
      },
      [`.filled-tonal-btn.btn-${x}`]: {
        backgroundColor: theme(`colors.${x}-container-light`) + "!important",
        color: theme(`colors.on-${x}-container-light`) + "!important",
        "&:focus": {
          backgroundColor:
            theme(`colors.${x}-container-light-focus`) + "!important",
          color: theme(`colors.on-${x}-container-light`) + "!important",
        },
        "&:hover": {
          backgroundColor:
            theme(`colors.${x}-container-light-hover`) + "!important",
          color: theme(`colors.on-${x}-container-light`) + "!important",
        },
        "&:active": {
          backgroundColor:
            theme(`colors.${x}-container-light-press`) + "!important",
          color: theme(`colors.on-${x}-container-light`) + "!important",
        },
      },
      [`.filled-tonal-btn.btn-${x}-dark`]: {
        backgroundColor: theme(`colors.${x}-container-dark`) + "!important",
        color: theme(`colors.on-${x}-container-dark`) + "!important",

        "&:focus": {
          backgroundColor:
            theme(`colors.${x}-container-dark-focus`) + "!important",
          color: theme(`colors.on-${x}-container-dark`) + "!important",
        },
        "&:hover": {
          backgroundColor:
            theme(`colors.${x}-container-dark-hover`) + "!important",
          color: theme(`colors.on-${x}-container-dark`) + "!important",
        },
        "&:active": {
          backgroundColor:
            theme(`colors.${x}-container-dark-press`) + "!important",
          color: theme(`colors.on-${x}-container-dark`) + "!important",
        },
      },
      [`.outlined-btn.btn-${x}`]: {
        color: theme(`colors.${x}-light`) + "!important",
        "&:focus": {
          backgroundColor: theme(`colors.${x}-light`) + " 32 ",
          color: theme(`colors.${x}-light`),
        },
        "&:hover": {
          backgroundColor: theme(`colors.${x}-light`) + " 48 ",
          color: theme(`colors.${x}-light`),
        },
        "&:active": {
          backgroundColor: theme(`colors.${x}-light`) + " 48 ",
          color: theme(`colors.${x}-light`),
        },
      },
      [`.outlined-btn.btn-${x}-dark`]: {
        color: theme(`colors.${x}-dark`) + "!important",
        "&:focus": {
          backgroundColor: theme(`colors.${x}-dark`) + " 32 ",
          color: theme(`colors.${x}-dark`),
        },
        "&:hover": {
          backgroundColor: theme(`colors.${x}-dark`) + " 48 ",
          color: theme(`colors.${x}-dark`),
        },
        "&:active": {
          backgroundColor: theme(`colors.${x}-dark`) + " 48 ",
          color: theme(`colors.${x}-dark`),
        },
      },
      [`.text-btn.btn-${x}`]: {
        color: theme(`colors.${x}-light`) + "!important",
        "&:focus": {
          backgroundColor: theme(`colors.${x}-light`) + " 32 ",
          color: theme(`colors.${x}-light`),
        },
        "&:hover": {
          backgroundColor: theme(`colors.${x}-light`) + " 48 ",
          color: theme(`colors.${x}-light`),
        },
        "&:active": {
          backgroundColor: theme(`colors.${x}-light`) + " 48 ",
          color: theme(`colors.${x}-light`),
        },
      },
      [`.text-btn.btn-${x}-dark`]: {
        color: theme(`colors.${x}-dark`) + "!important",
        "&:focus": {
          backgroundColor: theme(`colors.${x}-dark`) + " 32 ",
          color: theme(`colors.${x}-dark`),
        },
        "&:hover": {
          backgroundColor: theme(`colors.${x}-dark`) + " 48 ",
          color: theme(`colors.${x}-dark`),
        },
        "&:active": {
          backgroundColor: theme(`colors.${x}-dark`) + " 48 ",
          color: theme(`colors.${x}-dark`),
        },
      },
      [`.icon-btn.btn-${x}`]: {
        color: theme(`colors.${x}-light`) + "!important",
        "&:focus": {
          backgroundColor: theme(`colors.${x}-light`) + " 32 ",
          color: theme(`colors.${x}-light`),
        },
        "&:hover": {
          backgroundColor: theme(`colors.${x}-light`) + " 48 ",
          color: theme(`colors.${x}-light`),
        },
        "&:active": {
          backgroundColor: theme(`colors.${x}-light`) + " 48 ",
          color: theme(`colors.${x}-light`),
        },
      },
      [`.icon-btn.btn-${x}-dark`]: {
        color: theme(`colors.${x}-dark`) + "!important",
        "&:focus": {
          backgroundColor: theme(`colors.${x}-dark`) + " 32 ",
          color: theme(`colors.${x}-dark`),
        },
        "&:hover": {
          backgroundColor: theme(`colors.${x}-dark`) + " 48 ",
          color: theme(`colors.${x}-dark`),
        },
        "&:active": {
          backgroundColor: theme(`colors.${x}-dark`) + " 48 ",
          color: theme(`colors.${x}-dark`),
        },
      },
      [`.fab-btn.btn-${x}`]: {
        backgroundColor: theme(`colors.${x}-container-light`)+ "!important",
        color: theme(`colors.on-${x}-container-light`)+ "!important",
       
        "&:hover": {
          backgroundColor: theme(`colors.${x}-container-light-hover`)+ "!important",
          color: theme(`colors.${x}-light`)+ "!important",
        },
        "&:active": {
          backgroundColor: theme(`colors.${x}-container-light-press`)+ "!important",
          color: theme(`colors.${x}-light`)+ "!important",
        },
      },
      [`.fab-btn.btn-${x}-dark`]: {
        backgroundColor: theme(`colors.${x}-container-dark`)+ "!important",
        color: theme(`colors.on-${x}-container-dark`)+ "!important",
       
        "&:hover": {
          backgroundColor: theme(`colors.${x}-container-dark-hover`) + "!important",
          color: theme(`colors.${x}-light`)+ "!important",
        },
        "&:active": {
          backgroundColor: theme(`colors.${x}-container-dark-press`) + "!important",
          color: theme(`colors.${x}-dark`) + "!important",
        },
      },
    };
  });

  variants = variants.reduce((r, c) => Object.assign(r, c), {});

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
      "&:disabled,filled-btn[disabled]": {
        backgroundColor: theme("colors.primary-container-light"),
        color: theme("colors.primary-light"),
        opacity: ".12",
        boxShadow: "none !important",
        borderRadius: "none !important",
      },
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
        opacity: ".12",
        boxShadow: "none !important",
        borderRadius: "none !important",
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
      "&:disabled,filled-tonal-btn[disabled]": {
        backgroundColor: theme("colors.primary-container-light") + "!important",
        color: theme("colors.primary-on-container-light") + "!important",
        opacity: ".12",
        boxShadow: "none !important",
        borderRadius: "none !important",
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
      backgroundColor: "transparent",
      color: theme("colors.primary-light"),
      borderRadius: theme("borderRadius.extralarge"),
      paddingBottom: theme("spacing.small"),
      paddingRight: theme("spacing.large"),
      paddingTop: theme("spacing.extrasmall"),
      paddingLeft: theme("spacing.large"),
      borderColor: theme("colors.outline"),
      borderWidth: "1px",
      "&:disabled,outlined-btn[disabled]": {
        backgroundColor: theme("colors.inverse-primary") + "!important",
        color: theme("colors.primary") + "!important",
        opacity: ".12",
        boxShadow: "none !important",
        borderRadius: "unset !important",
      },
      "&:hover": {
        backgroundColor: theme("colors.primary-light") + "32",
        color: theme("colors.primary-light"),
      },
      "&:active": {
        backgroundColor: theme("colors.primary-light") + "48",
        color: theme("colors.primary-light"),
        boxShadow: "none",
        borderRadius: theme("borderRadius.medium"),
      },
    },
    ".text-btn": {
      backgroundColor: "transparent",
      color: theme("colors.primary-light"),
      borderWidth: "0px",
      paddingBottom: theme("spacing.small"),
      paddingRight: theme("spacing.large"),
      paddingTop: theme("spacing.extrasmall"),
      paddingLeft: theme("spacing.large"),
      borderColor: theme("colors.outline"),
      borderRadius: theme("borderRadius.extralarge"),

      "&:hover": {
        backgroundColor: theme("colors.primary-light") + "24",
        color: theme("colors.primary-light"),
      },
      "&:active": {
        backgroundColor: theme("colors.primary-light") + "48",
        color: theme("colors.primary-light"),
        boxShadow: "none",
        borderRadius: theme("borderRadius.medium"),
      },
    },
    ".icon-btn": {
      backgroundColor: "transparent",
      color: theme("colors.primary-light"),
      borderWidth: "0px",
      paddingBottom: theme("spacing.small"),
      paddingRight: theme("spacing.large"),
      paddingTop: theme("spacing.extrasmall"),
      paddingLeft: theme("spacing.large"),
      borderColor: theme("colors.outline"),
      borderRadius: theme("borderRadius.extralarge"),

      "&:hover": {
        backgroundColor: theme("colors.primary-light") + "24",
        color: theme("colors.primary-light"),
      },
      "&:active": {
        backgroundColor: theme("colors.primary-light") + "48",
        color: theme("colors.primary-light"),
        boxShadow: "none",
        borderRadius: theme("borderRadius.medium"),
      },
    },
    ".fab-btn": {
      backgroundColor: theme("colors.primary-container-light"),
      color: theme("colors.on-primary-container-light"),
      borderWidth: "0px",
      paddingBottom: theme("spacing.large"),
      paddingRight: theme("spacing.large"),
      paddingTop: theme("spacing.large"),
      paddingLeft: theme("spacing.large"),
      borderColor: theme("colors.outline"),
      borderRadius: theme("borderRadius.medium"),
      boxShadow: theme("boxShadow.l3"),
      "&:hover": {
        backgroundColor: theme("colors.primary-container-light-hover"),
        color: theme("colors.primary-light"),
      },
      "&:active": {
        backgroundColor: theme("colors.primary-container-light-press"),
        color: theme("colors.primary-light"),
        borderRadius: theme("borderRadius.medium"),
        boxShadow: theme("boxShadow.l1"),
      },
    },

    ".with-icon": {
      display: "inline",
    },
    ...variants,
  };

  // console.log(buttons);
  addComponents(buttons);
});
