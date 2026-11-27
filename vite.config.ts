import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// The OpenNow introduction site is a self-contained module. If it is later
// mounted under a sub-path of the main BetterGo application (for example
// https://bettergomarinduque.com/opennow), set `base` here accordingly.
// For the planned subdomain deployment (https://opennow.bettergomarinduque.com)
// the default root base is correct.
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: 3002,
    allowedHosts: [".style.dev"],
  },
  preview: {
    host: "0.0.0.0",
  },
  build: {
    outDir: "dist",
    target: "es2020",
  },
});
