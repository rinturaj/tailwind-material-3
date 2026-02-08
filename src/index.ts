/**
 * Tailwind Material 3 - Main Entry Point
 * A production-ready Material Design 3 component library for Tailwind CSS
 */

// Export design tokens
export * from './tokens';

// Export theme utilities
export * from './theme';

// Export Tailwind configuration
export { createMaterialConfig, createMaterialConfig as default } from './tailwind.config';

// Export component plugins
export {
    buttonPlugin,
    cardPlugin,
    textFieldPlugin,
    dialogPlugin,
    snackbarPlugin,
    checkboxPlugin,
    radioPlugin,
    switchPlugin,
    tabsPlugin,
    navigationDrawerPlugin,
    appBarPlugin,
    listPlugin,
    chipPlugin,
    badgePlugin,
    progressPlugin,
    tooltipPlugin,
    bottomSheetPlugin,
    menuPlugin
} from './components';
export * from './components/button/types';
export * from './components/button/styles';
export * from './components/card/types';
export * from './components/card/styles';
export * from './components/text-field/types';
export * from './components/text-field/styles';
export * from './components/dialog/types';
export * from './components/snackbar/types';
export * from './components/checkbox/types';
export * from './components/radio/types';
export * from './components/switch/types';
export * from './components/tabs/types';
export * from './components/navigation-drawer/types';
export * from './components/app-bar/types';
export * from './components/list/types';
export * from './components/chip/types';
export * from './components/badge/types';
export * from './components/progress/types';
export * from './components/tooltip/types';
export * from './components/bottom-sheet/types';
export * from './components/menu/types';
