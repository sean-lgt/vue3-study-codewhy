const { merge } = require('webpack-merge');

const commonConfig = require('./webpack.comm.config');

module.exports = merge(commonConfig, {
  mode: "development",
  devtool: "source-map",
  devServer: {
    contentBase: "./public",
    hot: true,
    // host: "0.0.0.0",
    port: 5050,
    open: true,
    // compress: true,
    proxy: {
      "/api": {
        target: "http://127.0.0.1:3002", // 代理到目标的地址,即会代理到 http://127.0.0.1:3002/api
        pathRewrite: {
          "^/api": "" //重写路径，删除 /api
        },
        secure: false, //默认为true,不接收转发到https上，设为 false 则支持
        changeOrigin: true, //更新代理后的请求的header中的host地址
        ws: true, //是否代理websockets
        context: ['/auth', '/api'], // 将多个路径代理到同一个 target 下
      }
    }
  },
})