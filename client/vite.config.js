import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Proxy API requests to backend in development
      // In production, Vercel will use environment variable VITE_API_URL
      "/api": {
        target: process.env.VITE_API_URL || "https://skillswapstartup-xu7x.onrender.com",
        changeOrigin: true,
        secure: true,
      },
    },
  },
});