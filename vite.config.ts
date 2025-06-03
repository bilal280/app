import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import { appPlugins } from "@getapp/vite-plugins";

// https://vitejs.dev/config/
export default defineConfig({
  base: '/app/', 
  plugins: [react()], 
  server: {
    allowedHosts: true,
  },
  build: {
    chunkSizeWarningLimit: 5000,
  },
});
