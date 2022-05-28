// depend on 依赖
class Dep {
  constructor() { //构造器
    // 初始化subscribers 订阅者，数据结构是 Set，成员的值都是唯一的，防止重复
    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set
    // https://es6.ruanyifeng.com/#docs/set-map
    this.subscribers = new Set()

  }

  // 增加订阅
  depend() {
    if (activeEffect) {
      this.subscribers.add(activeEffect)
    }
  }

  //发布、通知订阅者
  notify() {
    this.subscribers.forEach(effect => {
      effect()
    })
  }

}


let activeEffect = null //当前激活事件
// 事件监听
function watchEffect(effect) {
  activeEffect = effect
  effect(); //初始化时立即调用一次
  activeEffect = null //清空
}

// Map({key:value}) key 是一个字符串
// WeakMap(key(对象):value)  key是一个对象，弱引用
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map

const targetMap = new WeakMap()
// 获取依赖
function getDep(target, key) {
  //1.根据对象（target）取出对应的Map对象
  let depsMap = targetMap.get(target)
  if (!depsMap) {
    // 如果为空，则创建
    depsMap = new Map()
    targetMap.set(target, depsMap)
  }

  //2.取出具体的dep对象
  let dep = depsMap.get(key)
  if (!dep) {
    dep = new Dep()
    depsMap.set(key, dep)
  }
  return dep
}


// VUE3 对数据进行劫持  Proxy
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy
function reactive(raw) {
  return new Proxy(raw, {
    get(target, key) {
      const dep = getDep(target, key)
      dep.depend() //订阅
      return target[key]
    },
    set(target, key, newValue) {
      const dep = getDep(target, key)
      target[key] = newValue
      dep.notify() //通知
    }
  })
}

// TODO:测试代码
// const info = reactive({
//   counter: 100,
//   name: 'why'
// })

// // 增加订阅
// watchEffect(function() {
//   console.log('🚀【effect1】', info.counter * 2, info.name)
// })

// info.counter++