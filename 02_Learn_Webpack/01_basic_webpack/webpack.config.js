const path = require('path')


module.exports = {
  entry: './src/index.js', //入口
  output: {
    path: path.resolve(__dirname, './build'), //需要写绝对路径
    filename: 'bundle.js', //输出的文件名
  }
}