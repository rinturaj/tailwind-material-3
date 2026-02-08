export interface MenuOptions {
    open?: boolean;
    items: MenuItem[];
}

export interface MenuItem {
    label: string;
    icon?: string;
    trailingIcon?: string;
    disabled?: boolean;
    onClick?: () => void;
}
