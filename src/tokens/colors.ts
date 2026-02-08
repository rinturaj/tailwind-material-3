/**
 * Material Design 3 Color Tokens
 * Based on https://m3.material.io/styles/color/the-color-system/key-colors-tones
 */

export interface ColorRole {
  light: string;
  dark: string;
}

export interface ColorTokens {
  // Primary colors
  primary: ColorRole;
  onPrimary: ColorRole;
  primaryContainer: ColorRole;
  onPrimaryContainer: ColorRole;
  inversePrimary: ColorRole;

  // Secondary colors
  secondary: ColorRole;
  onSecondary: ColorRole;
  secondaryContainer: ColorRole;
  onSecondaryContainer: ColorRole;

  // Tertiary colors
  tertiary: ColorRole;
  onTertiary: ColorRole;
  tertiaryContainer: ColorRole;
  onTertiaryContainer: ColorRole;

  // Error colors
  error: ColorRole;
  onError: ColorRole;
  errorContainer: ColorRole;
  onErrorContainer: ColorRole;

  // Background colors
  background: ColorRole;
  onBackground: ColorRole;

  // Surface colors
  surface: ColorRole;
  onSurface: ColorRole;
  surfaceVariant: ColorRole;
  onSurfaceVariant: ColorRole;
  surfaceDim: ColorRole;
  surfaceBright: ColorRole;
  surfaceContainerLowest: ColorRole;
  surfaceContainerLow: ColorRole;
  surfaceContainer: ColorRole;
  surfaceContainerHigh: ColorRole;
  surfaceContainerHighest: ColorRole;

  // Inverse colors
  inverseSurface: ColorRole;
  inverseOnSurface: ColorRole;

  // Outline colors
  outline: ColorRole;
  outlineVariant: ColorRole;

  // Shadow and scrim
  shadow: ColorRole;
  scrim: ColorRole;
}

/**
 * State layer opacity values based on Material 3
 * https://m3.material.io/foundations/interaction-states
 */
export const stateLayerOpacity = {
  hover: 0.08,
  focus: 0.12,
  press: 0.12,
  drag: 0.16,
  disabled: 0.12,
  disabledContainer: 0.12,
} as const;

/**
 * Default Material 3 color tokens
 * These can be overridden with custom colors via the theme configuration
 */
export const defaultColorTokens: ColorTokens = {
  // Primary - Default to a green-ish teal (Material baseline)
  primary: {
    light: '#6750A4',
    dark: '#D0BCFF',
  },
  onPrimary: {
    light: '#FFFFFF',
    dark: '#381E72',
  },
  primaryContainer: {
    light: '#EADDFF',
    dark: '#4F378B',
  },
  onPrimaryContainer: {
    light: '#21005D',
    dark: '#EADDFF',
  },
  inversePrimary: {
    light: '#D0BCFF',
    dark: '#6750A4',
  },

  // Secondary
  secondary: {
    light: '#625B71',
    dark: '#CCC2DC',
  },
  onSecondary: {
    light: '#FFFFFF',
    dark: '#332D41',
  },
  secondaryContainer: {
    light: '#E8DEF8',
    dark: '#4A4458',
  },
  onSecondaryContainer: {
    light: '#1D192B',
    dark: '#E8DEF8',
  },

  // Tertiary
  tertiary: {
    light: '#7D5260',
    dark: '#EFB8C8',
  },
  onTertiary: {
    light: '#FFFFFF',
    dark: '#492532',
  },
  tertiaryContainer: {
    light: '#FFD8E4',
    dark: '#633B48',
  },
  onTertiaryContainer: {
    light: '#31111D',
    dark: '#FFD8E4',
  },

  // Error
  error: {
    light: '#B3261E',
    dark: '#F2B8B5',
  },
  onError: {
    light: '#FFFFFF',
    dark: '#601410',
  },
  errorContainer: {
    light: '#F9DEDC',
    dark: '#8C1D18',
  },
  onErrorContainer: {
    light: '#410E0B',
    dark: '#F9DEDC',
  },

  // Background
  background: {
    light: '#FFFBFE',
    dark: '#1C1B1F',
  },
  onBackground: {
    light: '#1C1B1F',
    dark: '#E6E1E5',
  },

  // Surface
  surface: {
    light: '#FFFBFE',
    dark: '#1C1B1F',
  },
  onSurface: {
    light: '#1C1B1F',
    dark: '#E6E1E5',
  },
  surfaceVariant: {
    light: '#E7E0EC',
    dark: '#49454F',
  },
  onSurfaceVariant: {
    light: '#49454F',
    dark: '#CAC4D0',
  },
  surfaceDim: {
    light: '#DED8E1',
    dark: '#1C1B1F',
  },
  surfaceBright: {
    light: '#FFFBFE',
    dark: '#3B383E',
  },
  surfaceContainerLowest: {
    light: '#FFFFFF',
    dark: '#0F0D13',
  },
  surfaceContainerLow: {
    light: '#F7F2FA',
    dark: '#1D1B20',
  },
  surfaceContainer: {
    light: '#F3EDF7',
    dark: '#211F26',
  },
  surfaceContainerHigh: {
    light: '#ECE6F0',
    dark: '#2B2930',
  },
  surfaceContainerHighest: {
    light: '#E6E0E9',
    dark: '#363439',
  },

  // Inverse
  inverseSurface: {
    light: '#313033',
    dark: '#E6E1E5',
  },
  inverseOnSurface: {
    light: '#F4EFF4',
    dark: '#1C1B1F',
  },

  // Outline
  outline: {
    light: '#79747E',
    dark: '#938F99',
  },
  outlineVariant: {
    light: '#CAC4D0',
    dark: '#49454F',
  },

  // Shadow and Scrim
  shadow: {
    light: '#000000',
    dark: '#000000',
  },
  scrim: {
    light: '#000000',
    dark: '#000000',
  },
};

/**
 * Helper to get state layer color with opacity
 * @param baseColor - The base color (e.g., '#6750A4')
 * @param state - The interaction state
 * @returns RGBA color string
 */
export function getStateLayerColor(
  baseColor: string,
  state: keyof typeof stateLayerOpacity
): string {
  const opacity = stateLayerOpacity[state];
  // Convert hex to RGB and add alpha
  const hex = baseColor.replace('#', '');
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

export default defaultColorTokens;
