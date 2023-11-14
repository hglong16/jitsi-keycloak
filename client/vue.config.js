module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target: 'https://auth.suncat.io',
        changeOrigin: true,
        logLevel: 'debug'
      }
    }
  },
  transpileDependencies: [
    "vuetify"
  ]
};
