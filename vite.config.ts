import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// For custom domains (like iamsparke.xyz), use base: '/'
// For GitHub Pages subdomain (username.github.io/repo-name), use base: '/repo-name/'
export default defineConfig({
  plugins: [react()],
  base: '/', // Changed to '/' for custom domain deployment
  build: {
    outDir: 'dist',
  },
});

