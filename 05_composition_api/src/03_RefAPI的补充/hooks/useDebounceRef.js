import { valueToNode } from '@babel/types'
import { track, trigger } from '@vue/reactivity'
import { customRef } from 'vue'

// 自定义ref
export default function(value, delay = 300) {
  let timer = null
  return customRef((track, trigger) => {
    return {
      get() {
        track() //收集依赖
        return value
      },
      set(newValue) {
        // 防抖功能
        clearTimeout(timer)
        timer = setTimeout(() => {
          value = newValue
          trigger() //触发
        }, delay)
      }
    }
  })
}