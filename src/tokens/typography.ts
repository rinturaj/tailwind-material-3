/**
 * Material Design 3 Typography Tokens
 * Based on https://m3.material.io/styles/typography/type-scale-tokens
 */

export interface TypeScale {
    fontFamily: string;
    fontSize: string;
    fontWeight: number;
    lineHeight: string;
    letterSpacing: string;
}

export interface TypographyTokens {
    // Display styles - largest text
    displayLarge: TypeScale;
    displayMedium: TypeScale;
    displaySmall: TypeScale;

    // Headline styles
    headlineLarge: TypeScale;
    headlineMedium: TypeScale;
    headlineSmall: TypeScale;

    // Title styles
    titleLarge: TypeScale;
    titleMedium: TypeScale;
    titleSmall: TypeScale;

    // Body styles
    bodyLarge: TypeScale;
    bodyMedium: TypeScale;
    bodySmall: TypeScale;

    // Label styles
    labelLarge: TypeScale;
    labelMedium: TypeScale;
    labelSmall: TypeScale;
}

/**
 * Font family tokens
 * Default to Roboto (Material's recommended font)
 * Can be overridden in theme configuration
 */
export const fontFamilies = {
    brand: '"Roboto", sans-serif',
    plain: 'system-ui, sans-serif',
    monospace: '"Roboto Mono", monospace',
} as const;

/**
 * Default Material 3 typography tokens
 * Using Roboto font family with Material's recommended type scale
 */
export const defaultTypographyTokens: TypographyTokens = {
    // Display - Reserved for short, important text or numerals
    displayLarge: {
        fontFamily: fontFamilies.brand,
        fontSize: '57px',
        fontWeight: 400,
        lineHeight: '64px',
        letterSpacing: '-0.25px',
    },
    displayMedium: {
        fontFamily: fontFamilies.brand,
        fontSize: '45px',
        fontWeight: 400,
        lineHeight: '52px',
        letterSpacing: '0px',
    },
    displaySmall: {
        fontFamily: fontFamilies.brand,
        fontSize: '36px',
        fontWeight: 400,
        lineHeight: '44px',
        letterSpacing: '0px',
    },

    // Headline - For high-emphasis text
    headlineLarge: {
        fontFamily: fontFamilies.brand,
        fontSize: '32px',
        fontWeight: 400,
        lineHeight: '40px',
        letterSpacing: '0px',
    },
    headlineMedium: {
        fontFamily: fontFamilies.brand,
        fontSize: '28px',
        fontWeight: 400,
        lineHeight: '36px',
        letterSpacing: '0px',
    },
    headlineSmall: {
        fontFamily: fontFamilies.brand,
        fontSize: '24px',
        fontWeight: 400,
        lineHeight: '32px',
        letterSpacing: '0px',
    },

    // Title - For medium-emphasis text
    titleLarge: {
        fontFamily: fontFamilies.brand,
        fontSize: '22px',
        fontWeight: 400,
        lineHeight: '28px',
        letterSpacing: '0px',
    },
    titleMedium: {
        fontFamily: fontFamilies.brand,
        fontSize: '16px',
        fontWeight: 500,
        lineHeight: '24px',
        letterSpacing: '0.15px',
    },
    titleSmall: {
        fontFamily: fontFamilies.brand,
        fontSize: '14px',
        fontWeight: 500,
        lineHeight: '20px',
        letterSpacing: '0.1px',
    },

    // Body - For body text
    bodyLarge: {
        fontFamily: fontFamilies.plain,
        fontSize: '16px',
        fontWeight: 400,
        lineHeight: '24px',
        letterSpacing: '0.5px',
    },
    bodyMedium: {
        fontFamily: fontFamilies.plain,
        fontSize: '14px',
        fontWeight: 400,
        lineHeight: '20px',
        letterSpacing: '0.25px',
    },
    bodySmall: {
        fontFamily: fontFamilies.plain,
        fontSize: '12px',
        fontWeight: 400,
        lineHeight: '16px',
        letterSpacing: '0.4px',
    },

    // Label - For labels and helper text
    labelLarge: {
        fontFamily: fontFamilies.plain,
        fontSize: '14px',
        fontWeight: 500,
        lineHeight: '20px',
        letterSpacing: '0.1px',
    },
    labelMedium: {
        fontFamily: fontFamilies.plain,
        fontSize: '12px',
        fontWeight: 500,
        lineHeight: '16px',
        letterSpacing: '0.5px',
    },
    labelSmall: {
        fontFamily: fontFamilies.plain,
        fontSize: '11px',
        fontWeight: 500,
        lineHeight: '16px',
        letterSpacing: '0.5px',
    },
};

/**
 * Helper to convert TypeScale to Tailwind CSS classes
 */
export function typeScaleToTailwind(scale: TypeScale): Record<string, string> {
    return {
        fontFamily: scale.fontFamily,
        fontSize: scale.fontSize,
        fontWeight: scale.fontWeight.toString(),
        lineHeight: scale.lineHeight,
        letterSpacing: scale.letterSpacing,
    };
}

export default defaultTypographyTokens;
