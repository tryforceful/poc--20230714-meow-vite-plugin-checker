import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import checker from 'vite-plugin-checker'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(), 
    
    // Comment me out to disable the error
    checker({
      stylelint: {
        lintCommand: 'stylelint ./src/style.css',
      },
    })

  ],
})
