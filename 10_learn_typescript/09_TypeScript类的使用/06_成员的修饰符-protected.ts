
// protected  只能在类的内部 或者 子类 中可以访问到

class Person {
  protected name: string = "123"
}

class Student extends Person {
  getName() {
    return this.name
  }
}

const stu = new Student()
console.log(stu.getName())



export{}