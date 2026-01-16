import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import statamic from '@statamic/cms/vite-plugin'; 
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    plugins: [
        tailwindcss(),
        statamic(),
        laravel({
            hotFile: 'vite.hot',
            publicDirectory: 'dist',
            input: [
                'resources/js/addon.js',
                'resources/css/addon.css',
            ],
        }),
    ],
});