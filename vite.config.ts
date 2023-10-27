import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
      Components: `${path.resolve(__dirname, './src/Components/')}`,
      Image: `${path.resolve(__dirname, './src/Image/')}`,
      Common: `${path.resolve(__dirname, './src/Common/')}`,
    },
  },
});
