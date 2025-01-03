import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // '0.0.0.0' olarak da yazabilirsiniz
    port: 3000  // İsteğe bağlı: port numarasını belirleyebilirsiniz
  }
})
