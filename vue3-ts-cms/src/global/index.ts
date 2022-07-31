import { App } from 'vue'
import registerElement from './register-element'
import registerProperties from './register-properties'

/**
 * @description: 全局注册elementPlus 部分组件
 * @return {*}
 * @param {App} app
 */
export function registerElementComponent(app: App): void {
  registerElement(app)
}

export function registerPropertiesToVue(app: App): void {
  registerProperties(app)
}
