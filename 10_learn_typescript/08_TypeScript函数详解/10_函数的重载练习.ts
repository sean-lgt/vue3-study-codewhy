
// 实现方式一: 联合类型
// function getLength(args: string | any[]) {
//   return args.length
// }

// console.log(getLength("abc"))
// console.log(getLength([123, 321, 123]))

// 实现方式二: 函数的重载
function getLength(args: string): number;
function getLength(args: any[]): number;

function getLength(args: any): number {
  return args.length
}

console.log(getLength("abc"))
console.log(getLength([123, 321, 123]))





export {  }