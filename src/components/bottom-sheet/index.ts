/**
 * Material Design 3 Bottom Sheet Component - Tailwind Plugin
 */

import plugin from 'tailwindcss/plugin';

export const bottomSheetPlugin: ReturnType<typeof plugin> = plugin(function ({ addComponents }) {
    const sheets = {
        // Bottom Sheet Container/Modal
        '.md-bottom-sheet': {
            '@apply fixed bottom-0 left-0 right-0 z-50 bg-md-surface-container-low text-md-on-surface rounded-t-md-xl shadow-md-4 transition-transform duration-300 translate-y-full max-h-[90vh] flex flex-col': {},

            // Standard/Persistent variant (not fixed, usually inline or absolute in container)
            '&.md-bottom-sheet-standard': {
                '@apply relative z-0 translate-y-0 shadow-none border-t border-md-outline-variant w-full': {},
            },

            // Open state
            '&.open': {
                '@apply translate-y-0': {},
            },

            // Drag Handle
            '.md-bottom-sheet-handle': {
                '@apply w-8 h-1 bg-md-on-surface-variant/40 rounded-full mx-auto my-4 shrink-0': {},
            },

            // Content area
            '.md-bottom-sheet-content': {
                '@apply px-4 pb-4 overflow-y-auto': {},
            },

            // Modal Scrim
            '+ .md-bottom-sheet-scrim': {
                '@apply fixed inset-0 z-40 bg-black/32 transition-opacity duration-300 opacity-0 pointer-events-none': {},
                '&.open': {
                    '@apply opacity-100 pointer-events-auto': {},
                }
            }
        }
    };

    addComponents(sheets);
});

export default bottomSheetPlugin;
