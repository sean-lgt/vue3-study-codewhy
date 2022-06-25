// const info = {
//   name: "why",
//   age: 18
// }

// info.name = "kobe"

// 


type Method = 'GET' | 'POST'

function request(url: string, method: Method) {
  
}

type Request = {
  url: string,
  method:Method
}

const options = {
  url: 'https://www.baidu.com',
  method:'POST'
} as const

request(options.url,options.method)




export{}