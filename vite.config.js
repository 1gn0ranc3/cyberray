import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GH Pages: сайт живёт по пути /cyberray/ .
// В dev-режиме — по корню, чтобы не мешало локальной работе.
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? '/cyberray/' : '/',
  server: { port: 5173, host: true },
}))
