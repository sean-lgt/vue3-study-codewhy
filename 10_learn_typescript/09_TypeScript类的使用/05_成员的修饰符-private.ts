class Person{

  // 私有属性，外界不可访问，私有属性常以 _开头
  private _name: string = ''

  // 常见方式就是 通过方法来访问私有属性
  getName() {
    return this._name
  }

  setName(newName) {
    this._name = newName
  }

}


const p = new Person()
console.log(p.getName())
p.setName("why")



export{}