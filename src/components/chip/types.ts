export interface ChipOptions {
    label: string;
    variant?: 'assist' | 'filter' | 'input' | 'suggestion';
    elevated?: boolean;
    active?: boolean; // For filter chips
    icon?: string;
}
