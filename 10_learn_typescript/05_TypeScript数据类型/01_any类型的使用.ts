// 当进行一些类型断言 as any
// 在不想给某些 JavaScript 添加具体的数据类型时（原生的JavaScript 代码是一样的）

let message: any = 'hello world'

// any 可以赋值任意类型的值，比较危险，但有一定的存在价值

message = 123
message = true
message = {

}

// message()
// message.split(" ")

console.log(message)
const arr: any[] = []

export{}