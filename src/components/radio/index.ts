/**
 * Material Design 3 Radio Component - Tailwind Plugin
 */

import plugin from 'tailwindcss/plugin';

export const radioPlugin: ReturnType<typeof plugin> = plugin(function ({ addComponents }) {
    const radios = {
        '.md-radio': {
            '@apply relative inline-flex items-center justify-center w-10 h-10 cursor-pointer rounded-md-full hover:bg-md-on-surface/10 transition-colors': {},

            'input[type="radio"]': {
                '@apply appearance-none w-5 h-5 border-2 border-md-on-surface-variant rounded-md-full bg-transparent outline-none transition-all duration-200': {},

                '&:checked': {
                    '@apply border-md-primary border-[6px]': {},
                },

                '&:disabled': {
                    '@apply border-md-on-surface/38 cursor-not-allowed': {},
                    '&:checked': {
                        '@apply border-md-on-surface/38': {},
                    }
                },

                '&:focus-visible': {
                    '@apply ring-2 ring-md-primary ring-offset-2': {},
                },

                // Error state
                '&.error': {
                    '@apply border-md-error': {},
                    '&:checked': {
                        '@apply border-md-error': {},
                    },
                    '&:focus-visible': {
                        '@apply ring-md-error': {},
                    }
                }
            }
        }
    };

    addComponents(radios);
});

export default radioPlugin;
