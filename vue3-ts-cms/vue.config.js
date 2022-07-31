// const path = require('path')

// 按需引入 elementPlus 插件配置
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

module.exports = {
  // 在node的环境下执行 所以需要 CommonJS
  outputDir: './dist',
  publicPath: './',
  // 本地环境配置跨域
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://152.136.185.210:5000', //代理地址
        pathRewrite: {
          //重新路径
          '^/api': ''
        },
        changeOrigin: true
      }
    }
  },
  // 配置方式一
  configureWebpack: {
    resolve: {
      alias: {
        views: '@/views'
      }
    },
    // 配置 plugins 按需引入elementPlus
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      })
    ]
  }
  // 配置方式二
  // configureWebpack: (config) => {
  //   config.resolve.alias = {
  //     '@': path.resolve(__dirname, 'src'),
  //     views: '@/views'
  //   }
  // },
  // 配置方式三
  // chainWebpack: (config) => {
  //   config.resolve.alias
  //     .set('@', path.resolve(__dirname, 'src'))
  //     .set('views', '@/views')
  // },
}
