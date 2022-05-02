<template>
  <div class="vue-app">{{ message }}</div>
</template>

<script>
export default {
  data() {
    return {
      message: "vite中使用vue",
    };
  },
};
</script>

<style scoped>
.vue-app {
  font-size: 18px;
  color: #fff;
}
</style>