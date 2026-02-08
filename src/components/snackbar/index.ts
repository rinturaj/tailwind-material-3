/**
 * Material Design 3 Snackbar Component - Tailwind Plugin
 */

import plugin from 'tailwindcss/plugin';

export const snackbarPlugin: ReturnType<typeof plugin> = plugin(function ({ addComponents }) {
    const snackbars = {
        '.md-snackbar': {
            '@apply fixed bottom-4 left-4 right-4 md:left-1/2 md:right-auto md:-translate-x-1/2 z-50': {},
            '@apply flex items-center justify-between gap-4 py-3.5 pl-4 pr-3 min-h-[48px] min-w-[300px] max-w-[600px]': {},
            '@apply bg-md-inverse-surface text-md-inverse-on-surface rounded-md-xs shadow-md-3': {},
            '@apply transition-all duration-200 ease-md-standard': {},

            // Animation states
            '&.starting': {
                '@apply translate-y-full opacity-0': {},
            },
            '&.showing': {
                '@apply translate-y-0 opacity-100': {},
            },
            '&.closing': {
                '@apply opacity-0': {},
            },

            // Label text
            '.md-snackbar-label': {
                '@apply text-md-body-medium flex-1': {},
            },

            // Action button (usually text button)
            '.md-snackbar-action': {
                '@apply text-md-inverse-primary font-medium text-md-label-large hover:bg-md-inverse-on-surface/10 rounded-md-xs px-2 py-1 transition-colors cursor-pointer': {},
            },

            // Close icon (optional)
            '.md-snackbar-close': {
                '@apply text-md-inverse-on-surface p-2 rounded-md-full hover:bg-md-inverse-on-surface/10 transition-colors cursor-pointer ml-auto': {},
                '> svg': {
                    '@apply w-5 h-5': {},
                },
            },
        }
    };

    addComponents(snackbars);
});

export default snackbarPlugin;
