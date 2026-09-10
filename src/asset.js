// Разрешает пути к статике в public/ с учётом Vite base.
// В dev BASE_URL === '/', в prod GH Pages === '/cyberray/'.
const BASE = import.meta.env.BASE_URL
export const asset = (path) => BASE + String(path).replace(/^\//, '')
