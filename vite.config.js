import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import statamic from '@statamic/cms/vite-plugin'; 

export default defineConfig({
    plugins: [
        statamic(),
        laravel({
            hotFile: 'vite.hot',
            publicDirectory: 'dist',
            input: [
                'resources/js/addon.js',
            ],
        }),
    ],
});