import { createApp } from 'vue'
// import App from './01_组件的拆分和嵌套/App.vue'
// import App from './02_组件的css作用域/App.vue'
// import App from './03_父组件传递给子组件/App.vue'
// import App from './04_子组件传递父组件/App.vue'
// import App from './05_商品页面的切换/App.vue'
// import App from './06_Provide和Inject使用/App.vue'
// import App from './07_事件总线mitt的使用/App.vue'
// import App from './08_插槽的基本使用/App.vue'
// import App from './09_具名插槽的使用/App.vue'
// import App from './10_作用域插槽的使用/App.vue'
// import App from './11_动态组件的使用/App.vue'
// import App from './12_组件缓存keep-alive/App.vue'
// import App from './13_异步组件/App.vue'
// import App from './14_引用元素和组件/App.vue'
// import App from './15_组件生命周期/App.vue'
import App from './16_组件v-model/App.vue'

// 普通用法  会打包到app.js
// import { sum } from './13_异步组件/utils/math'
// console.log('🚀【sum】', sum(20, 10))


// 通过 import 函数导入的模块，后续 webpack 对其进行打包的时候就会进行分包操作
import('./13_异步组件/utils/math').then((res) => {
  console.log('🚀【sum】', res.sum(20, 10))
})




createApp(App).mount('#app')