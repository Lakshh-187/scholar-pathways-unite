import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from 'fs'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    base:"/",
       build: {
         rollupOptions: {
           output: {
             entryFileNames: `assets/[name]-[hash].js`,
             chunkFileNames: `assets/[name]-[hash].js`,
             assetFileNames: `assets/[name]-[hash].[ext]`,
           },
         },
       },    
       host: "::",    
       port: 8080,
  },
  hmr: {
    clientPort: 443,
    ws: true,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
