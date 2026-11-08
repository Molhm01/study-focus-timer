import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({
    plugins: [react()],
    base: './',
    publicDir: '../scenes',
    build: {
        copyPublicDir: false,
        assetsDir: '',
        assetsInlineLimit: 100000000,
        rollupOptions: {
            output: {
                manualChunks(id) {
                    if (id.includes('/photos/')) { const m = id.match(/\/photos\/(\w+)\./); return m ? 'photo-' + m[1] : undefined; }
                    if (id.includes('/thumbs/')) { return 'thumbs'; }
                },
            },
        },
    },
});
