// message ? -> undefined | string
function printMessageLength(message?: string) {
  // 常规做法是使用 if 判断是否有值
  if (message) {
    console.log('🚀【message】',message.length);
  }

  // Vue3源码  使用非空类型断言
  console.log(message!.length)

}

printMessageLength('')
printMessageLength('Hello World')

export{}