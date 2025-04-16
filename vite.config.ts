import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/GithubRepoExplorer/', // 👈 This must match your repo name exactly
})
