class Person {
  name: string = "123"
  eating() {

  }
}

const p = new Person()

// 类中有的 需要去实现
const p1: Person = {
  name: "why",
  eating() {

  }
}

function printPerson(p: Person) {
  console.log(p.name)
}

printPerson(new Person())
printPerson({name: "kobe", eating: function() {}})




export {}