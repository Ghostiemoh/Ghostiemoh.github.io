import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // required for a username.github.io site
  server: {
    // honour a PORT handed in by tooling; fall back to Vite's default
    port: Number(process.env.PORT) || 5173
  },
  test: {
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}']
  }
});
