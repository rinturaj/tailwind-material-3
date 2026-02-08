/**
 * Material Design 3 Motion Tokens
 * Based on https://m3.material.io/styles/motion/easing-and-duration/tokens-specs
 */

export interface EasingTokens {
  standard: string;
  standardAccelerate: string;
  standardDecelerate: string;
  emphasized: string;
  emphasizedAccelerate: string;
  emphasizedDecelerate: string;
  legacy: string;
  legacyAccelerate: string;
  legacyDecelerate: string;
}

export interface DurationTokens {
  short1: string;
  short2: string;
  short3: string;
  short4: string;
  medium1: string;
  medium2: string;
  medium3: string;
  medium4: string;
  long1: string;
  long2: string;
  long3: string;
  long4: string;
  extraLong1: string;
  extraLong2: string;
  extraLong3: string;
  extraLong4: string;
}

/**
 * Material 3 easing curves
 * Cubic-bezier functions for smooth, natural motion
 */
export const easingTokens: EasingTokens = {
  // Standard easing - For most transitions
  standard: 'cubic-bezier(0.2, 0, 0, 1)',
  standardAccelerate: 'cubic-bezier(0.3, 0, 1, 1)',
  standardDecelerate: 'cubic-bezier(0, 0, 0, 1)',

  // Emphasized easing - For important or complex transitions
  emphasized: 'cubic-bezier(0.2, 0, 0, 1)',
  emphasizedAccelerate: 'cubic-bezier(0.3, 0, 0.8, 0.15)',
  emphasizedDecelerate: 'cubic-bezier(0.05, 0.7, 0.1, 1)',

  // Legacy easing - For backwards compatibility
  legacy: 'cubic-bezier(0.4, 0, 0.2, 1)',
  legacyAccelerate: 'cubic-bezier(0.4, 0, 1, 1)',
  legacyDecelerate: 'cubic-bezier(0, 0, 0.2, 1)',
};

/**
 * Material 3 duration scale
 * Time values for different types of transitions
 */
export const durationTokens: DurationTokens = {
  // Short - Small component transitions (50-150ms)
  short1: '50ms',
  short2: '100ms',
  short3: '150ms',
  short4: '200ms',

  // Medium - Most transitions (200-400ms)
  medium1: '250ms',
  medium2: '300ms',
  medium3: '350ms',
  medium4: '400ms',

  // Long - Complex transitions (400-700ms)
  long1: '450ms',
  long2: '500ms',
  long3: '550ms',
  long4: '600ms',

  // Extra long - Large area transitions (700-1000ms)
  extraLong1: '700ms',
  extraLong2: '800ms',
  extraLong3: '900ms',
  extraLong4: '1000ms',
};

/**
 * Component motion defaults
 * Recommended durations and easings for common components
 */
export const componentMotion = {
  // Simple state changes
  stateLayer: {
    duration: durationTokens.short1,
    easing: easingTokens.standard,
  },

  // Buttons
  button: {
    duration: durationTokens.short2,
    easing: easingTokens.standard,
  },

  // Dialogs and sheets
  dialog: {
    enter: {
      duration: durationTokens.medium2,
      easing: easingTokens.emphasizedDecelerate,
    },
    exit: {
      duration: durationTokens.short4,
      easing: easingTokens.emphasizedAccelerate,
    },
  },
  bottomSheet: {
    enter: {
      duration: durationTokens.medium4,
      easing: easingTokens.emphasizedDecelerate,
    },
    exit: {
      duration: durationTokens.medium2,
      easing: easingTokens.emphasizedAccelerate,
    },
  },

  // Navigation
  navigationDrawer: {
    enter: {
      duration: durationTokens.medium4,
      easing: easingTokens.emphasizedDecelerate,
    },
    exit: {
      duration: durationTokens.medium2,
      easing: easingTokens.emphasizedAccelerate,
    },
  },

  // Cards and surfaces
  card: {
    duration: durationTokens.short3,
    easing: easingTokens.standard,
  },

  // Snackbar
  snackbar: {
    enter: {
      duration: durationTokens.medium2,
      easing: easingTokens.standard,
    },
    exit: {
      duration: durationTokens.short4,
      easing: easingTokens.standardAccelerate,
    },
  },

  // FAB
  fab: {
    duration: durationTokens.short2,
    easing: easingTokens.standard,
  },

  // Menu
  menu: {
    enter: {
      duration: durationTokens.medium1,
      easing: easingTokens.emphasizedDecelerate,
    },
    exit: {
      duration: durationTokens.short3,
      easing: easingTokens.emphasizedAccelerate,
    },
  },

  // Tooltip
  tooltip: {
    enter: {
      duration: durationTokens.short4,
      easing: easingTokens.standard,
    },
    exit: {
      duration: durationTokens.short2,
      easing: easingTokens.standard,
    },
  },
} as const;

/**
 * Helper to create transition CSS
 * @param properties - CSS properties to transition
 * @param duration - Duration token or custom value
 * @param easing - Easing token or custom value
 * @returns CSS transition value
 */
export function createTransition(
  properties: string | string[],
  duration: keyof DurationTokens | number = 'short2',
  easing: keyof EasingTokens = 'standard'
): string {
  const props = Array.isArray(properties) ? properties : [properties];
  const durationValue =
    duration in durationTokens ? durationTokens[duration as keyof DurationTokens] : duration;
  const easingValue = easing in easingTokens ? easingTokens[easing as keyof EasingTokens] : easing;

  return props.map((prop) => `${prop} ${durationValue} ${easingValue}`).join(', ');
}

export default {
  easing: easingTokens,
  duration: durationTokens,
  components: componentMotion,
};
