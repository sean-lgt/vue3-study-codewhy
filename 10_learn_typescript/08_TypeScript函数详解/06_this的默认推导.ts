// this 是可以被推导出来的 info对象（TypeScript 推导出来）

const info = {
  name: 'why',
  eating() {
    console.log(this.name + ' eating')
  }
}

info.eating()


export{}