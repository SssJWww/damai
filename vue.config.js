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
        // Axios.post("/api/goods/doyen","page_no: 1").then(res =>{
        // console.log(res.data)}))
      }
    }
  }
}
