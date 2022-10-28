const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    proxy: {
      '/serve1': {
        target: 'http://localhost:5000',
        pathRewrite: {'/serve1':''},
        ws: true,
        changeOrigin: true
      },
      '/serve2': {
        target: 'http://localhost:5001',
        pathRewrite: {'^/serve2':''},
        ws: true,
        changeOrigin: true
      },
      // '/foo': {
      //   target: '<other_url>'
      // }
    }
  }
});
