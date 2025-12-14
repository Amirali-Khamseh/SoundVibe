import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import path from "path";

export default defineConfig({
  plugins: [svgr(), react()],
  resolve: {
    alias: {
      AppRouter: path.resolve(__dirname, "src/AppRouter.js"),
      App: path.resolve(__dirname, "src/App.js"),
      context: path.resolve(__dirname, "src/context"),
      styles: path.resolve(__dirname, "src/styles"),
      services: path.resolve(__dirname, "src/services"),
      components: path.resolve(__dirname, "src/components"),
      pages: path.resolve(__dirname, "src/pages"),
      utils: path.resolve(__dirname, "src/utils"),
      hooks: path.resolve(__dirname, "src/hooks"),
      assets: path.resolve(__dirname, "src/assets"),
      layout: path.resolve(__dirname, "src/layout"),
      common: path.resolve(__dirname, "src/common"),
      Player: path.resolve(__dirname, "src/Player"),
    },
  },
  esbuild: {
    loader: "jsx",
    include: /src\/.*\.jsx?$/,
    exclude: [],
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        ".js": "jsx",
      },
    },
  },
  server: {
    port: 3000,
    open: true,
    proxy: {
      "/api": {
        target: "https://api.deezer.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  build: {
    outDir: "build",
    sourcemap: false,
  },
});
