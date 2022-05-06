const { defineConfig } = require('@vue/cli-service');
const webpack = require('webpack')

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  publicPath:'./',
  chainWebpack: config => {
    config
      .plugin('html')
      .end()
      .plugin('provide')
      .use(webpack.ProvidePlugin, [{
        THREE: 'three'
      }])
      .end()
  }
});

