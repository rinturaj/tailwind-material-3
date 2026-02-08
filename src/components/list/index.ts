/**
 * Material Design 3 List Component - Tailwind Plugin
 */

import plugin from 'tailwindcss/plugin';

export const listPlugin: ReturnType<typeof plugin> = plugin(function ({ addComponents }) {
    const lists = {
        // List Container
        '.md-list': {
            '@apply py-2 bg-md-surface text-md-on-surface rounded-md-xs overflow-hidden': {},
        },

        // List Item
        '.md-list-item': {
            '@apply relative flex items-center gap-4 px-4 min-h-[56px] cursor-pointer transition-colors': {},
            '@apply text-md-body-large text-md-on-surface': {},
            '@apply hover:bg-md-on-surface/10': {}, // State layer

            // Active state
            '&.active': {
                '@apply bg-md-secondary-container text-md-on-secondary-container': {},
            },

            // Disabled state
            '&:disabled, &.disabled': {
                '@apply opacity-38 cursor-not-allowed pointer-events-none': {},
            },

            // Leading content (Icon/Avatar)
            '.md-list-item-leading': {
                '@apply flex items-center justify-center text-md-on-surface-variant': {},
                '> svg': {
                    '@apply w-6 h-6': {},
                },
                // Avatar support
                '.md-avatar': {
                    '@apply w-10 h-10 rounded-md-full bg-md-primary-container text-md-on-primary-container flex items-center justify-center text-md-title-medium font-medium': {},
                    '> img': {
                        '@apply w-full h-full object-cover rounded-md-full': {},
                    }
                }
            },

            // Headline/Scanning text content
            '.md-list-item-content': {
                '@apply flex-1 flex flex-col justify-center': {},
            },
            '.md-list-item-headline': {
                '@apply text-md-body-large text-md-on-surface': {},
            },
            '.md-list-item-supporting-text': {
                '@apply text-md-body-medium text-md-on-surface-variant': {},
            },
            '.md-list-item-trailing-supporting-text': {
                '@apply text-md-label-small text-md-on-surface-variant': {},
            },

            // Trailing content (Icon/Checkbox/Switch)
            '.md-list-item-trailing': {
                '@apply flex items-center justify-center text-md-on-surface-variant': {},
                '> svg': {
                    '@apply w-6 h-6': {},
                }
            }
        }
    };

    addComponents(lists);
});

export default listPlugin;
