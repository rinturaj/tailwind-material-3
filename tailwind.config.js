/** @type {import('tailwindcss').Config} */

import useMD3 from "./index.js";


export default useMD3({
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {},
  },
  plugins: [],
})

