/**
 * Material Design 3 Card Component Styles
 * TypeScript implementation using Material 3 design tokens
 */

import type { CardStyles } from './types';

/**
 * Card Styles
 * Implements all Material 3 card variants
 */
export const cardStyles: CardStyles = {
  // Base card styles
  base: [
    'block',
    'rounded-md-md',
    'transition-all',
    'duration-md-short-2',
    'ease-md-standard',
    'relative',
    'overflow-hidden',
  ].join(' '),

  // Variant-specific styles
  variants: {
    elevated: [
      'bg-md-surface-container-low',
      'text-md-on-surface',
      'shadow-md-1',
      'hover:shadow-md-2',
    ].join(' '),

    filled: ['bg-md-surface-container-highest', 'text-md-on-surface'].join(' '),

    outlined: ['bg-md-surface', 'text-md-on-surface', 'border', 'border-md-outline-variant'].join(
      ' '
    ),
  },

  // Padding options
  padding: {
    none: 'p-0',
    small: 'p-4',
    medium: 'p-6',
    large: 'p-8',
  },

  // Interactive state (for clickable cards)
  interactive: [
    'cursor-pointer',
    'select-none',
    'before:absolute',
    'before:inset-0',
    'before:bg-current',
    'before:opacity-0',
    'before:transition-opacity',
    'hover:before:opacity-[0.08]',
    'active:before:opacity-[0.12]',
    'focus-visible:outline-none',
    'focus-visible:ring-2',
    'focus-visible:ring-md-primary',
    'focus-visible:ring-offset-2',
  ].join(' '),
};

/**
 * Helper function to combine card classes
 */
export function getCardClasses(
  variant: keyof CardStyles['variants'] = 'elevated',
  padding: keyof CardStyles['padding'] = 'medium',
  interactive = false
): string {
  const classes = [cardStyles.base, cardStyles.variants[variant], cardStyles.padding[padding]];

  if (interactive) {
    classes.push(cardStyles.interactive);
  }

  return classes.join(' ');
}
