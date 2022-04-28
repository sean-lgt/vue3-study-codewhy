const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin') //引入plugin
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { DefinePlugin } = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader/dist/index')

module.exports = {
  target: 'web', //为哪一种环境打包
  mode: 'development', // 开发阶段 developmen 生产阶段 production
  devtool: 'source-map', //设置source-map,建立映射文件，方便调试错误，开发模式一般开启
  // watch:true,//开启编译监听
  entry: './src/index.js', //入口
  // 开启开发环境编译-热更新
  devServer: {
    // contentBase: './public', //如果webpack没有加载到的资源，则从该文件夹取
    hot: true, //开启模块热替换
    host: '0.0.0.0', //主机，localhost局域网访问不到
    port: 5050, //端口号
    open: true, //是否自动打开浏览器
    compress: true, //是否开启gzip压缩
    // 开启代理配置
    proxy: {
      "/api": { //当接口url包含api时
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
  resolve: {
    extensions: [".js", ".json", ".mjs", ".vue", ".ts", ".jsx", ".tsx"],
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "js": path.resolve(__dirname, "./src/js")
    }
  },
  output: {
    path: path.resolve(__dirname, './build'), //需要写绝对路径
    filename: 'js/bundle.js', //输出的文件名
  },
  module: {
    rules: [{
        test: /\.css$/, //正则表达式
        // 1、loader的写法-语法糖
        // loader: 'css-loader'
        // 2、完整写法
        use: [
          'style-loader', //注意先后顺序  
          'css-loader',
          'postcss-loader'
          // {
          //   loader: 'postcss-loader',
          //   options: {
          //     postcssOptions: {
          //       plugins: [
          //         require('autoprefixer')
          //       ]
          //     }
          //   }
          // }
        ]
      }, {
        test: /\.less$/, //正则表达式
        use: [
          'style-loader',
          'css-loader',
          'less-loader',
        ]
      },
      // {
      //   test: /\.(jpe?g|png|gif|svg)$/, //正则表达式
      //   use: [{
      //     loader: 'url-loader', //file-loader
      //     options: {
      //       // outputPath: 'img',
      //       name: 'img/[name]_[hash:6].[ext]',
      //       //配置尺寸大小 单位kb
      //       limit: 100 * 1024
      //     }
      //   }, ]
      // }
      {
        // webpack 5 版本 最新语法
        test: /\.(jpe?g|png|gif|svg)$/, //正则表达式
        type: 'asset',
        generator: {
          filename: 'img/[name]_[hash:6][ext]'
        },
        parser: {
          dataUrlCondition: {
            maxSize: 100 * 1024,
          }
        }
      },
      {
        test: /\.(eot|ttf|woff2?)$/,
        type: 'asset/resource',
        generator: {
          filename: 'font/[name]_[hash:6][ext]'
        },
      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            // presets: [
            //   '@babel/preset-env'
            // ]
          }
        },
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(), //自定清除打包路径，避免混淆
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
      title: "test学习",
      hash: true
    }),
    new DefinePlugin({
      BASE_URL: "'./'"
    }),
    new CopyWebpackPlugin({
      patterns: [{
        from: 'public',
        // to: './',
        globOptions: {
          ignore: ['**/index.html']
        }
      }]
    }),
    new VueLoaderPlugin(),
  ]
}