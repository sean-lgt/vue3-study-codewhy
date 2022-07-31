<template>
  <div class="custom-table">
    <!-- 头部插槽 -->
    <div class="header">
      <slot name="header">
        <div class="title">{{ title }}</div>
        <div class="hander">
          <slot name="headerHandler"></slot>
        </div>
      </slot>
    </div>
    <el-table
      :data="listData"
      border
      style="width: 100%"
      @selection-change="handleSelectionChange"
      v-bind="childrenProps"
    >
      <!-- 是否显示选中框 -->
      <el-table-column
        v-if="showSelectColumn"
        type="selection"
        align="center"
        width="60"
      ></el-table-column>
      <!-- 是否显示序号 -->
      <el-table-column
        v-if="showIndexColumn"
        type="index"
        label="序号"
        align="center"
        width="60"
      ></el-table-column>
      <template v-for="propItem in propList" :key="propItem.prop">
        <!-- 绑定属性 -->
        <el-table-column v-bind="propItem" align="center">
          <!-- 使用插槽作用域 并将插槽中的数据暴露出去-->
          <template #default="scope">
            <slot :name="propItem.slotName" :row="scope.row">
              {{ scope.row[propItem.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <!-- 底部插槽 -->
    <div class="footer" v-if="showFooter">
      <slot name="footer">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="page.currentPage"
          :page-size="page.pageSize"
          :page-sizes="[10, 20, 30]"
          layout="total, sizes, prev, pager, next, jumper"
          :total="listCount"
        >
        </el-pagination>
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    // 底部插槽标题
    title: {
      type: String,
      default: ''
    },
    // 列表数据
    listData: {
      type: Array,
      required: true
    },
    listCount: {
      type: Number,
      default: 0
    },
    // 列数据
    propList: {
      type: Array,
      required: true
    },
    // 是否展示序号列表
    showIndexColumn: {
      type: Boolean,
      default: false
    },
    // 是否显示复选框
    showSelectColumn: {
      type: Boolean,
      dafault: false
    },
    // 分页信息
    page: {
      type: Object,
      default: () => ({ currentPage: 0, pageSize: 10 })
    },
    // 其他表格配置，比如展示下拉层级等
    childrenProps: {
      type: Object,
      default: () => ({})
    },
    // 是否展示底部分页
    showFooter: {
      type: Boolean,
      default: true
    }
  },
  emits: ['selectionChange', 'update:page'],
  setup(props, { emit }) {
    const handleSelectionChange = (value: any) => {
      emit('selectionChange', value)
    }

    // 当前页码改变
    const handleCurrentChange = (currentPage: number) => {
      emit('update:page', { ...props.page, currentPage })
    }

    // 当前页数改变
    const handleSizeChange = (pageSize: number) => {
      emit('update:page', { ...props.page, pageSize })
    }

    return {
      handleSelectionChange,
      handleCurrentChange,
      handleSizeChange
    }
  }
})
</script>

<style scoped lang="less">
.header {
  display: flex;
  height: 45px;
  padding: 0 5px;
  justify-content: space-between;
  align-items: center;

  .title {
    font-size: 20px;
    font-weight: 700;
  }

  .handler {
    align-items: center;
  }
}

.footer {
  margin-top: 15px;

  .el-pagination {
    text-align: right;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
}
</style>
