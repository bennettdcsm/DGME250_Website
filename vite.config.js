import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// import tailwindConfig from "./tailwind.config.js";
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
});