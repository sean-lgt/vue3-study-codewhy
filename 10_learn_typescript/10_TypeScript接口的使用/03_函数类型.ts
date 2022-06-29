// type CalcFn = (n1:number,n2:number) => number
// 可调用的接口
interface ICalcFn {
  (n1:number,n2:number):number
}

function calc(num1: number, num2: number, calcFn: ICalcFn) {
  return calcFn(num1,num2)
}

const add: ICalcFn = (num1, num2) => {
  return num1+num2
}

const test = calc(20,30,add)
console.log('🚀【test】',test);

export{}