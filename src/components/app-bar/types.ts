export interface TopAppBarOptions {
    title: string;
    variant?: 'small' | 'medium' | 'large' | 'center-aligned';
    scrollBehavior?: 'pinned' | 'hide' | 'shrink';
}

export interface BottomAppBarOptions {
    fab?: boolean;
}
