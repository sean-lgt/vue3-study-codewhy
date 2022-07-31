import { App } from 'vue'

import { formatUtcString } from '@/utils/date-format'

/**
 * @description: 全局注册自定义vue属性，类似vue2中的全局过滤器
 * @return {*}
 * @param {App} app
 */
export default function registerProperties(app: App) {
  app.config.globalProperties.$filters = {
    foo() {
      console.log('🚀【test-$filters-foo】')
    },
    formatTime(value: string) {
      return formatUtcString(value)
    }
  }
}
