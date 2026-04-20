import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const getBase = () => {
  if (process.env.VITE_BASE_PATH) {
    return process.env.VITE_BASE_PATH
  }
  if (process.env.NODE_ENV === 'production') {
    return '/my-portfolio/'
  }
  return '/'
}

export default defineConfig({
  plugins: [react()],
  base: getBase(),
})
