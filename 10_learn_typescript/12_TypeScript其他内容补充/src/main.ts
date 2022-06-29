import { sum } from "./utlis/math";
import axios from 'axios'
// Try `npm i --save-dev @types/lodash` if it exists or add a new declaration (.d.ts) file containing `declare module 'lodash';`
import lodash from 'lodash'

import { time, price } from './utlis/format'
import nhltImage from './img/nhlt.jpg'  //将图片当做模块引入

const message: string = "Hello TypeScript";
console.log(sum(20, 30));
console.log(message);


// 使用第三方库 axios
axios.get("http://123.207.32.32:8000/home/multidata").then(res => {
  console.log(res)
})

// 使用第三方lodash 
console.log(lodash.join(["abc", "cba"]))

console.log(time.format("11111111"))
console.log(price.format(123))


console.log(whyName)
console.log(whyAge)
console.log(whyHeight)

whyFoo()

const p = new Person("why", 18)  //Cannot find name 'Person'.
console.log(p)



export { }