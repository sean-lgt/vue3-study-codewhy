interface IPerson {
  name: string,
  age: number,
  height:number
}

// const info = {
//   name: "why",
//   age: 18,
//   height: 1.88,
//   address: "广州市"
// }

// // freshness擦除
// const p: IPerson = info

// console.log(info)
// console.log(p)


function printInfo(person: IPerson) {
  console.log(person)
}

// 代码会报错
// printInfo({
//   name: "why",
//   age: 18,
//   height: 1.88,
//   address: "广州市"
// })

const info = {
  name: "why",
  age: 18,
  height: 1.88,
  address: "广州市"
}

printInfo(info)


export{}