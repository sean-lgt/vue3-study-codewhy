import commonReq from '../../index'
import { IDataType } from '../../types'

enum DashboardAPI {
  categoryGoodsCount = '/goods/category/count',
  categoryGoodsSale = '/goods/category/sale',
  categoryGoodsFavor = '/goods/category/favor',
  addressGoodsSale = '/goods/address/sale',
  amountList = '/goods/amount/list'
}

export function getCategoryGoodsCount() {
  return commonReq.get<IDataType>({
    url: DashboardAPI.categoryGoodsCount
  })
}

export function getCategoryGoodsSale() {
  return commonReq.get<IDataType>({
    url: DashboardAPI.categoryGoodsSale
  })
}

export function getCategoryGoodsFavor() {
  return commonReq.get<IDataType>({
    url: DashboardAPI.categoryGoodsFavor
  })
}

export function getAddressGoodsSale() {
  return commonReq.get<IDataType>({
    url: DashboardAPI.addressGoodsSale
  })
}

export function getAmountList() {
  return commonReq.get<IDataType>({
    url: DashboardAPI.amountList
  })
}
