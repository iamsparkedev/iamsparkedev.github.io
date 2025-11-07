import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Update this to match your GitHub repository name
// If your repo is named "username.github.io", use base: '/'
const REPO_NAME = 'personal-site';

export default defineConfig({
  plugins: [react()],
  base: `/${REPO_NAME}/`,
  build: {
    outDir: 'dist',
  },
});

