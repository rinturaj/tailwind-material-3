/**
 * Material Design 3 Menu Component - Tailwind Plugin
 */

import plugin from 'tailwindcss/plugin';

export const menuPlugin: ReturnType<typeof plugin> = plugin(function ({ addComponents }) {
    const menus = {
        // Menu Container
        '.md-menu': {
            '@apply absolute flex flex-col min-w-[112px] max-w-[280px] py-2 bg-md-surface-container rounded-md-xs shadow-md-2 overflow-y-auto opacity-0 scale-95 pointer-events-none transition-all duration-200 origin-top-left z-50': {},

            // Open state
            '&.open': {
                '@apply opacity-100 scale-100 pointer-events-auto': {},
            },

            // Menu Item
            '.md-menu-item': {
                '@apply flex items-center gap-3 px-3 py-2 min-h-[48px] cursor-pointer text-md-label-large text-md-on-surface hover:bg-md-on-surface/10 transition-colors': {},

                // Disabled
                '&:disabled, &.disabled': {
                    '@apply opacity-38 cursor-not-allowed pointer-events-none': {},
                },

                // Icons
                '> svg': {
                    '@apply w-5 h-5 text-md-on-surface-variant': {},
                    '&:first-child': {
                        '@apply text-md-on-surface-variant': {}, // Leading icon
                    },
                    '&:last-child:not(:first-child)': {
                        '@apply ml-auto': {}, // Trailing icon
                    }
                },

                // Trailing text (shortcut)
                '.md-menu-item-trailing-text': {
                    '@apply ml-auto text-md-label-small text-md-on-surface-variant': {},
                }
            },

            // Divider
            'hr': {
                '@apply my-1 border-md-outline-variant': {},
            }
        }
    };

    addComponents(menus);
});

export default menuPlugin;
