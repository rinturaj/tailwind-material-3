export interface NavigationDrawerOptions {
    open?: boolean;
    standard?: boolean;
    modal?: boolean;
}

export interface NavigationItem {
    label: string;
    icon?: string;
    active?: boolean;
    badge?: string;
}
