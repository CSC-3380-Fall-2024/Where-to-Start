import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
//  this path comes from path type nodes that had been installed
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  /*  
      Resolve: {}
      Anytime we have an '@' it will replace 
      it with the current directory folder and 
      then add "src" to it
  */
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src")}]
  }
})
