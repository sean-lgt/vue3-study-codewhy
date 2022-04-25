const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin') //引入plugin
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { DefinePlugin } = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  mode: 'development', // 开发阶段 developmen 生产阶段 production
  devtool: 'source-map', //设置source-map,建立映射文件，方便调试错误，开发模式一般开启
  entry: './src/index.js', //入口
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
    })
  ]
}