/**
 * Material Design 3 Card Component - Tailwind Plugin
 * Generates utility classes for Material 3 cards
 */

import plugin from 'tailwindcss/plugin';

/**
 * Card plugin for Tailwind CSS
 * Adds Material 3 card component classes
 */
export const cardPlugin: ReturnType<typeof plugin> = plugin(function ({ addComponents }) {
  const cards = {
    '.md-card': {
      '@apply block rounded-md-md transition-all duration-md-short-2 ease-md-standard relative overflow-hidden':
        {},
    },

    // Elevated Card
    '.md-card-elevated': {
      '@apply bg-md-surface-container-low text-md-on-surface shadow-md-1 hover:shadow-md-2': {},
    },

    // Filled Card
    '.md-card-filled': {
      '@apply bg-md-surface-container-highest text-md-on-surface': {},
    },

    // Outlined Card
    '.md-card-outlined': {
      '@apply bg-md-surface text-md-on-surface border border-md-outline-variant': {},
    },

    // Padding variants
    '.md-card-padding-none': {
      '@apply p-0': {},
    },
    '.md-card-padding-sm': {
      '@apply p-4': {},
    },
    '.md-card-padding-md': {
      '@apply p-6': {},
    },
    '.md-card-padding-lg': {
      '@apply p-8': {},
    },

    // Interactive card (clickable)
    '.md-card-interactive': {
      '@apply cursor-pointer select-none': {},
      '&:before': {
        content: '""',
        '@apply absolute inset-0 bg-current opacity-0 transition-opacity': {},
      },
      '&:hover:before': {
        '@apply opacity-[0.08]': {},
      },
      '&:active:before': {
        '@apply opacity-[0.12]': {},
      },
      '&:focus-visible': {
        '@apply outline-none ring-2 ring-md-primary ring-offset-2': {},
      },
    },
  };

  addComponents(cards);
});

export default cardPlugin;
