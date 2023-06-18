const plugin = require("tailwindcss/plugin");

module.exports = plugin(function ({ addComponents, theme }) {
  const card = {
    ".card-outlined": {
      background: theme("colors.surface-light"),
      boxShadow: 'none',
      borderRadius: theme("borderRadius.DEFAULT"),
      padding: theme("spacing.medium"),
    },
    ".card-elevated": {
      background: theme("colors.surface-light"),
      boxShadow: theme("boxShadow.DEFAULT"),
      borderRadius: theme("borderRadius.DEFAULT"),
      padding: theme("spacing.medium"),
    },
    ".card-filled": {

      background: theme("colors.surface-light"),
      boxShadow:'none',
      padding: theme("spacing.medium"),
      borderWidth:'1px',
      borderColor: theme("colors.outline"),
      borderRadius: theme("borderRadius.DEFAULT"),
    },
  };

  addComponents(card);
});
