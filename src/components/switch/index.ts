/**
 * Material Design 3 Switch Component - Tailwind Plugin
 */

import plugin from 'tailwindcss/plugin';

export const switchPlugin: ReturnType<typeof plugin> = plugin(function ({ addComponents }) {
    const switches = {
        '.md-switch': {
            '@apply relative inline-flex h-8 w-[52px] shrink-0 cursor-pointer rounded-md-full border-2 border-md-outline bg-md-surface-variant transition-colors duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-md-primary focus-visible:ring-offset-2': {},

            '&[aria-checked="true"]': {
                '@apply bg-md-primary border-md-primary': {},

                // Thumb (checked)
                '.md-switch-thumb': {
                    '@apply translate-x-5 bg-md-on-primary w-6 h-6': {},
                    // Check icon (optional, typically handled by SVG inside thumb)
                    '&:has(svg)': {
                        '@apply w-6 h-6': {},
                    }
                },
            },

            '&[aria-checked="false"]': {
                // Thumb (unchecked)
                '.md-switch-thumb': {
                    '@apply translate-x-0 bg-md-outline w-4 h-4 mt-1 ml-1': {},
                    // Icon inside (unchecked)
                    'svg': {
                        '@apply hidden': {}, // Usually hidden or smaller in unchecked state M3
                    }
                },
                '&:hover .md-switch-thumb': {
                    '@apply bg-md-on-surface-variant': {},
                }
            },

            '&:disabled': {
                '@apply cursor-not-allowed opacity-38 border-none bg-md-on-surface/12': {},
                '&[aria-checked="true"]': {
                    '@apply bg-md-on-surface/12': {},
                    '.md-switch-thumb': {
                        '@apply bg-md-surface': {},
                    }
                },
                '&[aria-checked="false"]': {
                    '.md-switch-thumb': {
                        '@apply bg-md-on-surface/38': {},
                    }
                }
            },

            // Thumb common
            '.md-switch-thumb': {
                '@apply pointer-events-none inline-block transform rounded-md-full shadow ring-0 transition duration-200 ease-in-out flex items-center justify-center': {},
            },

            // Hidden input for form submission
            'input[type="checkbox"]': {
                '@apply sr-only': {},
            }
        }
    };

    addComponents(switches);
});

export default switchPlugin;
