/**
 * Material Design 3 Progress Component - Tailwind Plugin
 */

import plugin from 'tailwindcss/plugin';

export const progressPlugin: ReturnType<typeof plugin> = plugin(function ({ addComponents }) {
    const progress = {
        // Linear Progress
        '.md-progress-linear': {
            '@apply relative w-full h-1 bg-md-surface-container-highest overflow-hidden': {},
            // Buffer/Track (optional, usually base is track)

            // Bar/Indicator
            '.md-progress-bar': {
                '@apply h-full bg-md-primary transition-all duration-200': {},
                width: 'var(--md-progress-value, 0%)',
            },

            // Indeterminate state
            '&.indeterminate': {
                '.md-progress-bar': {
                    '@apply w-full origin-left animate-md-linear-indeterminate': {},
                }
            }
        },

        // Circular Progress
        '.md-progress-circular': {
            '@apply relative inline-flex w-12 h-12 text-md-primary': {},

            'svg': {
                '@apply w-full h-full rotate-[-90deg]': {},
                'circle': {
                    '@apply fill-none stroke-current stroke-4 transition-all duration-200': {},
                    strokeDasharray: '100', // Assuming 100 based viewBox for easy %
                    strokeDashoffset: 'calc(100 - var(--md-progress-value, 0))',
                    strokeLinecap: 'round',
                }
            },

            // Indeterminate state
            '&.indeterminate': {
                'svg': {
                    '@apply animate-spin duration-1000 ease-linear': {}, // Simple spin, M3 has complex arc animation
                    'circle': {
                        // Complex M3 arc animation would need keyframes for dasharray/offset
                        '@apply stroke-[3px]': {},
                    }
                }
            }
        },

        // Keyframes for linear indeterminate (simplified)
        '@keyframes md-linear-indeterminate': {
            '0%': { transform: 'translateX(-100%) scaleX(0.2)' },
            '50%': { transform: 'translateX(0%) scaleX(0.5)' },
            '100%': { transform: 'translateX(100%) scaleX(0.2)' },
        }
    };

    addComponents(progress);
});

export default progressPlugin;
