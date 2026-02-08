/**
 * Material Design 3 Tooltip Component - Tailwind Plugin
 */

import plugin from 'tailwindcss/plugin';

export const tooltipPlugin: ReturnType<typeof plugin> = plugin(function ({ addComponents }) {
    const tooltips = {
        '.md-tooltip': {
            // Base styles (Plain tooltip)
            '@apply fixed z-50 px-2 py-1 min-h-[24px] bg-md-inverse-surface text-md-inverse-on-surface text-md-body-small rounded-md-xs pointer-events-none opacity-0 transition-opacity duration-200': {},

            // Showing state
            '&.showing': {
                '@apply opacity-100': {},
            },

            // Rich Tooltip (more content, interactive maybe)
            '&.md-tooltip-rich': {
                '@apply min-h-[48px] px-4 py-3 max-w-[300px] flex flex-col gap-1 bg-md-surface-container text-md-on-surface-variant rounded-md-md shadow-md-2 pointer-events-auto': {},

                '.md-tooltip-headline': {
                    '@apply text-md-title-small text-md-on-surface pb-1': {},
                },
                '.md-tooltip-actions': {
                    '@apply pt-2 flex gap-2': {},
                }
            }
        }
    };

    addComponents(tooltips);
});

export default tooltipPlugin;
