export const contentTableConfig = {
  title: '类别列表',
  newBtnTitle: '新建类别',
  propList: [
    { prop: 'name', label: '角色名称', minWidth: '120' },
    {
      prop: 'createAt',
      label: '创建时间',
      minWidth: '220',
      slotName: 'createAt'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      minWidth: '220',
      slotName: 'updateAt'
    },
    { label: '操作', minWidth: '140', slotName: 'handler' }
  ],
  showIndexColumn: true,
  showSelectColumn: true
}
