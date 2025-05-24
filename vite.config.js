import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'
import path from 'path'

export default defineConfig(({ mode }) => {
  const env = dotenv.config({ path: path.resolve(__dirname, '.env') }).parsed;
  return {
    plugins: [react()],
    define: {
      'process.env': JSON.stringify(env || {})
    }
  }
})