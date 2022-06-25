// tuple 元组  多种元素的组合
// 数组建议统一类型  元组可以多种类型

// 1数组的弊端
// const info: any[] = ['why', 18, 1.88, true]
// // const infoObj = {
// //   name: "why",
// //   age: 18,
// //   height: 1.88
// // }

// const name = info[0]
// console.log('🚀【name】',name.length);

// 元组的特点
const info: [string, number, number, boolean] = ['why', 18, 1.88, true]
const name = info[0]
console.log('🚀【name】',name.length);

// const age = info[1]
// console.log('🚀【name】',age.length);  //类型“number”上不存在属性“length”




export{}