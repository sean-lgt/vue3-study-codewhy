<template>
  <div class="page-search">
    <!-- 绑定属性 v-model双向数据绑定 -->
    <custom-form v-bind="searchFormConfig" v-model="formData">
      <!-- 提供插槽 -->
      <template #header>
        <h1 class="header">高级检索</h1>
      </template>
      <template #footer>
        <div class="handle-btns">
          <el-button icon="Refresh" @click="handleResetClick">重置</el-button>
          <el-button type="primary" icon="Search" @click="handleQueryClick"
            >搜索</el-button
          >
        </div>
      </template>
    </custom-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import CustomForm from '@/base-ui/form'

export default defineComponent({
  components: {
    CustomForm
  },
  props: {
    searchFormConfig: {
      type: Object,
      required: true
    }
  },
  emits: ['resetBtnClick', 'queryBtnClick'],
  setup(props, { emit }) {
    // 双向绑定的属性应该由配置文件的field来决定
    // 1. 优化一：formData中的属性应该动态来决定
    const formItems = props.searchFormConfig?.formItems ?? []
    const formOriginData: any = {}
    for (const item of formItems) {
      formOriginData[item.field] = '' //初始化为空
    }

    const formData = ref(formOriginData)

    // 2. 优化二：当用户点击重置
    const handleResetClick = () => {
      for (const key in formOriginData) {
        formData.value[`${key}`] = formOriginData[key] //重置操作
      }
      emit('resetBtnClick')
    }

    // 3.优化三 当用户点击搜索
    const handleQueryClick = () => {
      emit('queryBtnClick', formData.value)
    }

    return {
      formData,
      handleResetClick,
      handleQueryClick
    }
  }
})
</script>

<style scoped>
.header {
  color: #333;
  font-size: 18px;
}
.handle-btns {
  text-align: right;
  padding: 0 50px 20px 0;
}
</style>
