import { createApp, App } from 'vue'
import rootApp from './App.vue'
import router from './router' //引入路由
import store from './store' // 引入vuex
import { setupStore } from './store'
// import ElementPlus from 'element-plus' //全局引入 elementPlus
// import 'element-plus/dist/index.css' // 引入 elementPlus 样式
// import './service/axios_demo'  //了解axios常规用法
// import commonReq from './service' //引入封装后的请求库

import { registerElementComponent, registerPropertiesToVue } from './global'

import 'normalize.css' //重置默认css
import './assets/css/index.less' //初始化项目css

// console.log('🚀【测试配置】', 'prettier') //测试prettier是否生效
// const testHusky = 'test' //测试husky

const app: App = createApp(rootApp)

// 全局注册部分elementPlus组件
registerElementComponent(app)
// 注册全局属性
registerPropertiesToVue(app)

// 初始化store
setupStore()

// .use(ElementPlus) 全局注册 ElementPlus
app.use(store).use(router).mount('#app')

// 测试axios封装
// commonReq.request({
//   url: '/home/multidata',
//   method: 'GET',
//   headers: {},
//   interceptors: {
//     requestInterceptor: (config) => {
//       console.log('单独请求的config')
//       if (config && config.headers) {
//         // 多一步判断 header 解决对象可能未定义
//         config.headers['token'] = '123'
//       }
//       // config.headers['token'] = '123'
//       return config
//     },
//     responseInterceptor: (res) => {
//       console.log('单独响应的response')
//       return res
//     }
//   }
// })

// interface DataType {
//   data: any
//   returnCode: string
//   success: boolean
// }

// commonReq
//   .get<DataType>({
//     url: '/home/multidata',
//     showLoading: false
//   })
//   .then((res) => {
//     console.log(res.data)
//     console.log(res.returnCode)
//     console.log(res.success)
//   })
