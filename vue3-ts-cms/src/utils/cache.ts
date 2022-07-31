/*
 *  封装window.loaclStorage 相关操作
 */
class LocalCache {
  /**
   * @description: 存缓存操作
   * @return {*}
   * @param {string} key 缓存中的key值
   * @param {any} value 缓存中的value值，任意类型，需要转成字符串存储
   */
  setCache(key: string, value: any) {
    window.localStorage.setItem(key, JSON.stringify(value))
  }
  /**
   * @description: 获取缓存信息
   * @return {*}  返回相关信息
   * @param {string} key 缓存中的key值
   */
  getCache(key: string) {
    const value = window.localStorage.getItem(key)
    if (value) {
      return JSON.parse(value)
    }
    return null
  }
  /**
   * @description: 删除缓存信息
   * @return {*}
   * @param {string} key 缓存中的key值
   */
  deleteCache(key: string) {
    window.localStorage.removeItem(key)
  }
  /**
   * @description: 清空所有缓存
   * @return {*}
   */
  clearCache() {
    window.localStorage.clear()
  }
}

export default new LocalCache()
