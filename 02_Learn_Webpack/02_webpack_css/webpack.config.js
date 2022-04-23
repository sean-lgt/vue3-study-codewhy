const path = require('path')


module.exports = {
  entry: './src/index.js', //入口
  output: {
    path: path.resolve(__dirname, './build'), //需要写绝对路径
    filename: 'bundle.js', //输出的文件名
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
    }]
  }
}