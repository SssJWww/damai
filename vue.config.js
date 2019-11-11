module.exports = {
  // options...
  devServer: {
    overlay: {
      warnings: false,
      errors: false
    },
    proxy: {
      '/api': {
        target: 'http://www.91damai.com',
        changeOrigin: true
      }
    }
  }
}
