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
console.log('πγnameγ', p.name);
console.log('πγageγ', p.age);
p.eating()




export{}