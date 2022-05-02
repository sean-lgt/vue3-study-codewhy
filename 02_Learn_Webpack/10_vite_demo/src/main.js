import _ from 'lodash-es'
// import _ from '../node_modules/lodash-es/lodash.default.js'
import { createApp } from 'vue'

// import { sum } from './js/math.js'
import { sum } from './js/math'
import tsSum from './ts/test.ts'
import App from './vue/App.vue'
import './css/style.css'
import './css/test.less'

console.log('hello,vite')
console.log(sum(10, 20))
console.log(tsSum(20, 20))

// 测试lodash模块
console.log(_.join(['abc', 'cba'], '-'))

const titleEl = document.createElement('div')
titleEl.className = 'title'
titleEl.innerHTML = 'test less'
document.body.appendChild(titleEl)

// vue
createApp(App).mount('#app')