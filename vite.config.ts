import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://210.106.106.48:9090",
        changeOrigin: true,
        rewrite: (path) => path,
        secure: false,
        ws: true,
      },
    },
  },
});