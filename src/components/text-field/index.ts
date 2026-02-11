/**
 * Material Design 3 Text Field Component - Tailwind Plugin
 * Generates utility classes for Material 3 text fields
 */

import plugin from 'tailwindcss/plugin';

/**
 * Text Field plugin for Tailwind CSS
 * Adds Material 3 text field component classes
 */
export const textFieldPlugin: ReturnType<typeof plugin> = plugin(function ({ addComponents }) {
  const textFields = {
    // Container base
    '.md-text-field': {
      '@apply relative w-full transition-all duration-md-short-2 ease-md-standard': {},
    },

    // Filled variant
    '.md-text-field-filled': {
      '@apply bg-md-surface-container-highest rounded-t-md-xs border-b border-md-on-surface-variant':
        {},
      '@apply hover:bg-md-on-surface/[0.08]': {},
      '@apply focus-within:border-b-2 focus-within:border-md-primary': {},
    },

    // Outlined variant
    '.md-text-field-outlined': {
      '@apply bg-transparent rounded-md-xs border border-md-outline': {},
      '@apply hover:border-md-on-surface': {},
      '@apply focus-within:border-2 focus-within:border-md-primary': {},
    },

    // Input element
    '.md-text-field-input': {
      '@apply w-full h-full bg-transparent outline-none border-none': {},
      '@apply text-md-on-surface text-md-body-large pt-6 pb-2 px-4': {},
      '@apply placeholder:text-md-on-surface-variant placeholder:opacity-0': {},
      '@apply focus:placeholder:opacity-100': {},
    },

    // Label
    '.md-text-field-label': {
      '@apply absolute left-4 top-4 text-md-on-surface-variant text-md-body-large': {},
      '@apply pointer-events-none transition-all duration-md-short-2 ease-md-standard origin-left':
        {},
    },

    // Floating label state
    '.md-text-field-label-floating': {
      '@apply top-2 text-md-label-small scale-75 text-md-primary': {},
    },

    // Helper text
    '.md-text-field-helper': {
      '@apply mt-1 px-4 text-md-on-surface-variant text-md-body-small': {},
    },

    // Error state
    '.md-text-field-error': {
      '@apply border-md-error focus-within:border-md-error': {},
    },

    '.md-text-field-error-text': {
      '@apply mt-1 px-4 text-md-error text-md-body-small': {},
    },

    // Disabled state
    '.md-text-field-disabled': {
      '@apply opacity-38 cursor-not-allowed pointer-events-none': {},
    },

    // Size variants
    '.md-text-field-sm': {
      '@apply h-12': {},
    },
    '.md-text-field-md': {
      '@apply h-14': {},
    },
    '.md-text-field-lg': {
      '@apply h-16': {},
    },
  };

  addComponents(textFields);
});

export default textFieldPlugin;
