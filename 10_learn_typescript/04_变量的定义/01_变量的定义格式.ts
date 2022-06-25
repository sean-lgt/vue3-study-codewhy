// 1. 类型注解
// 2. var/let/const
// 3. string 和 String 的区别
// 4. 类型推导

// 注解
var name: string = 'why'
console.log('🚀【name】', name);


// 定义变量形式
let age: number = 18
const height: number = 1.88

// string 和 String 的区别
// string 是 TypeScript 中的字符串类型
// String 是 JavaScript 的字符串包装类的类型
const message: string = 'Hello World'


// 类型推导
// 默认情况下进行赋值时，会将赋值的值的类型，作为签名标识符的类型，这个过程称之为 类型推导/推断
let foo = 'foo'
// foo = 123



// 文件夹有同名变量
// 使用 export 转成模块

export{}