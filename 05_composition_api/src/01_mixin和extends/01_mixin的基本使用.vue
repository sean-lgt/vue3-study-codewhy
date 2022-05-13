<template>
  <div>
    <h2>{{ message }}</h2>
    <h2>{{ title }}</h2>
    <button @click="foo">点击</button>
  </div>
</template>

<script>
import { demoMixin } from "./mixins/demoMixin";
export default {
  mixins: [demoMixin],
};
</script>

<style scoped>
</style>