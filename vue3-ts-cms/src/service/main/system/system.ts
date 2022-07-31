import commonReq from '../../index'
import { IDataType } from '../../types'

// 获取数据
export function getPageListData(url: string, queryInfo: any) {
  return commonReq.post<IDataType>({
    url: url,
    data: queryInfo
  })
}

// 删除数据
// url: /users/id
export function deletePageData(url: string) {
  return commonReq.delete<IDataType>({
    url: url
  })
}

// 新增数据
export function createPageData(url: string, newData: any) {
  return commonReq.post<IDataType>({
    url: url,
    data: newData
  })
}

// 编辑数据
export function editPageData(url: string, editData: any) {
  return commonReq.patch<IDataType>({
    url: url,
    data: editData
  })
}
