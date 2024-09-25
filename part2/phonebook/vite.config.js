import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Debido a que en el modo de desarrollo el frontend está en la dirección localhost:5173,
    // las solicitudes al backend van a la dirección incorrecta localhost: 5173/api/notes.El backend está en localhost: 3001.
    proxy: {
      "/api": {
        target: "http://localhost:3001", //solicitudes realizadas a rutas que comienzan con /api se redirigen al servidor
        changeOrigin: true,
      },
    },
  },
});
