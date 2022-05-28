// 创建虚拟节点  VNode
const h = (tag, props, children) => {
  // vnode => javascript对象 => {}
  return {
    tag,
    props,
    children
  }
}

// 挂载 VNode
const mount = (vnode, container) => {
  // vnode -> element

  // 1.创建出真实的原生，并且在 vnode 上保留 el
  const el = vnode.el = document.createElement(vnode.tag)

  // 2.处理props
  if (vnode.props) {
    for (const key in vnode.props) {
      const value = vnode.props[key]
      if (key.startsWith('on')) {
        //对事件监听的判断
        el.addEventListener(key.slice(2).toLowerCase(), value)
      } else {
        el.setAttribute(key, value)
      }
    }
  }

  // 3.处理 children 利用递归
  if (vnode.children) {
    if (typeof vnode.children === 'string') {
      el.textContent = vnode.children
    } else {
      vnode.children.forEach(item => {
        mount(item, el)
      });
    }
  }

  // 4.将el挂载到container上
  container.appendChild(el)

}

// 比对 VNode
const patch = (n1, n2) => {
  if (n1.tag !== n2.tag) {
    // 如果标签名都不一致，直接删除原生元素，重新挂载 VNode
    const n1ElParent = n1.el.parentElement
    n1ElParent.removeChild(n1.el) //删除父元素的子元素
    mount(n2, n1ElParent)
  } else {
    // 1. 取出 element 对象，并且保存在n2中
    const el = n2.el = n1.el

    // 2. 处理props
    const oldProps = n1.props || {} // 旧的prop
    const newProps = n2.props || {} // 新的props
    // 2.1 获取所有的 newProps 添加到 el 上
    for (const key in newProps) {
      const oldValue = oldProps[key]
      const newValue = newProps[key]
      //如果不一致才进行更新
      if (newValue !== oldValue) {
        if (key.startsWith('on')) { //对事件监听进行判断
          el.addEventListener(key.slice(2).toLowerCase(), newValue)
        } else {
          el.setAttribute(key, newValue)
        }
      }
    }
    // 2.2 删除旧的props
    for (const key in oldProps) {
      if (key.startsWith('on')) { // 对旧的事件监听进行卸载
        const value = oldProps[key]
        el.removeEventListener(key.slice(2).toLowerCase(), value) //卸载事件监听
      }
      if (!(key in newProps)) {
        // 如果新的props中没有旧的props，则删除旧的属性
        el.removeAttribute(key)
      }
    }

    // 3.处理children
    const oldChildren = n1.children || {}
    const newChildren = n2.children || {}
    // 3.1 情况一：newChildren 本身是一个string,则直接比对替换
    if (typeof newChildren === 'string') {
      // 考虑边界情况
      if (typeof oldChildren === 'string') {
        // 如果oldchildren 字符串
        if (newChildren !== oldChildren) {
          el.textContent = newChildren
        }
      } else {
        el.innerHTML = newChildren
      }
    } else {
      // 3.2 情况二 newChildren本身是一个数组
      if (typeof oldChildren === 'string') {
        el.innerHTML = "" //清空旧内容
        // 遍历、挂载
        newChildren.forEach(item => {
          mount(item, el);
        })
      } else {
        // diff 算法比对
        // oldChildren: [v1, v2, v3, v8, v9]
        // newChildren: [v1, v5, v6]
        // 1.前面有相同节点的原生进行patch操作
        const commonLength = Math.min(oldChildren.length, newChildren.length);
        for (let i = 0; i < commonLength; i++) {
          patch(oldChildren[i], newChildren[i]);
        }

        // 2.newChildren.length > oldChildren.length
        if (newChildren.length > oldChildren.length) {
          newChildren.slice(oldChildren.length).forEach(item => {
            mount(item, el);
          })
        }

        // 3.newChildren.length < oldChildren.length
        if (newChildren.length < oldChildren.length) {
          oldChildren.slice(newChildren.length).forEach(item => {
            el.removeChild(item.el);
          })
        }
      }
    }
  }
}