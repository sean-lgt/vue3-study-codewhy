class Person{
  name: string 
  age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  eating() {
    console.log(this.name + ' eating')
  }
  
}

const p = new Person('why', 18)
console.log('🚀【name】', p.name);
console.log('🚀【age】', p.age);
p.eating()




export{}