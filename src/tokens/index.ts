/**
 * Material Design 3 Design Tokens
 * Central export point for all design tokens
 */

export * from './colors';
export * from './typography';
export * from './elevation';
export * from './shape';
export * from './motion';

import colorTokens from './colors';
import typographyTokens from './typography';
import elevationTokens from './elevation';
import shapeTokens from './shape';
import motionTokens from './motion';

/**
 * Complete Material 3 design system tokens
 */
export const tokens = {
  color: colorTokens,
  typography: typographyTokens,
  elevation: elevationTokens,
  shape: shapeTokens,
  motion: motionTokens,
};

export default tokens;
