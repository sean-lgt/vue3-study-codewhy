<template>
  <div>
    <template v-for="(item, index) in names" :key="item">
      <!-- 插槽作用域 将子组件数据传给父组件 -->
      <slot :item="item" :index="index"></slot>
      <!-- 具名插槽 -->
      <slot name="why"></slot>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    names: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style scoped>
</style>