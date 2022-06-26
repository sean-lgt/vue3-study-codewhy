// 一般编写顺序
// 必传参数 --> 有默认值的参数 --> 可选参数

function foo(y: number, x: number = 20) {
  console.log('🚀【x】',x);
  console.log('🚀【y】',y);
}

foo(20, 30)
foo(20)




export{}