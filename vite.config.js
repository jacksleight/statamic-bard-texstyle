import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue2 from '@vitejs/plugin-vue2';

export default defineConfig({
    plugins: [
        laravel({
            hotFile: 'vite.hot',
            publicDirectory: 'dist',
            input: [
                'resources/js/addon.js',
            ],
        }),
        vue2(),
    ],
});