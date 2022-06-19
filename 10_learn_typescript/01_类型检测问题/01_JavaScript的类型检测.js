// 当前foo函数, 在被其他地方调用时, 没有做任何的参数校验
// 1> 没有对类型进行校验
// 2> 没有对是否传入参数进行校验
function foo(message) {
  if (message) {
    console.log(message.length);
  }
}

foo("Hello World");
foo("你好啊,李银河");

foo(123)

foo()

// 一旦代码报错，后面的内容将不再执行
// 永远执行不到
console.log("渲染界面成千上万行的JavaScript代码需要执行, 去渲染界面")


// 定义变量
let bar = "abc";

bar = 123;

bar.length