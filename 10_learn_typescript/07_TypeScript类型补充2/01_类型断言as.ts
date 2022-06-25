// <img id="why">

// 1.类型断言  as
const el = document.getElementById('why') as HTMLImageElement
el.src = 'url地址'  // 未断言会报错  类型“HTMLElement”上不存在属性“src”

// 2.另外案例 Person是Student的父类
class Person{

}

class Student extends Person{
  studying() {
    console.log('🚀【studying】',);
  }
}

function sayHello(p: Person) {
  // 由于 student 继承自 Person
  (p as Student).studying()
}

const stu = new Student()
sayHello(stu)

// 3.了解  as any/unknow，不推荐这么做
const message = 'Hello World'
const num:number = (message as unknown) as number




export{}