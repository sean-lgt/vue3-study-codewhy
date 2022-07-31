import commonReq from '../index'

import { IAccount, IDataType, ILoginResult } from './type'

enum loginAPI {
  AccountLogin = '/login', //登录
  LoginUserInfo = '/users/', //登录的用户信息 /users/1
  UserMenus = '/role/' // 用户菜单 role/1/menu
}

/**
 * @description: 用户账号登录
 * @return {*} 返回登录信息
 * @param {IAccount} account 需要传的参数 name，password
 */
export const accountLoginRequest = (account: IAccount) => {
  return commonReq.post<IDataType<ILoginResult>>({
    url: loginAPI.AccountLogin,
    data: account
  })
}

/**
 * @description: 获取登录的用户信息
 * @return {*}
 * @param {number} id 用户id
 */
export const requestUserInfoById = (id: number) => {
  return commonReq.get<IDataType>({
    url: loginAPI.LoginUserInfo + id,
    showLoading: false
  })
}

/**
 * @description: 获取用户角色菜单
 * @return {*}
 * @param {number} id 角色id
 */
export const requestUserMenusByRoleId = (id: number) => {
  return commonReq.get<IDataType>({
    url: loginAPI.UserMenus + id + '/menu',
    showLoading: false
  })
}
