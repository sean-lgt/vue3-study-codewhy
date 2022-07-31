<template>
  <div class="custom-form">
    <div class="header">
      <!-- 提供插槽能力 -->
      <slot name="header"></slot>
    </div>
    <el-form :label-width="labelWidth">
      <el-row>
        <template v-for="item in formItems" :key="item.label">
          <el-col v-bind="colLayout">
            <el-form-item
              v-if="!item.isHidden"
              :label="item.label"
              :rules="item.rules"
              :style="itemStyle"
            >
              <!-- 文本输入框 -->
              <template
                v-if="item.type === 'input' || item.type === 'password'"
              >
                <el-input
                  :placeholder="item.placeholder"
                  v-bind="item.otherOptions"
                  :show-password="item.type === 'password'"
                  v-model="formData[`${item.field}`]"
                  autocomplete="off"
                  auto-complete="new-password"
                  readonly
                  onfocus="this.removeAttribute('readonly')"
                ></el-input>
              </template>
              <!-- 下拉选中框 -->
              <template v-else-if="item.type === 'select'">
                <el-select
                  :placeholder="item.placeholder"
                  v-bind="item.otherOptions"
                  style="width: 100%"
                  v-model="formData[`${item.field}`]"
                >
                  <el-option
                    v-for="option in item.options"
                    :key="option.value"
                    :value="option.value"
                    :label="option.title"
                  >
                    {{ option.title }}
                  </el-option>
                </el-select>
              </template>
              <!-- 日期选择器 -->
              <template v-if="item.type === 'datepicker'">
                <el-date-picker
                  style="width: 100%"
                  v-bind="item.otherOptions"
                  v-model="formData[`${item.field}`]"
                ></el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, watch } from 'vue'
import { IFormItem } from '../types'

export default defineComponent({
  props: {
    // v-model 双向数据绑定接收的值
    modelValue: {
      type: Object,
      required: true
    },
    formItems: {
      type: Array as PropType<IFormItem[]>,
      default: () => []
    },
    labelWidth: {
      type: String,
      default: '100px'
    },
    itemStyle: {
      type: Object,
      default: () => ({ padding: '10px 40px' })
    },
    colLayout: {
      type: Object,
      default: () => ({
        xl: 6, // >1920px 4个
        lg: 8,
        md: 12,
        sm: 24,
        xs: 24
      })
    }
  },
  // v-model双向数据绑定更改的值
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const formData = ref({ ...props.modelValue }) //对传进来的数据进行浅拷贝，确保单项数据流规则

    // 通过统计fromData的数据变化，emit 通知父组件
    watch(
      formData,
      (newValue) => {
        console.log('formData 发生改变', newValue)
        // emit 通知父组件更改  确保单项数据流
        emit('update:modelValue', newValue)
      },
      {
        deep: true // 深度监听
      }
    )

    return {
      formData
    }
  }
})
</script>

<style scoped lang="less">
.custom-form {
  padding-top: 22px;
}
</style>
