/**
 * Material Design 3 Button Component - Tailwind Plugin
 * Generates utility classes for Material 3 buttons
 */

import plugin from 'tailwindcss/plugin';

/**
 * Button plugin for Tailwind CSS
 * Adds Material 3 button component classes
 */
export const buttonPlugin = plugin(function ({ addComponents }) {
  // Standard Buttons
  const buttons = {
    '.md-btn': {
      '@apply inline-flex items-center justify-center gap-2 font-medium': {},
      '@apply transition-all duration-md-short-2 ease-md-standard': {},
      '@apply cursor-pointer select-none outline-none relative overflow-hidden': {},
      '&:before': {
        content: '""',
        '@apply absolute inset-0 opacity-0 bg-current transition-opacity': {},
      },
      '&:hover:not(:disabled):before': {
        '@apply opacity-[0.08]': {},
      },
      '&:focus-visible:not(:disabled)': {
        '@apply ring-2 ring-md-primary ring-offset-2': {},
        '&:before': {
          '@apply opacity-[0.12]': {},
        },
      },
      '&:active:not(:disabled):before': {
        '@ apply opacity-[0.12]': {},
      },
      '&:disabled': {
        '@apply opacity-38 cursor-not-allowed shadow-none': {},
      },
    },

    // Filled Button
    '.md-btn-filled': {
      '@apply bg-md-primary text-md-on-primary rounded-md-full px-6 py-2.5': {},
      '@apply shadow-md-0 hover:shadow-md-1 active:shadow-md-0': {},
    },

    // Outlined Button
    '.md-btn-outlined': {
      '@apply bg-transparent text-md-primary border border-md-outline rounded-md-full px-6 py-2.5':
        {},
    },

    // Text Button
    '.md-btn-text': {
      '@apply bg-transparent text-md-primary rounded-md-full px-6 py-2.5': {},
    },

    // Elevated Button
    '.md-btn-elevated': {
      '@apply bg-md-surface-container-low text-md-primary rounded-md-full px-6 py-2.5': {},
      '@apply shadow-md-1 hover:shadow-md-2 active:shadow-md-1': {},
    },

    // Tonal Button
    '.md-btn-tonal': {
      '@apply bg-md-secondary-container text-md-on-secondary-container rounded-md-full px-6 py-2.5':
        {},
    },

    // Color variants
    '.md-btn-primary.md-btn-filled': {
      '@apply bg-md-primary text-md-on-primary': {},
    },
    '.md-btn-primary.md-btn-tonal': {
      '@apply bg-md-primary-container text-md-on-primary-container': {},
    },
    '.md-btn-secondary.md-btn-filled': {
      '@apply bg-md-secondary text-md-on-secondary': {},
    },
    '.md-btn-secondary.md-btn-tonal': {
      '@apply bg-md-secondary-container text-md-on-secondary-container': {},
    },
    '.md-btn-tertiary.md-btn-filled': {
      '@apply bg-md-tertiary text-md-on-tertiary': {},
    },
    '.md-btn-tertiary.md-btn-tonal': {
      '@apply bg-md-tertiary-container text-md-on-tertiary-container': {},
    },
    '.md-btn-error.md-btn-filled': {
      '@apply bg-md-error text-md-on-error': {},
    },
    '.md-btn-error.md-btn-tonal': {
      '@apply bg-md-error-container text-md-on-error-container': {},
    },

    // FAB (Floating Action Button)
    '.md-fab': {
      '@apply inline-flex items-center justify-center font-medium': {},
      '@apply transition-all duration-md-short-2 ease-md-standard': {},
      '@apply cursor-pointer select-none outline-none relative overflow-hidden': {},
      '@apply shadow-md-3 hover:shadow-md-4 active:shadow-md-3': {},
      '&:before': {
        content: '""',
        '@apply absolute inset-0 opacity-0 bg-current transition-opacity': {},
      },
      '&:hover:before': {
        '@apply opacity-[0.08]': {},
      },
    },

    '.md-fab-small': {
      '@apply w-10 h-10 rounded-md-md': {},
    },
    '.md-fab-medium': {
      '@apply w-14 h-14 rounded-md-lg': {},
    },
    '.md-fab-large': {
      '@apply w-24 h-24 rounded-md-xl gap-3 px-8': {},
    },

    '.md-fab-surface': {
      '@apply bg-md-surface-container-high text-md-primary': {},
    },
    '.md-fab-primary': {
      '@apply bg-md-primary-container text-md-on-primary-container': {},
    },
    '.md-fab-secondary': {
      '@apply bg-md-secondary-container text-md-on-secondary-container': {},
    },
    '.md-fab-tertiary': {
      '@apply bg-md-tertiary-container text-md-on-tertiary-container': {},
    },

    // Icon Button
    '.md-icon-btn': {
      '@apply inline-flex items-center justify-center w-10 h-10 rounded-md-full': {},
      '@apply transition-all duration-md-short-2 ease-md-standard': {},
      '@apply cursor-pointer select-none outline-none relative overflow-hidden': {},
      '&:before': {
        content: '""',
        '@apply absolute inset-0 opacity-0 bg-current transition-opacity': {},
      },
      '&:hover:before': {
        '@apply opacity-[0.08]': {},
      },
    },

    '.md-icon-btn-standard': {
      '@apply bg-transparent text-md-on-surface-variant': {},
    },
    '.md-icon-btn-filled': {
      '@apply bg-md-primary text-md-on-primary': {},
    },
    '.md-icon-btn-tonal': {
      '@apply bg-md-secondary-container text-md-on-secondary-container': {},
    },
    '.md-icon-btn-outlined': {
      '@apply bg-transparent text-md-on-surface-variant border border-md-outline': {},
    },
  };

  addComponents(buttons);
});

export default buttonPlugin;
