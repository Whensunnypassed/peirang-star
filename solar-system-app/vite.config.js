import { defineConfig } from 'vite';

// base './' 使构建产物可直接双击打开或以任意子路径部署（GitHub Pages 等）
export default defineConfig({
  base: './',
  build: {
    outDir: 'dist',
    assetsInlineLimit: 0
  }
});
