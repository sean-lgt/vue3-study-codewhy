<template>
  <div>
    <input type="text" v-model="message" />
    <h2>{{ message }}</h2>
  </div>
</template>

<script>
import debounceRef from "./hooks/useDebounceRef";
export default {
  setup() {
    const message = debounceRef("hello world");
    return {
      message,
    };
  },
};
</script>

<style scoped>
</style>