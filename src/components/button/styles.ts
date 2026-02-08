/**
 * Material Design 3 Button Component Styles
 * TypeScript implementation using Material 3 design tokens
 */

import type { ButtonStyles, FABStyles, IconButtonStyles } from './types';

/**
 * Standard Button Styles
 * Implements all Material 3 button variants
 */
export const buttonStyles: ButtonStyles = {
  // Base button styles
  base: [
    'inline-flex',
    'items-center',
    'justify-center',
    'gap-2',
    'font-label-large',
    'font-medium',
    'transition-all',
    'duration-md-short-2',
    'ease-md-standard',
    'cursor-pointer',
    'select-none',
    'outline-none',
    'relative',
    'overflow-hidden',
  ].join(' '),

  // Variant-specific styles
  variants: {
    filled: [
      'bg-md-primary',
      'text-md-on-primary',
      'rounded-md-full',
      'px-6',
      'py-2.5',
      'shadow-md-0',
      'hover:shadow-md-1',
      'active:shadow-md-0',
    ].join(' '),

    outlined: [
      'bg-transparent',
      'text-md-primary',
      'border',
      'border-md-outline',
      'rounded-md-full',
      'px-6',
      'py-2.5',
    ].join(' '),

    text: ['bg-transparent', 'text-md-primary', 'rounded-md-full', 'px-6', 'py-2.5'].join(' '),

    elevated: [
      'bg-md-surface-container-low',
      'text-md-primary',
      'rounded-md-full',
      'px-6',
      'py-2.5',
      'shadow-md-1',
      'hover:shadow-md-2',
      'active:shadow-md-1',
    ].join(' '),

    tonal: [
      'bg-md-secondary-container',
      'text-md-on-secondary-container',
      'rounded-md-full',
      'px-6',
      'py-2.5',
    ].join(' '),
  },

  // Color variants for each button type
  colors: {
    primary: {
      filled: 'bg-md-primary text-md-on-primary',
      outlined: 'text-md-primary border-md-outline',
      text: 'text-md-primary',
      elevated: 'text-md-primary',
      tonal: 'bg-md-primary-container text-md-on-primary-container',
    },
    secondary: {
      filled: 'bg-md-secondary text-md-on-secondary',
      outlined: 'text-md-secondary border-md-outline',
      text: 'text-md-secondary',
      elevated: 'text-md-secondary',
      tonal: 'bg-md-secondary-container text-md-on-secondary-container',
    },
    tertiary: {
      filled: 'bg-md-tertiary text-md-on-tertiary',
      outlined: 'text-md-tertiary border-md-outline',
      text: 'text-md-tertiary',
      elevated: 'text-md-tertiary',
      tonal: 'bg-md-tertiary-container text-md-on-tertiary-container',
    },
    error: {
      filled: 'bg-md-error text-md-on-error',
      outlined: 'text-md-error border-md-error',
      text: 'text-md-error',
      elevated: 'text-md-error',
      tonal: 'bg-md-error-container text-md-on-error-container',
    },
  },

  // Size variants
  sizes: {
    small: 'h-8 px-4 text-label-small',
    medium: 'h-10 px-6 text-label-large',
    large: 'h-12 px-8 text-label-large',
  },

  // Interactive states
  states: {
    hover:
      'hover:before:opacity-[0.08] hover:before:bg-current hover:before:absolute hover:before:inset-0',
    focus:
      'focus-visible:before:opacity-[0.12] focus-visible:before:bg-current focus-visible:before:absolute focus-visible:before:inset-0 focus-visible:ring-2 focus-visible:ring-md-primary focus-visible:ring-offset-2',
    active:
      'active:before:opacity-[0.12] active:before:bg-current active:before:absolute active:before:inset-0',
    disabled: 'disabled:opacity-38 disabled:cursor-not-allowed disabled:shadow-none',
  },
};

/**
 * Floating Action Button (FAB) Styles
 */
export const fabStyles: FABStyles = {
  base: [
    'inline-flex',
    'items-center',
    'justify-center',
    'font-label-large',
    'font-medium',
    'transition-all',
    'duration-md-short-2',
    'ease-md-standard',
    'cursor-pointer',
    'select-none',
    'outline-none',
    'relative',
    'overflow-hidden',
  ].join(' '),

  sizes: {
    small: 'w-10 h-10 rounded-md-md',
    medium: 'w-14 h-14 rounded-md-lg',
    large: 'w-24 h-24 rounded-md-xl gap-3 px-8',
  },

  variants: {
    surface: 'bg-md-surface-container-high text-md-primary shadow-md-3 hover:shadow-md-4',
    primary: 'bg-md-primary-container text-md-on-primary-container shadow-md-3 hover:shadow-md-4',
    secondary:
      'bg-md-secondary-container text-md-on-secondary-container shadow-md-3 hover:shadow-md-4',
    tertiary:
      'bg-md-tertiary-container text-md-on-tertiary-container shadow-md-3 hover:shadow-md-4',
  },
};

/**
 * Icon Button Styles
 */
export const iconButtonStyles: IconButtonStyles = {
  base: [
    'inline-flex',
    'items-center',
    'justify-center',
    'w-10',
    'h-10',
    'rounded-md-full',
    'transition-all',
    'duration-md-short-2',
    'ease-md-standard',
    'cursor-pointer',
    'select-none',
    'outline-none',
    'relative',
    'overflow-hidden',
  ].join(' '),

  variants: {
    standard: 'bg-transparent text-md-on-surface-variant',
    filled: 'bg-md-primary text-md-on-primary',
    tonal: 'bg-md-secondary-container text-md-on-secondary-container',
    outlined: 'bg-transparent text-md-on-surface-variant border border-md-outline',
  },
};

/**
 * Helper function to combine button classes
 */
export function getButtonClasses(
  variant: keyof ButtonStyles['variants'] = 'filled',
  color: keyof ButtonStyles['colors'] = 'primary',
  size: keyof ButtonStyles['sizes'] = 'medium',
  disabled = false
): string {
  const classes = [
    buttonStyles.base,
    buttonStyles.variants[variant],
    buttonStyles.colors[color][variant],
    buttonStyles.sizes[size],
    buttonStyles.states.hover,
    buttonStyles.states.focus,
    buttonStyles.states.active,
  ];

  if (disabled) {
    classes.push(buttonStyles.states.disabled);
  }

  return classes.join(' ');
}

/**
 * Helper function to combine FAB classes
 */
export function getFABClasses(
  size: keyof FABStyles['sizes'] = 'medium',
  variant: keyof FABStyles['variants'] = 'primary'
): string {
  return [
    fabStyles.base,
    fabStyles.sizes[size],
    fabStyles.variants[variant],
    buttonStyles.states.hover,
    buttonStyles.states.focus,
    buttonStyles.states.active,
  ].join(' ');
}

/**
 * Helper function to combine icon button classes
 */
export function getIconButtonClasses(
  variant: keyof IconButtonStyles['variants'] = 'standard'
): string {
  return [
    iconButtonStyles.base,
    iconButtonStyles.variants[variant],
    buttonStyles.states.hover,
    buttonStyles.states.focus,
    buttonStyles.states.active,
  ].join(' ');
}
