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
export { buttonPlugin, cardPlugin, textFieldPlugin } from './components';
export * from './components/button/types';
export * from './components/button/styles';
export * from './components/card/types';
export * from './components/card/styles';
export * from './components/text-field/types';
export * from './components/text-field/styles';
