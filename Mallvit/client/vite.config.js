import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    base: '/',  // This should usually be '/'
    plugins: [react()]
  });
  
