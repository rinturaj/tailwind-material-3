const plugin = require("tailwindcss/plugin");

module.exports = plugin(function ({ addComponents,theme }) {
  const card = {
    ".card": {
    
        background: '#f7f2fa',
        boxShadow:'0 0.0625rem 0.125rem 0 rgba(0,0,0,.3), 0 0.0625rem 0.1875rem 0.0625rem rgba(0,0,0,.15)',
        borderRadius:theme('borderRadius.DEFAULT')
    }

  };

  addComponents(card);
});
