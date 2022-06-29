import { type } from "os"

// 一种组合类型的方式 联合类型
type WhyType = number | string
type Direction = 'left' | 'right' | 'center'

// 另外一种组合类型的方式 交叉类型
type WType = number & string

interface ISwim{
  swimming:()=>void
}

interface IFly{
  flying:()=>void
}

type MyType1 = ISwim | IFly
type MyType2 = ISwim & IFly

const obj1: MyType1 = {
  flying() {
    
  }
}

const obj2: MyType2 = {
  swimming() {
    
  },
  flying() {
    
  }
}

export { }