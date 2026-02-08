/**
 * Material Design 3 Dialog Component - Tailwind Plugin
 */

import plugin from 'tailwindcss/plugin';

export const dialogPlugin: ReturnType<typeof plugin> = plugin(function ({ addComponents }) {
    const dialogs = {
        // Dialog Backdrop (Scrim)
        '.md-dialog-backdrop': {
            '@apply fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/32 transition-opacity duration-200': {},
            '&.hidden': {
                '@apply opacity-0 pointer-events-none': {},
            },
            '&:not(.hidden)': {
                '@apply opacity-100': {},
            },
        },

        // Dialog Container
        '.md-dialog': {
            '@apply relative bg-md-surface-container-high text-md-on-surface rounded-md-xl shadow-md-3 max-w-[560px] min-w-[280px] w-full overflow-hidden flex flex-col transition-all duration-200 scale-100 opacity-100': {},

            // Animation states
            '&.starting': {
                '@apply scale-95 opacity-0': {},
            },

            // Header/Icon area
            '.md-dialog-icon': {
                '@apply pt-6 px-6 flex justify-center text-md-secondary': {},
                '> svg': {
                    '@apply w-6 h-6': {},
                },
            },

            // Headline
            '.md-dialog-headline': {
                '@apply px-6 pt-6 pb-4 text-md-headline-small text-md-on-surface': {},
                '&:first-child': {
                    '@apply pt-6': {},
                },
            },
            '.md-dialog-icon + .md-dialog-headline': {
                '@apply pt-4 text-center': {},
            },

            // Content/Body
            '.md-dialog-content': {
                '@apply px-6 pb-6 text-md-body-medium text-md-on-surface-variant overflow-y-auto': {},
                // Remove top padding if headline exists
                '.md-dialog-headline + &': {
                    '@apply pt-0': {},
                },
            },

            // Actions
            '.md-dialog-actions': {
                '@apply p-6 pt-2 flex items-center justify-end gap-2': {},
            },
        }
    };

    addComponents(dialogs);
});

export default dialogPlugin;
