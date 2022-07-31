export const contentTableConfig = {
  title: '故事列表',
  propList: [
    { prop: 'title', label: '故事标题', minWidth: '120' },
    { prop: 'content', label: '我的故事', minWidth: '500' },
    {
      prop: 'createAt',
      label: '创建时间',
      minWidth: '250',
      slotName: 'createAt'
    }
  ],
  showIndexColumn: true,
  showSelectColumn: false
}
