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


// VUE2 对数据进行劫持  使用 Object.defineProperty 进行getter和setter 操作
// raw 原始数据
function reactive(raw) {
  Object.keys(raw).forEach(key => {
    const dep = getDep(raw, key)
    let value = raw[key]
    Object.defineProperty(raw, key, {
      //getter 操作
      get() {
        dep.depend() //增加订阅依赖
        return value
      },
      // setter操作
      set(newValue) {
        if (value !== newValue) {
          // 如果发生更改，则通知发生通知给相关的订阅者
          value = newValue
          dep.notify()
        }
      }
    })
  })
  return raw;
}

// TODO:测试代码
const info = reactive({
  counter: 100,
  name: 'why'
})

const foo = reactive({
  height: 1.88
})

// 增加订阅
watchEffect(function() {
  console.log('🚀【effect1】', info.counter * 2, info.name)
})

watchEffect(function() {
  console.log('🚀【effect2】', info.counter * info.counter)
})

watchEffect(function() {
  console.log('🚀【effect3】', info.counter + 10, info.name)
})

watchEffect(function() {
  console.log('🚀【effect4】', foo.height)
})

// info.counter++
// info.name = "why"

foo.height = 2