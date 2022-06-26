// function sum(num1: number, num2: number) {
//   return num1 + num2
// }

function sum(initalNum: number, ...nums: number[]) {
  console.log('initalNum',initalNum)
  let total = initalNum
  for (const num of nums) {
    total += num
  }
  return total
}

console.log(sum(20, 30))
console.log(sum(30, 30, 40))
console.log(sum(40, 30, 40, 50))


export{}