import type { Config } from 'tailwindcss';
import { defaultTypographyTokens } from './tokens/typography';
import { lightElevation } from './tokens/elevation';
import { defaultShapeTokens } from './tokens/shape';
import { easingTokens, durationTokens } from './tokens/motion';

import lightTheme from './theme/light';
import {
  buttonPlugin,
  cardPlugin,
  textFieldPlugin,
  dialogPlugin,
  snackbarPlugin,
  checkboxPlugin,
  radioPlugin,
  switchPlugin,
  tabsPlugin,
  navigationDrawerPlugin,
  appBarPlugin,
  listPlugin,
  chipPlugin,
  badgePlugin,
  progressPlugin,
  tooltipPlugin,
  bottomSheetPlugin,
  menuPlugin
} from './components';

/**
 * Material Design 3 Tailwind Configuration
 * Extends Tailwind with Material 3 design tokens
 */
export function createMaterialConfig(userConfig: Partial<Config> = {}): Config {
  const config: Config = {
    content: userConfig.content || ['./src/**/*.{html,js,ts,jsx,tsx}'],
    darkMode: 'class', // Use class strategy for dark mode
    theme: {
      extend: {
        // Material 3 Colors
        colors: {
          ...lightTheme,
        },

        // Material 3 Typography
        fontFamily: {
          roboto: ['"Roboto"', 'sans-serif'],
          'roboto-mono': ['"Roboto Mono"', 'monospace'],
        },
        fontSize: {
          // Display
          'md-display-large': [
            defaultTypographyTokens.displayLarge.fontSize,
            {
              lineHeight: defaultTypographyTokens.displayLarge.lineHeight,
              letterSpacing: defaultTypographyTokens.displayLarge.letterSpacing,
              fontWeight: defaultTypographyTokens.displayLarge.fontWeight.toString(),
            },
          ],
          'md-display-medium': [
            defaultTypographyTokens.displayMedium.fontSize,
            {
              lineHeight: defaultTypographyTokens.displayMedium.lineHeight,
              letterSpacing: defaultTypographyTokens.displayMedium.letterSpacing,
              fontWeight: defaultTypographyTokens.displayMedium.fontWeight.toString(),
            },
          ],
          'md-display-small': [
            defaultTypographyTokens.displaySmall.fontSize,
            {
              lineHeight: defaultTypographyTokens.displaySmall.lineHeight,
              letterSpacing: defaultTypographyTokens.displaySmall.letterSpacing,
              fontWeight: defaultTypographyTokens.displaySmall.fontWeight.toString(),
            },
          ],
          // Headline
          'md-headline-large': [
            defaultTypographyTokens.headlineLarge.fontSize,
            {
              lineHeight: defaultTypographyTokens.headlineLarge.lineHeight,
              letterSpacing: defaultTypographyTokens.headlineLarge.letterSpacing,
              fontWeight: defaultTypographyTokens.headlineLarge.fontWeight.toString(),
            },
          ],
          'md-headline-medium': [
            defaultTypographyTokens.headlineMedium.fontSize,
            {
              lineHeight: defaultTypographyTokens.headlineMedium.lineHeight,
              letterSpacing: defaultTypographyTokens.headlineMedium.letterSpacing,
              fontWeight: defaultTypographyTokens.headlineMedium.fontWeight.toString(),
            },
          ],
          'md-headline-small': [
            defaultTypographyTokens.headlineSmall.fontSize,
            {
              lineHeight: defaultTypographyTokens.headlineSmall.lineHeight,
              letterSpacing: defaultTypographyTokens.headlineSmall.letterSpacing,
              fontWeight: defaultTypographyTokens.headlineSmall.fontWeight.toString(),
            },
          ],
          // Title
          'md-title-large': [
            defaultTypographyTokens.titleLarge.fontSize,
            {
              lineHeight: defaultTypographyTokens.titleLarge.lineHeight,
              letterSpacing: defaultTypographyTokens.titleLarge.letterSpacing,
              fontWeight: defaultTypographyTokens.titleLarge.fontWeight.toString(),
            },
          ],
          'md-title-medium': [
            defaultTypographyTokens.titleMedium.fontSize,
            {
              lineHeight: defaultTypographyTokens.titleMedium.lineHeight,
              letterSpacing: defaultTypographyTokens.titleMedium.letterSpacing,
              fontWeight: defaultTypographyTokens.titleMedium.fontWeight.toString(),
            },
          ],
          'md-title-small': [
            defaultTypographyTokens.titleSmall.fontSize,
            {
              lineHeight: defaultTypographyTokens.titleSmall.lineHeight,
              letterSpacing: defaultTypographyTokens.titleSmall.letterSpacing,
              fontWeight: defaultTypographyTokens.titleSmall.fontWeight.toString(),
            },
          ],
          // Body
          'md-body-large': [
            defaultTypographyTokens.bodyLarge.fontSize,
            {
              lineHeight: defaultTypographyTokens.bodyLarge.lineHeight,
              letterSpacing: defaultTypographyTokens.bodyLarge.letterSpacing,
              fontWeight: defaultTypographyTokens.bodyLarge.fontWeight.toString(),
            },
          ],
          'md-body-medium': [
            defaultTypographyTokens.bodyMedium.fontSize,
            {
              lineHeight: defaultTypographyTokens.bodyMedium.lineHeight,
              letterSpacing: defaultTypographyTokens.bodyMedium.letterSpacing,
              fontWeight: defaultTypographyTokens.bodyMedium.fontWeight.toString(),
            },
          ],
          'md-body-small': [
            defaultTypographyTokens.bodySmall.fontSize,
            {
              lineHeight: defaultTypographyTokens.bodySmall.lineHeight,
              letterSpacing: defaultTypographyTokens.bodySmall.letterSpacing,
              fontWeight: defaultTypographyTokens.bodySmall.fontWeight.toString(),
            },
          ],
          // Label
          'md-label-large': [
            defaultTypographyTokens.labelLarge.fontSize,
            {
              lineHeight: defaultTypographyTokens.labelLarge.lineHeight,
              letterSpacing: defaultTypographyTokens.labelLarge.letterSpacing,
              fontWeight: defaultTypographyTokens.labelLarge.fontWeight.toString(),
            },
          ],
          'md-label-medium': [
            defaultTypographyTokens.labelMedium.fontSize,
            {
              lineHeight: defaultTypographyTokens.labelMedium.lineHeight,
              letterSpacing: defaultTypographyTokens.labelMedium.letterSpacing,
              fontWeight: defaultTypographyTokens.labelMedium.fontWeight.toString(),
            },
          ],
          'md-label-small': [
            defaultTypographyTokens.labelSmall.fontSize,
            {
              lineHeight: defaultTypographyTokens.labelSmall.lineHeight,
              letterSpacing: defaultTypographyTokens.labelSmall.letterSpacing,
              fontWeight: defaultTypographyTokens.labelSmall.fontWeight.toString(),
            },
          ],
        },

        // Material 3 Elevation (shadows)
        boxShadow: {
          'md-0': lightElevation.level0.boxShadow,
          'md-1': lightElevation.level1.boxShadow,
          'md-2': lightElevation.level2.boxShadow,
          'md-3': lightElevation.level3.boxShadow,
          'md-4': lightElevation.level4.boxShadow,
          'md-5': lightElevation.level5.boxShadow,
        },

        // Material 3 Shape (border radius)
        borderRadius: {
          'md-none': defaultShapeTokens.none,
          'md-xs': defaultShapeTokens.extraSmall,
          'md-xs-top': defaultShapeTokens.extraSmallTop,
          'md-sm': defaultShapeTokens.small,
          'md-md': defaultShapeTokens.medium,
          'md-lg': defaultShapeTokens.large,
          'md-lg-end': defaultShapeTokens.largeEnd,
          'md-lg-top': defaultShapeTokens.largeTop,
          'md-xl': defaultShapeTokens.extraLarge,
          'md-xl-top': defaultShapeTokens.extraLargeTop,
          'md-full': defaultShapeTokens.full,
        },

        // Material 3 Motion (transitions)
        transitionTimingFunction: {
          'md-standard': easingTokens.standard,
          'md-standard-accelerate': easingTokens.standardAccelerate,
          'md-standard-decelerate': easingTokens.standardDecelerate,
          'md-emphasized': easingTokens.emphasized,
          'md-emphasized-accelerate': easingTokens.emphasizedAccelerate,
          'md-emphasized-decelerate': easingTokens.emphasizedDecelerate,
        },
        transitionDuration: {
          'md-short-1': durationTokens.short1,
          'md-short-2': durationTokens.short2,
          'md-short-3': durationTokens.short3,
          'md-short-4': durationTokens.short4,
          'md-medium-1': durationTokens.medium1,
          'md-medium-2': durationTokens.medium2,
          'md-medium-3': durationTokens.medium3,
          'md-medium-4': durationTokens.medium4,
          'md-long-1': durationTokens.long1,
          'md-long-2': durationTokens.long2,
          'md-long-3': durationTokens.long3,
          'md-long-4': durationTokens.long4,
          'md-extra-long-1': durationTokens.extraLong1,
          'md-extra-long-2': durationTokens.extraLong2,
          'md-extra-long-3': durationTokens.extraLong3,
          'md-extra-long-4': durationTokens.extraLong4,
        },

        // Additional Material 3 spacing
        spacing: {
          'md-xs': '4px',
          'md-sm': '8px',
          'md-md': '12px',
          'md-lg': '16px',
          'md-xl': '24px',
          'md-2xl': '32px',
        },
      },
    },
    plugins: [
      // Component plugins
      buttonPlugin,
      cardPlugin,
      textFieldPlugin,
      dialogPlugin,
      snackbarPlugin,
      checkboxPlugin,
      radioPlugin,
      switchPlugin,
      tabsPlugin,
      navigationDrawerPlugin,
      appBarPlugin,
      listPlugin,
      chipPlugin,
      badgePlugin,
      progressPlugin,
      tooltipPlugin,
      bottomSheetPlugin,
      menuPlugin,
    ],
    ...userConfig,
  };

  return config;
}

export default createMaterialConfig;
