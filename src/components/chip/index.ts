/**
 * Material Design 3 Chip Component - Tailwind Plugin
 */

import plugin from 'tailwindcss/plugin';

export const chipPlugin: ReturnType<typeof plugin> = plugin(function ({ addComponents }) {
    const chips = {
        // Base Chip
        '.md-chip': {
            '@apply inline-flex items-center gap-2 px-3 h-8 border border-md-outline rounded-md-lg cursor-pointer transition-all duration-200': {},
            '@apply text-md-label-large text-md-on-surface bg-transparent': {}, // Assist/Suggestion default

            // Hover state
            '@apply hover:bg-md-on-surface/10 hover:shadow-md-1': {},

            // Focus state
            '&:focus-visible': {
                '@apply outline-none ring-2 ring-md-primary ring-offset-2': {},
            },

            // Disabled
            '&:disabled, &.disabled': {
                '@apply opacity-38 cursor-not-allowed shadow-none border-md-on-surface/12 pointer-events-none': {},
            },

            // Icons
            '> svg': {
                '@apply w-4.5 h-4.5': {}, // 18px
                '&.md-chip-icon-leading': {
                    '@apply text-md-primary': {},
                },
                '&.md-chip-icon-trailing': {
                    '@apply text-md-on-surface-variant hover:text-md-on-surface': {},
                }
            },

            // Avatar/Image
            '.md-avatar': {
                '@apply w-6 h-6 rounded-md-full -ml-1': {},
            },

            // Variants

            // Elevated Chip
            '&.md-chip-elevated': {
                '@apply bg-md-surface-container-low border-none shadow-md-1': {},
                '@apply hover:bg-md-surface-container hover:shadow-md-2': {},
            },

            // Filter Chip (Selected)
            '&.active': {
                '@apply bg-md-secondary-container border-transparent text-md-on-secondary-container': {},
                '@apply hover:bg-md-secondary-container hover:shadow-md-1 hover:brightness-95': {},

                // Using pseudo for checkmark in pure CSS is tricky without structure, 
                // expecting SVG icon for checked state usually.
                '.md-chip-icon-leading': {
                    '@apply text-md-on-secondary-container': {},
                }
            },

            // Input Chip (has close button often)
            '&.md-chip-input': {
                '@apply pr-2': {}, // Less padding on right for remove icon
            }
        }
    };

    addComponents(chips);
});

export default chipPlugin;
