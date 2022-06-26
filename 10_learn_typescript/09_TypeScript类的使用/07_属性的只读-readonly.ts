class Person{
  // 1.只读属性是可以再构造器中赋值的，但是赋值之后就不能修改
  // 2.属性本身是不能进行修改的，但是如果它是对象类型的，对象中的属性是可以修改的，因为存的值地址

  readonly name: string
  age?: number
  readonly friend?: Person

  constructor(name: string, friend?: Person) {
    this.name = name
    this.friend = friend
  }

}

const p = new Person("why", new Person("kobe"))
console.log(p.name)
console.log(p.friend)


// 不可以直接修改friend  但是由于 friend是对象类型，可以修改其属性
// p.friend = new Person("james")
if (p.friend) {
  p.friend.age = 30
} 

// p.name = "123"


export{}