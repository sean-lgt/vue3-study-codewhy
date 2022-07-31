import type { AxiosRequestConfig, AxiosResponse } from 'axios'

// 拦截器
export interface ICommonRequstInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig //请求拦截器
  requestInterceptorCatch?: (error: any) => any //请求失败拦截器
  responseInterceptor?: (res: T) => T //响应成功拦截器
  responseInterceptorCatch?: (error: any) => any //响应失败拦截器
}

// 请求参数配置 继承自AxiosRequestConfig
export interface ICommonRequestConfig<T = AxiosResponse>
  extends AxiosRequestConfig {
  interceptors?: ICommonRequstInterceptors<T> //自定义拦截器
  showLoading?: boolean //是否展示loading效果
  headers?: any //对象可能为“未定义”。
}
