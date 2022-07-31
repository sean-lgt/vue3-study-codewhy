import { IForm } from '@/base-ui/form'

export const modalConfig: IForm = {
  title: '新建部门',
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '部门名称',
      placeholder: '请输入部门名称'
    },
    {
      field: 'parentId',
      type: 'select',
      label: '上级部门',
      placeholder: '请选择上级部门',
      options: []
    },
    {
      field: 'leader',
      type: 'input',
      label: '领导名称',
      placeholder: '请输入领导名称'
    }
  ],
  colLayout: { span: 24 },
  itemStyle: { padding: 0 }
}
