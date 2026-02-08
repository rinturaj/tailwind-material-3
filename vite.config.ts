import { defineConfig } from 'vite';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'TailwindMaterial3',
            formats: ['es', 'cjs'],
            fileName: (format) => `index.${format === 'es' ? 'js' : 'cjs'}`,
        },
        rollupOptions: {
            // Externalize dependencies that shouldn't be bundled
            external: [
                'tailwindcss',
                'tailwindcss/plugin',
                'lodash',
                'deepmerge',
                'tailwind-material-colors',
            ],
            output: {
                // Provide global variables for UMD build
                globals: {
                    tailwindcss: 'tailwindcss',
                },
                // Preserve directory structure for better tree-shaking
                preserveModules: false,
            },
        },
        outDir: 'dist',
        emptyOutDir: true,
        sourcemap: true,
    },
    plugins: [
        dts({
            include: ['src/**/*'],
            exclude: ['src/**/*.test.ts', 'src/**/*.spec.ts', 'src/_example/**/*'],
            outDir: 'dist/types',
            rollupTypes: true,
        }),
    ],
    resolve: {
        alias: {
            '@': resolve(__dirname, './src'),
        },
    },
});
