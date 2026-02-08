/**
 * Material Design 3 Light Theme
 */

import { defaultColorTokens, type ColorTokens } from '../tokens/colors';

export interface ThemeColors {
  // Primary
  'md-primary': string;
  'md-on-primary': string;
  'md-primary-container': string;
  'md-on-primary-container': string;
  'md-inverse-primary': string;

  // Secondary
  'md-secondary': string;
  'md-on-secondary': string;
  'md-secondary-container': string;
  'md-on-secondary-container': string;

  // Tertiary
  'md-tertiary': string;
  'md-on-tertiary': string;
  'md-tertiary-container': string;
  'md-on-tertiary-container': string;

  // Error
  'md-error': string;
  'md-on-error': string;
  'md-error-container': string;
  'md-on-error-container': string;

  // Background
  'md-background': string;
  'md-on-background': string;

  // Surface
  'md-surface': string;
  'md-on-surface': string;
  'md-surface-variant': string;
  'md-on-surface-variant': string;
  'md-surface-dim': string;
  'md-surface-bright': string;
  'md-surface-container-lowest': string;
  'md-surface-container-low': string;
  'md-surface-container': string;
  'md-surface-container-high': string;
  'md-surface-container-highest': string;

  // Inverse
  'md-inverse-surface': string;
  'md-inverse-on-surface': string;

  // Outline
  'md-outline': string;
  'md-outline-variant': string;

  // Shadow and Scrim
  'md-shadow': string;
  'md-scrim': string;
}

/**
 * Generate light theme colors from color tokens
 * @param tokens - Custom color tokens (optional, defaults to Material baseline)
 * @returns Tailwind-compatible color object for light theme
 */
export function getLightThemeColors(tokens: ColorTokens = defaultColorTokens): ThemeColors {
  return {
    'md-primary': tokens.primary.light,
    'md-on-primary': tokens.onPrimary.light,
    'md-primary-container': tokens.primaryContainer.light,
    'md-on-primary-container': tokens.onPrimaryContainer.light,
    'md-inverse-primary': tokens.inversePrimary.light,

    'md-secondary': tokens.secondary.light,
    'md-on-secondary': tokens.onSecondary.light,
    'md-secondary-container': tokens.secondaryContainer.light,
    'md-on-secondary-container': tokens.onSecondaryContainer.light,

    'md-tertiary': tokens.tertiary.light,
    'md-on-tertiary': tokens.onTertiary.light,
    'md-tertiary-container': tokens.tertiaryContainer.light,
    'md-on-tertiary-container': tokens.onTertiaryContainer.light,

    'md-error': tokens.error.light,
    'md-on-error': tokens.onError.light,
    'md-error-container': tokens.errorContainer.light,
    'md-on-error-container': tokens.onErrorContainer.light,

    'md-background': tokens.background.light,
    'md-on-background': tokens.onBackground.light,

    'md-surface': tokens.surface.light,
    'md-on-surface': tokens.onSurface.light,
    'md-surface-variant': tokens.surfaceVariant.light,
    'md-on-surface-variant': tokens.onSurfaceVariant.light,
    'md-surface-dim': tokens.surfaceDim.light,
    'md-surface-bright': tokens.surfaceBright.light,
    'md-surface-container-lowest': tokens.surfaceContainerLowest.light,
    'md-surface-container-low': tokens.surfaceContainerLow.light,
    'md-surface-container': tokens.surfaceContainer.light,
    'md-surface-container-high': tokens.surfaceContainerHigh.light,
    'md-surface-container-highest': tokens.surfaceContainerHighest.light,

    'md-inverse-surface': tokens.inverseSurface.light,
    'md-inverse-on-surface': tokens.inverseOnSurface.light,

    'md-outline': tokens.outline.light,
    'md-outline-variant': tokens.outlineVariant.light,

    'md-shadow': tokens.shadow.light,
    'md-scrim': tokens.scrim.light,
  };
}

export default getLightThemeColors();
