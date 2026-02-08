/**
 * Material Design 3 Navigation Drawer Component - Tailwind Plugin
 */

import plugin from 'tailwindcss/plugin';

export const navigationDrawerPlugin: ReturnType<typeof plugin> = plugin(function ({ addComponents }) {
    const drawers = {
        // Drawer Container (Standard/Modal)
        '.md-drawer': {
            '@apply fixed top-0 bottom-0 left-0 w-[360px] bg-md-surface-container-low rounded-r-md-lg overflow-y-auto transition-transform duration-300 z-50': {},

            '&:not(.open)': {
                '@apply -translate-x-full': {},
            },
            '&.open': {
                '@apply translate-x-0 shadow-md-3': {}, // Standard drawer might not have shadow if persistent
            },

            // Standard Drawer (persistent on large screens)
            '&.md-drawer-standard': {
                '@apply relative translate-x-0 rounded-none border-r border-md-surface-container-highest w-[300px]': {},
            },

            // Modal Drawer Scrim
            '+ .md-drawer-scrim': {
                '@apply fixed inset-0 z-40 bg-black/32 transition-opacity duration-300': {},
                '&.hidden': {
                    '@apply opacity-0 pointer-events-none': {},
                }
            },

            // Drawer Items Container
            '.md-drawer-content': {
                '@apply p-3 flex flex-col gap-1': {},
            },

            // Section Header
            '.md-drawer-headline': {
                '@apply px-4 py-4 text-md-title-small text-md-on-surface-variant': {},
            },

            // Nav Item (List Item)
            '.md-drawer-item': {
                '@apply flex items-center gap-3 px-4 py-3 min-h-[56px] rounded-md-full cursor-pointer text-md-label-large text-md-on-surface-variant hover:bg-md-on-surface/10 transition-colors': {},

                '&.active': {
                    '@apply bg-md-secondary-container text-md-on-secondary-container': {},
                },

                // Icon
                '> svg': {
                    '@apply w-6 h-6': {},
                },

                // Badge
                '.md-badge': {
                    '@apply ml-auto text-md-label-large': {},
                }
            },

            // Divider
            'hr': {
                '@apply my-2 border-md-outline-variant': {},
            }
        }
    };

    addComponents(drawers);
});

export default navigationDrawerPlugin;
