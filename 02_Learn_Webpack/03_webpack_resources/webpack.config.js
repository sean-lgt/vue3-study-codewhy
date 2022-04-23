const path = require('path')


module.exports = {
  entry: './src/index.js', //入口
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "bundle.js",
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
      }
    ]
  },
}