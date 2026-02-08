/**
 * Material Design 3 Text Field Component Types
 */

export type TextFieldVariant = 'filled' | 'outlined';
export type TextFieldSize = 'small' | 'medium' | 'large';
export type TextFieldState = 'default' | 'focused' | 'error' | 'disabled';

export interface TextFieldStyles {
    container: string;
    variants: Record<TextFieldVariant, string>;
    sizes: Record<TextFieldSize, string>;
    states: Record<TextFieldState, string>;
    input: string;
    label: string;
    labelFloating: string;
    helperText: string;
    errorText: string;
}

export interface TextFieldOptions {
    variant?: TextFieldVariant;
    size?: TextFieldSize;
    label?: string;
    helperText?: string;
    errorText?: string;
    disabled?: boolean;
    required?: boolean;
    className?: string;
}
