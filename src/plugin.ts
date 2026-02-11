/**
 * Tailwind Material 3 Plugin
 * A Tailwind CSS plugin that adds Material Design 3 design tokens and components.
 */

import plugin from 'tailwindcss/plugin';
import { createMaterialConfig } from './tailwind.config';

// Import all component plugins
import {
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
    menuPlugin,
} from './components';

/**
 * The main Tailwind Material 3 plugin.
 *
 * Usage:
 * ```js
 * // tailwind.config.js
 * import { tailwindMaterial3 } from 'tailwind-material-3';
 *
 * export default {
 *   plugins: [
 *     tailwindMaterial3
 *   ]
 * }
 * ```
 */
export const tailwindMaterial3: ReturnType<typeof plugin> = plugin(
    // 1. Register components
    // We can re-use the component plugins' handler functions by calling them
    // with the plugin API. However, since the plugins are already created with `plugin()`,
    // we can just include them in the `plugins` array of the configuration we return.
    // BUT, `plugin()` expects a handler function.
    // So we need to create a new plugin that:
    // - Adds the base styles and components
    // - Extends the theme
    function () {
        // This function body is for adding base styles, components, or utilities directly.
        // Since our component plugins already do this, we rely on the `config` hook below.
    },
    // 2. Extend configuration (theme modules and plugins)
    {
        theme: createMaterialConfig().theme, // Extract theme from our config helper
        plugins: [
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
            menuPlugin,
        ],
    }
);
