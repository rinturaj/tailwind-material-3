/**
 * Material Design 3 Tabs Component - Tailwind Plugin
 */

import plugin from 'tailwindcss/plugin';

export const tabsPlugin: ReturnType<typeof plugin> = plugin(function ({ addComponents }) {
    const tabs = {
        // Tab Group / Container
        '.md-tabs': {
            '@apply flex items-center w-full border-b border-md-surface-container-highest bg-md-surface': {},

            '&.md-tabs-primary': {
                '@apply bg-md-surface': {},
            },
            '&.md-tabs-secondary': {
                '@apply bg-md-surface-container': {},
            }
        },

        // Individual Tab
        '.md-tab': {
            '@apply relative flex-1 flex flex-col items-center justify-center min-h-[48px] px-4 cursor-pointer overflow-hidden transition-colors': {},
            '@apply text-md-title-small text-md-on-surface-variant hover:bg-md-on-surface/10': {}, // State layer (hover)

            // Active state
            '&.active': {
                '@apply text-md-primary': {},

                // Active indicator (underline)
                '&:after': {
                    content: '""',
                    '@apply absolute bottom-0 w-full h-[3px] bg-md-primary rounded-t-md-xs': {},
                    // For rounded pill indicator style (optional variant)
                    // '@apply absolute bottom-0 w-[calc(100%-32px)] h-[3px] bg-md-primary rounded-t-md-xs mx-4': {}, 
                }
            },

            // Focus state
            '&:focus-visible': {
                '@apply outline-none bg-md-on-surface/12': {},
            },

            // Badges inside tabs
            '.md-badge': {
                '@apply ml-1': {},
            },

            // Icons inside tabs
            '> svg': {
                '@apply mb-1 w-6 h-6': {}, // For icon+text tabs
            },
            '&.md-tab-icon-only': {
                '> svg': {
                    '@apply mb-0': {},
                }
            }
        },

        // Scrollable tabs container (optional utility)
        '.md-tabs-scrollable': {
            '@apply overflow-x-auto overflow-y-hidden no-scrollbar': {}, // Requires no-scrollbar utility or custom CSS
            '.md-tab': {
                '@apply flex-none min-w-[90px]': {},
            }
        }
    };

    addComponents(tabs);
});

export default tabsPlugin;
