<template>
  <div>HomeContent:{{ name }} - {{ age }} - {{ length }}</div>
</template>

<script>
export default {
  // 注入数据
  inject: ["name", "age", "length"],
};
</script>

<style scoped>
</style>