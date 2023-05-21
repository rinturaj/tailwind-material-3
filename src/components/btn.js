const plugin = require("tailwindcss/plugin");

module.exports = plugin(function ({ addComponents ,theme}) {
  const buttons = {
    ".raised-btn": {
        backgroundColor: theme('colors.primary.100'),
        color: theme('colors.primary.700'),
        borderRadius: theme('borderRadius.extralarge'),
        paddingBottom:  theme('spacing.small'),
        paddingRight: theme('spacing.large'),
        paddingTop: theme('spacing.extrasmall'),
        paddingLeft: theme('spacing.large'),
        boxShadow: theme('boxShadow.DEFAULT')
    },

    // ".filled-btn": {},
    // ".filled-tonal-btn": {},
    // ".outlined-btn": {},
    // ".text-btn": {},
    // ".icon-btn": {},
    // ".fab-btn": {},
    // ".extended-fab-btn": {},
  };

  addComponents(buttons);
});
