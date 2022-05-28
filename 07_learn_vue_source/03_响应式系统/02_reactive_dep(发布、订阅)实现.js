// depend on 依赖
class Dep {
  constructor() { //构造器
    // 初始化subscribers 订阅者，数据结构是 Set，成员的值都是唯一的，防止重复
    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set
    // https://es6.ruanyifeng.com/#docs/set-map
    this.subscribers = new Set()

  }

  // 增加订阅者
  addEffect(effect) {
    this.subscribers.add(effect)
  }

  //发布、通知订阅者
  notify() {
    this.subscribers.forEach(effect => {
      effect()
    })
  }

}

const dep = new Dep()

const info = { counter: 100 }

function doubleCounter() {
  console.log('🚀【doubleCounter】', info.counter * 2);
}

function powerCounter() {
  console.log('🚀【powerCounter】', info.counter * info.counter);
}

// 进行订阅，当依赖发生变化时收到通知
dep.addEffect(doubleCounter)
dep.addEffect(powerCounter)

// 更改数据，通知订阅者
info.counter++
dep.notify()