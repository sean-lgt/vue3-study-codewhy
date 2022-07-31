import { Module } from 'vuex'

import {
  accountLoginRequest,
  requestUserInfoById,
  requestUserMenusByRoleId
} from '@/service/login/login'

import localCache from '@/utils/cache'
import { LOCAL_CACHE_KEY, ELEMENT_PLUS_ICON_COMPONENTS } from '@/utils/const'

import { mapMenusToRoutes, mapMenusToPermissions } from '@/utils/map-menus'
import router from '@/router'

import { IAccount } from '@/service/login/type'
import { ILoginState } from './types'
import { IRootState } from '../types'

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true, //开启命名空间
  state() {
    return {
      token: '',
      userInfo: [],
      userMenus: [],
      permissions: []
    }
  },
  getters: {},
  mutations: {
    changeToken(state, token: string) {
      state.token = token
    },
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo
    },
    changeUserMenus(state, userMenus: any) {
      state.userMenus = userMenus
      // 动态注册路由
      // userMenus => routes
      const routes = mapMenusToRoutes(userMenus)
      // 将routes => router.main.children
      routes.forEach((route) => {
        // Tips: 注意  路由定义需要填写name，这里在指定的name 中添加路由
        router.addRoute('main', route)
      })
      console.log('🚀【所有路由】', router)
      // 获取用户按钮的权限
      const permissions = mapMenusToPermissions(userMenus)
      state.permissions = permissions
    }
  },
  actions: {
    // 账号登录操作
    async accountLoginAction({ commit, dispatch }, payload: IAccount) {
      // 实现登录逻辑
      const loginResult = await accountLoginRequest(payload)
      const { id, token } = loginResult.data
      commit('changeToken', token)
      localCache.setCache(LOCAL_CACHE_KEY.TOKEN, token)

      // 发送初始化的请求(完整的role/department)  此时确保已经获取了token
      dispatch('getInitialDataAction', null, { root: true })

      // 请求用户信息
      const userInfoResult = await requestUserInfoById(id)
      const userInfo = userInfoResult.data
      commit('changeUserInfo', userInfo)
      localCache.setCache(LOCAL_CACHE_KEY.USER_INFO, userInfo)

      // 请求用户菜单
      const userMenusResult = await requestUserMenusByRoleId(userInfo.role.id)
      const userMenus = userMenusResult.data
      // 做一层映射 icon -> ele-icon vue3中不再通过类名
      userMenus.forEach((element: any) => {
        element['ele_icon'] = ELEMENT_PLUS_ICON_COMPONENTS[element.icon]
      })
      commit('changeUserMenus', userMenus)
      localCache.setCache(LOCAL_CACHE_KEY.USRE_MENUS, userMenus)

      // 操作成功后跳转到首页
      router.push('/main')
    },
    // 保持登录态，对vuex登录数据进行持久化处理
    loadLocalLogin({ commit, dispatch }) {
      const token = localCache.getCache(LOCAL_CACHE_KEY.TOKEN)
      if (token) {
        commit('changeToken', token)
        // 发送初始化的请求(完整的role/department)
        dispatch('getInitialDataAction', null, { root: true })
      }
      const userInfo = localCache.getCache(LOCAL_CACHE_KEY.USER_INFO)
      if (userInfo) {
        commit('changeUserInfo', userInfo)
      }
      const userMenus = localCache.getCache(LOCAL_CACHE_KEY.USRE_MENUS)
      if (userMenus) {
        commit('changeUserMenus', userMenus)
      }
    }
  }
}

export default loginModule
