import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import { cloudflare } from "@cloudflare/vite-plugin";

const getBase = () => {
  if (process.env.VITE_BASE_PATH) {
    return process.env.VITE_BASE_PATH
  }
  if (process.env.NODE_ENV === 'production') {
    // GitHub Pages: 仓库有前缀路径，部署在 /my-portfolio/
    // 构建命令: npm run build
    return '/my-portfolio/'
  }
  return '/'
}

// 部署说明:
// - GitHub Pages: 直接 npm run build（自动使用 /my-portfolio/）
// - EdgeOne Pages: VITE_BASE_PATH=/ npm run build（覆盖为根路径 /）

export default defineConfig({
  plugins: [react(), cloudflare()],
  base: getBase(),
})