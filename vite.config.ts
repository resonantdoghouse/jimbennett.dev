import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

import tailwindcss from '@tailwindcss/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: './',
  build: {
    outDir: 'dist',
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          three: ['three'],
          fiber: ['@react-three/fiber'],
          drei: ['@react-three/drei'],

        },
      },
    },
  },
});