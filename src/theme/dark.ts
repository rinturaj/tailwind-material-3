/**
 * Material Design 3 Dark Theme
 */

import { defaultColorTokens, type ColorTokens } from '../tokens/colors';
import type { ThemeColors } from './light';

/**
 * Generate dark theme colors from color tokens
 * @param tokens - Custom color tokens (optional, defaults to Material baseline)
 * @returns Tailwind-compatible color object for dark theme
 */
export function getDarkThemeColors(tokens: ColorTokens = defaultColorTokens): ThemeColors {
  return {
    'md-primary': tokens.primary.dark,
    'md-on-primary': tokens.onPrimary.dark,
    'md-primary-container': tokens.primaryContainer.dark,
    'md-on-primary-container': tokens.onPrimaryContainer.dark,
    'md-inverse-primary': tokens.inversePrimary.dark,

    'md-secondary': tokens.secondary.dark,
    'md-on-secondary': tokens.onSecondary.dark,
    'md-secondary-container': tokens.secondaryContainer.dark,
    'md-on-secondary-container': tokens.onSecondaryContainer.dark,

    'md-tertiary': tokens.tertiary.dark,
    'md-on-tertiary': tokens.onTertiary.dark,
    'md-tertiary-container': tokens.tertiaryContainer.dark,
    'md-on-tertiary-container': tokens.onTertiaryContainer.dark,

    'md-error': tokens.error.dark,
    'md-on-error': tokens.onError.dark,
    'md-error-container': tokens.errorContainer.dark,
    'md-on-error-container': tokens.onErrorContainer.dark,

    'md-background': tokens.background.dark,
    'md-on-background': tokens.onBackground.dark,

    'md-surface': tokens.surface.dark,
    'md-on-surface': tokens.onSurface.dark,
    'md-surface-variant': tokens.surfaceVariant.dark,
    'md-on-surface-variant': tokens.onSurfaceVariant.dark,
    'md-surface-dim': tokens.surfaceDim.dark,
    'md-surface-bright': tokens.surfaceBright.dark,
    'md-surface-container-lowest': tokens.surfaceContainerLowest.dark,
    'md-surface-container-low': tokens.surfaceContainerLow.dark,
    'md-surface-container': tokens.surfaceContainer.dark,
    'md-surface-container-high': tokens.surfaceContainerHigh.dark,
    'md-surface-container-highest': tokens.surfaceContainerHighest.dark,

    'md-inverse-surface': tokens.inverseSurface.dark,
    'md-inverse-on-surface': tokens.inverseOnSurface.dark,

    'md-outline': tokens.outline.dark,
    'md-outline-variant': tokens.outlineVariant.dark,

    'md-shadow': tokens.shadow.dark,
    'md-scrim': tokens.scrim.dark,
  };
}

export default getDarkThemeColors();
