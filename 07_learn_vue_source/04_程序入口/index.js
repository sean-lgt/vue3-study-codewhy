// 应用程序入口
function createApp(rootComponent) {
  return {
    mount(selector) {
      const container = document.querySelector(selector)
      let isMounted = false; //是否已经挂载
      let oldVNode = null; // 旧的虚拟node
      // 增加监听 事件订阅
      watchEffect(function() {
        if (!isMounted) {
          oldVNode = rootComponent.render()
          mount(oldVNode, container)
          isMounted = true
        } else {
          //已经有了 则需要进行比对
          const newVNode = rootComponent.render()
          patch(oldVNode, newVNode)
          oldVNode = newVNode
        }
      })

    }
  }
}