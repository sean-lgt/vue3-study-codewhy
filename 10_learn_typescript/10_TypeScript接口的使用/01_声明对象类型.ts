// 通过类型（type）别名来声明对象类型
// type InfoType = { name: string, age: number }

// 另一种方式声明对象类型 接口interface ,一般以 I 开头
// 在其中可以定义可选类型
// 也可以定义只读属性
interface IInfoType{
  readonly name: string,
  age: number,
  friend?: {
    name:string
  }
}

const info: IInfoType = {
  name: "why",
  age: 18,
  friend: {
    name:'kebo'
  }
}

console.log('🚀【】',info.friend?.name);
console.log('🚀【】',info.name);


export{}