import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Permet d'écouter sur toutes les interfaces (nécessaire pour Docker)
    port: 5173, // Définit le port pour éviter des conflits
    watch: {
      usePolling: true, // Active le polling pour surveiller les changements dans Docker
    },
  },
})
