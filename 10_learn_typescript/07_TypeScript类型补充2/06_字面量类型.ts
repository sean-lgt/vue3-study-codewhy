// Hello world 也是可以作为 类型的，叫做 字面量类型

const message: 'hello world' = 'hello world'

let num: 123 = 123
// num =321  //此时会报错，num 只能为 123 类型

// 注意
// 字面量类型的意义, 就是必须结合联合类型
type Alignment = 'left' | 'right' | 'center'

let align: Alignment = 'left'
align = 'right'
align = 'center'




export{}