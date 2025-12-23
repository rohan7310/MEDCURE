import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/MEDCURE/", // 👈 repo name EXACT (case-sensitive)
});
