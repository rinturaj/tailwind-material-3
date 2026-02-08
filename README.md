# Tailwind Material 3

<div align="center">
  <img src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Google_Material_Design_Logo.svg" alt="Material Design 3 Logo" width="120" height="120" />
</div>

<h1 align="center">Tailwind Material 3</h1>

<p align="center">
  <strong>Production-ready Material Design 3 components for Tailwind CSS.</strong>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/tailwind-material-3">
    <img src="https://img.shields.io/npm/v/tailwind-material-3?style=flat-square&color=0057FF" alt="NPM Version" />
  </a>
  <a href="https://github.com/rinturaj/tailwind-material-3/blob/main/LICENSE">
    <img src="https://img.shields.io/npm/l/tailwind-material-3?style=flat-square&color=0057FF" alt="License" />
  </a>
  <a href="https://github.com/rinturaj/tailwind-material-3">
    <img src="https://img.shields.io/github/stars/rinturaj/tailwind-material-3?style=flat-square&color=0057FF" alt="Stars" />
  </a>
</p>

## ✨ Features

- 🎨 **Material 3 Design System**: Complete implementation of Google's Material 3 design spec.
- 🔧 **Tailwind CSS Plugin**: Seamless integration as a standard Tailwind plugin.
- 🌙 **Dark Mode**: Built-in support for light and dark themes.
- 🎭 **Dynamic Colors**: Works with `tailwind-material-colors` for dynamic theming.
- 🧩 **15+ Components**: Buttons, Cards, Inputs, Dialogs, Navigation, and more.
- ♿ **Accessible**: Designed with ARIA attributes and keyboard navigation in mind.
- 📐 **TypeScript**: Fully typed for excellent developer experience.

## 📦 Components

| Category | Components |
|----------|------------|
| **Actions** | Button, FAB, Icon Button |
| **Communication** | Badge, Snackbar, Tooltip |
| **Containment** | Card, Dialog, Bottom Sheet |
| **Navigation** | Navigation Drawer, App Bar (Top/Bottom), Tabs |
| **Selection** | Checkbox, Radio, Switch, Chip, Menu |
| **Inputs** | Text Field |
| **Utils** | List, Progress Indicator, Divider |

## 🚀 Quick Start

### 1. Installation

Install the package and its peer dependencies:

```bash
npm install tailwind-material-3 tailwind-material-colors
```

### 2. Configuration

Add the plugin to your `tailwind.config.js` (or `tailwind.config.ts`) file:

```typescript
import { createMaterialConfig } from 'tailwind-material-3';

export default createMaterialConfig({
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'], // Adapt to your framework
  theme: {
    extend: {
      // Your custom theme extensions
    },
  },
  // You can still add other plugins here
  plugins: [],
});
```

### 3. Usage

Start using the components in your HTML/JSX:

```html
<!-- Filled Button -->
<button class="md-btn md-btn-filled">
  Click Me
</button>

<!-- Outlined Card -->
<div class="md-card md-card-outlined p-4">
  <h3 class="text-md-title-medium">Card Title</h3>
  <p class="text-md-body-medium">Card content goes here.</p>
</div>

<!-- Text Field -->
<div class="md-text-field md-text-field-outlined">
  <input type="text" class="md-text-field-input" placeholder=" " />
  <label class="md-text-field-label">Username</label>
</div>
```

## 🎨 Theming

Tailwind Material 3 is designed to work with `tailwind-material-colors` to generate your color palette. You can define your primary source color in your Tailwind config.

By default, the library provides a standard M3 purple-based theme. To customize it, simply override the colors in your Tailwind config or use the `tailwind-material-colors` plugin alongside this one.

## 📚 Examples & Frameworks

### Angular

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <button class="md-btn md-btn-filled">
      Action
    </button>
  `
})
export class AppComponent {}
```

### React

```tsx
export default function App() {
  return (
    <button className="md-btn md-btn-filled">
      Action
    </button>
  );
}
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
