import { createApp } from 'vue/dist/vue.esm-bundler'
import { sum } from './js/math'
const { priceFormat } = require('./js/format')

import App from './vue/App.vue'

import './js/element'

console.log(sum(20, 30));
console.log(priceFormat());

const message = 'hello word'
const names = ['abc', 'cba', 'nba']

names.forEach(item => console.log(item))


// Vue 代码

// const app = createApp({
//   template: `<h1>我是vue渲染出来的{{title}}</h1>`,
//   data() {
//     return {
//       title: 'Hello world'
//     }
//   }
// })


const app = createApp(App)
app.mount("#app")