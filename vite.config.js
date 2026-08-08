import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {},
  resolve: {},
  base: "/Yummies/", // replace with your repo name
});
