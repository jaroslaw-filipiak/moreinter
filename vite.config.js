const {resolve} = require('path')

export default {
    build: {
        rollupOptions: {
          input: {
            'main': resolve(__dirname, 'index.html'),
          },
          output: {
            entryFileNames: `[name].js`,
            chunkFileNames: `[name].js`,
            assetFileNames: `[name].[ext]`
          }
        }
  }
}