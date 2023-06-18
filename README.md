


# Tailwind material 3

Tailwind Material 3 is a library that provides ready-to-use UI components for Tailwind CSS users. It includes a range of customizable components such as buttons, cards, and forms, as well as useful utilities and helpers. Installing Tailwind Material 3 is as easy as running the following 

command in your terminal:

```
npm i tailwind-materilal-3
```

The library is actively maintained and updated, ensuring that you always have access to the latest and greatest UI components. Give it a try and see how it can help streamline your UI development process!

# How to use

To use Tailwind Material 3, first make sure that you have Tailwind CSS installed in your project. Then, simply import the desired components from the library and use them in your HTML code. 

Please follow the instructions 

### Step 1

Install **`tailwindcss`** via npm, and create your **`tailwind.config.js`** file.

```bash
npm install -D tailwindcss
npx tailwindcss init
```

### Step 2

Install **`tailwind-material-3`** via npm.

```bash
npm i tailwind-material-3 tailwind-material-colors
```

### Step 3

Add the paths to all of your template files , colors and other config in your **`tailwind.config.js`** file. 

```jsx
const { default: useMD3 } = require('tailwind-material-3');

module.exports = useMD3({
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
         primary: "#9cd67d",
         blue: "#8116f3",
      },
    extend: {},
  },
  plugins: [],
})
```

### Step 4

Add the **`@tailwind`** directives for each of Tailwind’s layers to your main CSS file.

```sass
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Step 5

Start using the components in your HTML code! 

```html

<body>
  <div class="p-4">
        <button class="filled-btn">filled-btn</button>      
        <button class="filled-btn" disabled>disabled filled-btn</button>
        <button class="filled-tonal-btn">filled-tonal-btn</button>
        <button class="outlined-btn">outlined-btn</button>
  </div>
</body>

```

**That's it! Now you know how to use Tailwind Material 3 to streamline your UI development process. Give it a try and see how it can help you save time and effort in building beautiful and functional interfaces. If you have any questions or feedback, feel free to reach out to us. Happy coding!**