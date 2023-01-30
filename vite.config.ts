import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        watch: {
            usePolling: true,
        },
        strictPort: true,
        hmr: { clientPort: 9001 },
        host: true,
        port: 9000,
    },
})
