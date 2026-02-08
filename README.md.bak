


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

#### Buttons

```html
<!-- Standard Buttons -->
<button class="md-btn md-btn-filled">Filled Button</button>
<button class="md-btn md-btn-outlined">Outlined Button</button>
<button class="md-btn md-btn-text">Text Button</button>
<button class="md-btn md-btn-elevated">Elevated Button</button>
<button class="md-btn md-btn-tonal">Tonal Button</button>

<!-- Icon Buttons -->
<button class="md-icon-btn md-icon-btn-filled" aria-label="Favorite">
  <svg><!-- icon --></svg>
</button>

<!-- FAB Buttons -->
<button class="md-fab md-fab-medium md-fab-primary" aria-label="Add">
  <svg><!-- icon --></svg>
</button>
```

#### Cards

```html
<!-- Elevated Card -->
<div class="md-card md-card-elevated md-card-padding-md">
  <h3>Card Title</h3>
  <p>Card content goes here</p>
</div>

<!-- Outlined Card -->
<div class="md-card md-card-outlined md-card-padding-lg">
  <h3>Outlined Card</h3>
  <p>This card has a border</p>
</div>

<!-- Interactive Card -->
<div class="md-card md-card-filled md-card-padding-md md-card-interactive" tabindex="0">
  <h3>Clickable Card</h3>
  <p>This card responds to clicks</p>
</div>
```

#### Text Fields

```html
<!-- Filled Text Field -->
<div class="md-text-field md-text-field-filled md-text-field-md">
  <input type="text" id="name" class="md-text-field-input" placeholder="Enter your name">
  <label for="name" class="md-text-field-label">Full Name</label>
</div>
<div class="md-text-field-helper">Helper text goes here</div>

<!-- Outlined Text Field -->
<div class="md-text-field md-text-field-outlined md-text-field-md">
  <input type="email" id="email" class="md-text-field-input" placeholder="you@example.com">
  <label for="email" class="md-text-field-label">Email Address</label>
</div>

<!-- Error State -->
<div class="md-text-field md-text-field-outlined md-text-field-md md-text-field-error">
  <input type="password" id="password" class="md-text-field-input" value="123">
  <label for="password" class="md-text-field-label">Password</label>
</div>
<div class="md-text-field-error-text">Password must be at least 8 characters</div>
```

## Angular Usage

The same approach works for Angular projects! After installing and configuring as shown above:

### Angular Component Example

```typescript
// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="p-4">
      <!-- Buttons -->
      <button class="md-btn md-btn-filled" (click)="handleClick()">
        Click Me
      </button>
      
      <!-- Card -->
      <div class="md-card md-card-elevated md-card-padding-md">
        <h3>{{ title }}</h3>
        <p>{{ description }}</p>
      </div>
      
      <!-- Text Field -->
      <div class="md-text-field md-text-field-outlined md-text-field-md">
        <input 
          type="text" 
          id="username" 
          class="md-text-field-input" 
          [(ngModel)]="username"
          placeholder="Enter username">
        <label for="username" class="md-text-field-label">Username</label>
      </div>
      <div class="md-text-field-helper">Choose a unique username</div>
    </div>
  `
})
export class AppComponent {
  title = 'My Angular App';
  description = 'Using Material 3 components';
  username = '';
  
  handleClick() {
    console.log('Button clicked!');
  }
}
```

### Angular Forms Integration

```typescript
// login.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  template: `
    <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
      <!-- Email Field -->
      <div class="mb-6">
        <div [class]="getTextFieldClasses('email')">
          <input 
            type="email" 
            id="email" 
            class="md-text-field-input"
            formControlName="email"
            placeholder="you@example.com">
          <label for="email" class="md-text-field-label">Email</label>
        </div>
        <div class="md-text-field-error-text" 
             *ngIf="loginForm.get('email')?.invalid && loginForm.get('email')?.touched">
          Please enter a valid email
        </div>
      </div>

      <!-- Password Field -->
      <div class="mb-6">
        <div [class]="getTextFieldClasses('password')">
          <input 
            type="password" 
            id="password" 
            class="md-text-field-input"
            formControlName="password"
            placeholder="••••••••">
          <label for="password" class="md-text-field-label">Password</label>
        </div>
        <div class="md-text-field-error-text"
             *ngIf="loginForm.get('password')?.invalid && loginForm.get('password')?.touched">
          Password is required
        </div>
      </div>

      <!-- Submit Button -->
      <button type="submit" class="md-btn md-btn-filled" [disabled]="loginForm.invalid">
        Sign In
      </button>
    </form>
  `
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  getTextFieldClasses(fieldName: string): string {
    const control = this.loginForm.get(fieldName);
    const hasError = control?.invalid && control?.touched;
    
    return `md-text-field md-text-field-outlined md-text-field-md ${
      hasError ? 'md-text-field-error' : ''
    }`;
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Form submitted:', this.loginForm.value);
    }
  }
}
```

**That's it! Now you know how to use Tailwind Material 3 in both standard HTML and Angular projects. The components work seamlessly with Angular's data binding, forms, and reactivity. Give it a try and see how it can help you save time and effort in building beautiful and functional interfaces. Happy coding!**
