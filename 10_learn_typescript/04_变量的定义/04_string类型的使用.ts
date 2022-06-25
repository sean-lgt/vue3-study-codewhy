let message1: string = 'hello world'
let message2: string = 'Hello World'

console.log('🚀【message1】',message1);
console.log('🚀【message2】', message2);

// 个人习惯：默认情况下，如果可以推导出对象的标识符的类型时，一般可以不加类型注解
const name = 'why'
const age = 18
const height = 1.88

let message3 = `name:${name},age:${age},height:${height}`

console.log('🚀【message3】',message3);

export{}