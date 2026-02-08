/**
 * Material Design 3 Theme Utilities
 * Central export for theme configuration
 */

export * from './light';
export * from './dark';

import lightTheme, { getLightThemeColors } from './light';
import darkTheme, { getDarkThemeColors } from './dark';

/**
 * Complete Material 3 theme configuration
 */
export const theme = {
    light: lightTheme,
    dark: darkTheme,
    getLightThemeColors,
    getDarkThemeColors,
};

export default theme;
