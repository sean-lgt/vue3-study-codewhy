<template>
  <!-- vue3 可以有多个根组件，但会造成一个bug,样式使用scope仍然会有部分穿透，因为子元素生成的唯一标识一致 -->
  <!-- 一般我们都会有个根元素进行包裹 -->
  <h2>Hello World</h2>
</template>

<script>
export default {};
</script>

<style scoped>
</style>