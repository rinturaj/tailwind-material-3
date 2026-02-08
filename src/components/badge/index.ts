/**
 * Material Design 3 Badge Component - Tailwind Plugin
 */

import plugin from 'tailwindcss/plugin';

export const badgePlugin: ReturnType<typeof plugin> = plugin(function ({ addComponents }) {
    const badges = {
        '.md-badge': {
            '@apply inline-flex items-center justify-center min-w-[16px] h-4 px-1 rounded-md-full bg-md-error text-md-on-error text-[11px] font-medium leading-none': {},

            // Small dot variant
            '&.md-badge-dot': {
                '@apply min-w-[6px] w-[6px] h-[6px] p-0': {},
            },

            // Large variant (for more than 3 digits, though max 999+ usually)
            '&.md-badge-large': {
                '@apply h-6 min-w-[24px] px-2 text-md-label-small': {},
            },

            // Positioned contextual usage (e.g. on icon)
            // Parent needs relative
            '.relative > &': {
                '@apply absolute top-0 right-0 -mr-1 -mt-1': {}, // Simple corner positioning
            }
        }
    };

    addComponents(badges);
});

export default badgePlugin;
