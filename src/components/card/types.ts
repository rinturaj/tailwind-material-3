/**
 * Material Design 3 Card Component Types
 */

export type CardVariant = 'elevated' | 'filled' | 'outlined';
export type CardPadding = 'none' | 'small' | 'medium' | 'large';

export interface CardStyles {
    base: string;
    variants: Record<CardVariant, string>;
    padding: Record<CardPadding, string>;
    interactive: string;
}

export interface CardOptions {
    variant?: CardVariant;
    padding?: CardPadding;
    interactive?: boolean;
    className?: string;
}
