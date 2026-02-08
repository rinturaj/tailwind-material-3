/**
 * Material Design 3 Text Field Component Styles
 * TypeScript implementation using Material 3 design tokens
 */

import type { TextFieldStyles } from './types';

/**
 * Text Field Styles
 * Implements all Material 3 text field variants
 */
export const textFieldStyles: TextFieldStyles = {
    // Container styles
    container: [
        'relative',
        'w-full',
        'transition-all',
        'duration-md-short-2',
        'ease-md-standard',
    ].join(' '),

    // Variant-specific container styles
    variants: {
        filled: [
            'bg-md-surface-container-highest',
            'rounded-t-md-xs',
            'border-b',
            'border-md-on-surface-variant',
            'hover:bg-md-on-surface/[0.08]',
            'focus-within:border-b-2',
            'focus-within:border-md-primary',
        ].join(' '),

        outlined: [
            'bg-transparent',
            'rounded-md-xs',
            'border',
            'border-md-outline',
            'hover:border-md-on-surface',
            'focus-within:border-2',
            'focus-within:border-md-primary',
        ].join(' '),
    },

    // Size variants
    sizes: {
        small: 'h-12 px-4',
        medium: 'h-14 px-4',
        large: 'h-16 px-4',
    },

    // State styles
    states: {
        default: '',
        focused: 'border-md-primary',
        error: 'border-md-error focus-within:border-md-error',
        disabled: 'opacity-38 cursor-not-allowed pointer-events-none',
    },

    // Input field styles
    input: [
        'w-full',
        'h-full',
        'bg-transparent',
        'outline-none',
        'border-none',
        'text-md-on-surface',
        'font-body-large',
        'pt-6',
        'pb-2',
        'placeholder:text-md-on-surface-variant',
        'placeholder:opacity-0',
        'focus:placeholder:opacity-100',
    ].join(' '),

    // Label styles (floating)
    label: [
        'absolute',
        'left-4',
        'top-4',
        'text-md-on-surface-variant',
        'font-body-large',
        'pointer-events-none',
        'transition-all',
        'duration-md-short-2',
        'ease-md-standard',
        'origin-left',
    ].join(' '),

    // Floating label state
    labelFloating: [
        'top-2',
        'text-label-small',
        'scale-75',
        'text-md-primary',
    ].join(' '),

    // Helper text styles
    helperText: [
        'mt-1',
        'px-4',
        'text-md-on-surface-variant',
        'font-body-small',
    ].join(' '),

    // Error text styles
    errorText: [
        'mt-1',
        'px-4',
        'text-md-error',
        'font-body-small',
    ].join(' '),
};

/**
 * Helper function to combine text field classes
 */
export function getTextFieldClasses(
    variant: keyof TextFieldStyles['variants'] = 'filled',
    size: keyof TextFieldStyles['sizes'] = 'medium',
    state: keyof TextFieldStyles['states'] = 'default'
): {
    container: string;
    input: string;
    label: string;
    helperText: string;
} {
    return {
        container: [
            textFieldStyles.container,
            textFieldStyles.variants[variant],
            textFieldStyles.sizes[size],
            textFieldStyles.states[state],
        ].join(' '),
        input: textFieldStyles.input,
        label: textFieldStyles.label,
        helperText: state === 'error' ? textFieldStyles.errorText : textFieldStyles.helperText,
    };
}
