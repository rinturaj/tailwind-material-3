/**
 * Material Design 3 Checkbox Component - Tailwind Plugin
 */

import plugin from 'tailwindcss/plugin';

export const checkboxPlugin: ReturnType<typeof plugin> = plugin(function ({ addComponents }) {
    const checkboxes = {
        '.md-checkbox': {
            '@apply relative inline-flex items-center justify-center w-10 h-10 cursor-pointer rounded-md-full hover:bg-md-on-surface/10 transition-colors': {},

            'input[type="checkbox"]': {
                '@apply appearance-none w-4.5 h-4.5 border-2 border-md-on-surface-variant rounded-md-xs bg-transparent outline-none transition-all duration-200': {},

                '&:checked': {
                    '@apply bg-md-primary border-md-primary': {},
                    // Checkmark icon styling could be done with a background image or SVG, 
                    // but for a pure CSS/Tailwind solution, we can use a pseudo-element or expect an SVG sibling.
                    // Here we'll use a mask or background-image approach if we want pure CSS, 
                    // or rely on the HTML structure having an SVG. 
                    // For simplicity in this plugin, we'll style the input itself.

                    '&:before': {
                        content: '""',
                        '@apply absolute inset-0 flex items-center justify-center text-md-on-primary': {},
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23ffffff'%3E%3Cpath d='M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z'/%3E%3C/svg%3E")`,
                        backgroundSize: '100%',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }
                },

                '&:disabled': {
                    '@apply border-md-on-surface/38 cursor-not-allowed': {},
                    '&:checked': {
                        '@apply bg-md-on-surface/38 border-transparent': {},
                    }
                },

                '&:focus-visible': {
                    '@apply ring-2 ring-md-primary ring-offset-2': {},
                },

                // Error state
                '&.error': {
                    '@apply border-md-error': {},
                    '&:checked': {
                        '@apply bg-md-error border-md-error': {},
                    },
                    '&:focus-visible': {
                        '@apply ring-md-error': {},
                    }
                }
            }
        }
    };

    addComponents(checkboxes);
});

export default checkboxPlugin;
