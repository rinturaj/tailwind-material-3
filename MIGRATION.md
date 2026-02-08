# Migration Guide: v2 to v3

This guide helps you migrate from `tailwind-material-3` version 2.x to version 3.0.0.

## Breaking Changes

Version 3.0.0 is a complete rewrite of the library to support TypeScript, modern build tooling, and the full Material Design 3 specification.

### 1. Configuration Changes

The way you configure the plugin in `tailwind.config.js` has changed.

**v2.x:**
```javascript
const useMD3 = require('tailwind-material-3');

module.exports = useMD3({
  // config
});
```

**v3.x:**
```javascript
import { createMaterialConfig } from 'tailwind-material-3';

export default createMaterialConfig({
  // config
});
```

Or just adding the plugin manually:

```javascript
import { tailwindMaterial3 } from 'tailwind-material-3';

export default {
  plugins: [
    tailwindMaterial3
  ]
};
```

### 2. Component Class Names

Some component class names have been updated to be more consistent with Material 3 terminology.

- **Button**:
  - `.btn` -> `.md-btn`
  - `.btn-filled` -> `.md-btn-filled`
  - `.btn-outlined` -> `.md-btn-outlined`

- **Card**:
  - `.card` -> `.md-card`
  - `.card-elevated` -> `.md-card-elevated`

- **Text Field**:
  - `.text-field` -> `.md-text-field`

### 3. Imports

If you were importing specific files, the internal structure has changed. Use the main entry point for all imports.

**v2.x:**
```javascript
import Button from 'tailwind-material-3/components/button';
```

**v3.x:**
```javascript
import { buttonPlugin } from 'tailwind-material-3';
```

## New Features

- **TypeScript Support**: Full type definitions are now included.
- **New Components**: Checkbox, Radio, Switch, Tabs, Navigation Drawer, App Bar, List, Chip, Badge, Progress, Tooltip, Bottom Sheet, Menu.
- **Design Tokens**: Comprehensive access to M3 design tokens via CSS variables.
