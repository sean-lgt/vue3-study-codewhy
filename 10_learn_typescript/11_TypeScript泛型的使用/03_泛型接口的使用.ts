interface IPerson<T1 = string, T2 = number> {
  name: T1
  age: T2
}

const p: IPerson = {
  name: "why",
  age: 18
}

const p1: IPerson<number, String> = {
  name: 1,
  age:''
}


export{}