// 确定一个事实， names 是一个数组类型，但是数组中存放的是什么类型的元素呢
// 不好的习惯: 一个数组在 TypeScript 开发中，最好存到的数据类型是固定的（string）
// 类型注解： type annotation

// 第一种方式，不推荐使用，（react jsx 中有冲突）
const names: Array<string> = []

// 第二种方式，推荐使用
const names2: string[] = []


// 在数组中存放不同类型是不好的习惯
// names.push("abc")
// names.push(123)


export{}