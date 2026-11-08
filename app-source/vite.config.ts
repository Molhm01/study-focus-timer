import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({
    plugins: [react()],
    base: './',
    build: {
        assetsDir: '',
        assetsInlineLimit: 100000000,
        rollupOptions: {
            output: {
                manualChunks(id) {
                    if (id.includes('/photos/')) { const m = id.match(/\/photos\/(\w+)\./); return m ? 'photo-' + m[1] : undefined; }
                    if (id.includes('/thumbs/')) { return 'thumbs'; }
                    if (id.includes('/scenes-b64/')) { const m = id.match(/\/scenes-b64\/([\w-]+)\.(\w+)\.js/); return m ? (m[2] === 'mp4' ? 'scene-' + m[1] : 'scene-posters') : undefined; }
                },
            },
        },
    },
});
