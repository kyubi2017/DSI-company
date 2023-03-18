import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        services: resolve(__dirname, "pages/services.html"),
        product: resolve(__dirname, "pages/product.html"),
        technology: resolve(__dirname, "pages/technology.html"),
      },
    },
  },
});
