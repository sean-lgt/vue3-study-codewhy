// 1.方式一: 手动的切换不同的环境(不推荐)
// const BASE_URL = 'http://lin.org/dev'
// const BASE_NAME = 'lin'

// const BASE_URL = 'http://lin.org/prod'
// const BASE_NAME = 'kobe'

// const BASE_URL = 'http://lin.org/test'
// const BASE_NAME = 'james'

// 2.根据process.env.NODE_ENV区分
// 开发环境: development
// 生成环境: production
// 测试环境: test

// let BASE_URL = ''
// const TIME_OUT = 10000

// if (process.env.NODE_ENV === 'development') {
//   BASE_URL = 'http://123.207.32.32:8000/'
// } else if (process.env.NODE_ENV === 'production') {
//   BASE_URL = 'http://lin.org/prod'
// } else {
//   BASE_URL = 'http://lin.org/test'
// }

// 直接利用环境变量文件
const BASE_URL = process.env.VUE_APP_BASE_URL
const TIME_OUT = 1000

export { BASE_URL, TIME_OUT }
