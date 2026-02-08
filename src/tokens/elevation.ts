/**
 * Material Design 3 Elevation Tokens
 * Based on https://m3.material.io/styles/elevation/overview
 */

export interface ElevationLevel {
    boxShadow: string;
    surfaceTintOpacity?: number; // For dark theme surface tint
}

export interface ElevationTokens {
    level0: ElevationLevel;
    level1: ElevationLevel;
    level2: ElevationLevel;
    level3: ElevationLevel;
    level4: ElevationLevel;
    level5: ElevationLevel;
}

/**
 * Material 3 elevation shadows (light theme)
 * Using a combination of key shadow and ambient shadow
 */
export const lightElevation: ElevationTokens = {
    level0: {
        boxShadow: 'none',
        surfaceTintOpacity: 0,
    },
    level1: {
        boxShadow:
            '0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)',
        surfaceTintOpacity: 0.05,
    },
    level2: {
        boxShadow:
            '0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 2px 6px 2px rgba(0, 0, 0, 0.15)',
        surfaceTintOpacity: 0.08,
    },
    level3: {
        boxShadow:
            '0px 1px 3px 0px rgba(0, 0, 0, 0.3), 0px 4px 8px 3px rgba(0, 0, 0, 0.15)',
        surfaceTintOpacity: 0.11,
    },
    level4: {
        boxShadow:
            '0px 2px 3px 0px rgba(0, 0, 0, 0.3), 0px 6px 10px 4px rgba(0, 0, 0, 0.15)',
        surfaceTintOpacity: 0.12,
    },
    level5: {
        boxShadow:
            '0px 4px 4px 0px rgba(0, 0, 0, 0.3), 0px 8px 12px 6px rgba(0, 0, 0, 0.15)',
        surfaceTintOpacity: 0.14,
    },
};

/**
 * Material 3 elevation shadows (dark theme)
 * Shadows are less prominent in dark mode, rely more on surface tint
 */
export const darkElevation: ElevationTokens = {
    level0: {
        boxShadow: 'none',
        surfaceTintOpacity: 0,
    },
    level1: {
        boxShadow:
            '0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)',
        surfaceTintOpacity: 0.05,
    },
    level2: {
        boxShadow:
            '0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 2px 6px 2px rgba(0, 0, 0, 0.15)',
        surfaceTintOpacity: 0.08,
    },
    level3: {
        boxShadow:
            '0px 1px 3px 0px rgba(0, 0, 0, 0.3), 0px 4px 8px 3px rgba(0, 0, 0, 0.15)',
        surfaceTintOpacity: 0.11,
    },
    level4: {
        boxShadow:
            '0px 2px 3px 0px rgba(0, 0, 0, 0.3), 0px 6px 10px 4px rgba(0, 0, 0, 0.15)',
        surfaceTintOpacity: 0.12,
    },
    level5: {
        boxShadow:
            '0px 4px 4px 0px rgba(0, 0, 0, 0.3), 0px 8px 12px 6px rgba(0, 0, 0, 0.15)',
        surfaceTintOpacity: 0.14,
    },
};

/**
 * Surface container elevation mapping
 * Based on Material 3 surface container levels
 */
export const surfaceContainerElevation = {
    lowest: 'level0',
    low: 'level1',
    default: 'level2',
    high: 'level3',
    highest: 'level4',
} as const;

/**
 * Component elevation defaults
 * Default elevation levels for common components
 */
export const componentElevation = {
    card: {
        elevated: 'level1',
        filled: 'level0',
        outlined: 'level0',
    },
    button: {
        elevated: 'level1',
        filled: 'level0',
        outlined: 'level0',
        text: 'level0',
    },
    fab: 'level3',
    dialog: 'level3',
    bottomSheet: 'level1',
    navigationDrawer: 'level0',
    menu: 'level2',
    snackbar: 'level3',
} as const;

export default {
    light: lightElevation,
    dark: darkElevation,
    surface: surfaceContainerElevation,
    component: componentElevation,
};
