/**
 * Material Design 3 Button Component Types
 */

export type ButtonVariant = 'filled' | 'outlined' | 'text' | 'elevated' | 'tonal';
export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonColor = 'primary' | 'secondary' | 'tertiary' | 'error';
export type FABSize = 'small' | 'medium' | 'large';
export type FABVariant = 'surface' | 'primary' | 'secondary' | 'tertiary';

export interface ButtonStyles {
    base: string;
    variants: Record<ButtonVariant, string>;
    colors: Record<ButtonColor, Record<ButtonVariant, string>>;
    sizes: Record<ButtonSize, string>;
    states: {
        hover: string;
        focus: string;
        active: string;
        disabled: string;
    };
}

export interface FABStyles {
    base: string;
    sizes: Record<FABSize, string>;
    variants: Record<FABVariant, string>;
}

export interface IconButtonStyles {
    base: string;
    variants: {
        standard: string;
        filled: string;
        tonal: string;
        outlined: string;
    };
}
