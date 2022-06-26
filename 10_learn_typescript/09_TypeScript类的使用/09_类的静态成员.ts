// class Person {
//   name: string = ""
//   age: number = 12
// }

// const p = new Person()
// p.name = "123"


class Student {
  static time: string = "20:00"

  static attendClass() {
    console.log("去学习~")
  }
}

// 静态成员  不需要通过 new 实例去获取，可以直接调用

console.log(Student.time)
Student.attendClass()




export{}