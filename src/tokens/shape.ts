/**
 * Material Design 3 Shape Tokens
 * Based on https://m3.material.io/styles/shape/shape-scale-tokens
 */

export interface ShapeTokens {
  none: string;
  extraSmall: string;
  extraSmallTop: string;
  small: string;
  medium: string;
  large: string;
  largeEnd: string;
  largeTop: string;
  extraLarge: string;
  extraLargeTop: string;
  full: string;
}

/**
 * Material 3 shape scale
 * Default corner radius values
 */
export const defaultShapeTokens: ShapeTokens = {
  none: '0px',
  extraSmall: '4px',
  extraSmallTop: '4px 4px 0px 0px', // Only top corners rounded
  small: '8px',
  medium: '12px',
  large: '16px',
  largeEnd: '0px 16px 16px 0px', // Only end (right in LTR) corners rounded
  largeTop: '16px 16px 0px 0px', // Only top corners rounded
  extraLarge: '28px',
  extraLargeTop: '28px 28px 0px 0px', // Only top corners rounded
  full: '9999px', // Fully rounded (pill shape)
};

/**
 * Component shape defaults
 * Recommended shapes for common components based on Material 3
 */
export const componentShapes = {
  // Buttons
  button: {
    filled: 'full',
    outlined: 'full',
    text: 'full',
    elevated: 'full',
    tonal: 'full',
  },
  fab: {
    small: 'medium',
    default: 'large',
    large: 'extraLarge',
    extended: 'large',
  },

  // Cards
  card: {
    elevated: 'medium',
    filled: 'medium',
    outlined: 'medium',
  },

  // Input fields
  textField: {
    filled: 'extraSmallTop',
    outlined: 'extraSmall',
  },

  // Dialogs and sheets
  dialog: 'extraLarge',
  bottomSheet: 'extraLargeTop',

  // Navigation
  navigationDrawer: 'largeEnd',
  navigationRail: 'none',
  navigationBar: 'none',

  // Other components
  chip: {
    assist: 'small',
    filter: 'small',
    input: 'small',
    suggestion: 'small',
  },
  snackbar: 'extraSmall',
  tooltip: 'extraSmall',
  menu: 'extraSmall',
  badge: 'full',

  // Checkboxes and radios
  checkbox: 'extraSmall',
  radio: 'full',
  switch: {
    track: 'full',
    handle: 'full',
  },
} as const;

/**
 * Helper to get border radius value
 * @param shape - Shape token key or custom value
 * @returns Border radius CSS value
 */
export function getBorderRadius(shape: keyof ShapeTokens): string {
  if (shape in defaultShapeTokens) {
    return defaultShapeTokens[shape as keyof ShapeTokens];
  }
  return shape;
}

export default {
  tokens: defaultShapeTokens,
  components: componentShapes,
};
