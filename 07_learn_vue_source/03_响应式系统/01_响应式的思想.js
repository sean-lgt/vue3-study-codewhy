const info = { counter: 100 }

function doubleCounter() {
  console.log('🚀【doubleCounter】', info.counter * 2);
}

doubleCounter()


// 一旦依赖项发生改变，需要重新手动调用函数进行计算
info.counter++
doubleCounter()