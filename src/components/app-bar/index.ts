/**
 * Material Design 3 App Bar Component - Tailwind Plugin
 */

import plugin from 'tailwindcss/plugin';

export const appBarPlugin: ReturnType<typeof plugin> = plugin(function ({ addComponents }) {
    const appBars = {
        // Top App Bar Container
        '.md-top-app-bar': {
            '@apply sticky top-0 left-0 right-0 z-40 flex items-center gap-4 px-4 h-16 bg-md-surface': {},
            '@apply transition-all duration-200': {},

            // Scrolled state (optional, adds elevation/color change)
            '&.scrolled': {
                '@apply bg-md-surface-container shadow-md-2': {},
            },

            // Small App Bar
            '&.md-top-app-bar-small': {
                '@apply h-16': {},
            },
            // Medium App Bar (expands)
            '&.md-top-app-bar-medium': {
                '@apply h-[112px] flex-col items-start justify-end pb-6': {},
                '.md-top-app-bar-title': {
                    '@apply text-md-headline-small': {},
                }
            },
            // Large App Bar
            '&.md-top-app-bar-large': {
                '@apply h-[152px] flex-col items-start justify-end pb-7': {},
                '.md-top-app-bar-title': {
                    '@apply text-md-headline-medium': {},
                }
            },

            // Leading Icon (Menu/Back)
            '.md-top-app-bar-leading': {
                '@apply p-3 -ml-3 rounded-md-full text-md-on-surface hover:bg-md-on-surface/10 cursor-pointer': {},
            },

            // Title
            '.md-top-app-bar-title': {
                '@apply flex-1 text-md-title-large text-md-on-surface truncate': {},
            },

            // Trailing Actions Container
            '.md-top-app-bar-actions': {
                '@apply flex items-center gap-2 -mr-2': {},
            },

            // Action Icon
            '.md-top-app-bar-action': {
                '@apply p-3 rounded-md-full text-md-on-surface-variant hover:bg-md-on-surface/10 cursor-pointer': {},
            }
        },

        // Bottom App Bar
        '.md-bottom-app-bar': {
            '@apply fixed bottom-0 left-0 right-0 z-40 flex items-center justify-between gap-4 px-4 h-20 bg-md-surface-container': {},
            // FAB usually lives here or floats above
            '.md-fab': {
                '@apply absolute right-4 bottom-4 shadow-md-3': {}, // Or inline if wanted
            }
        }
    };

    addComponents(appBars);
});

export default appBarPlugin;
