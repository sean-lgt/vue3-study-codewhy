<template>
  <div>
    <button @click="btnClick">about按钮点击</button>
  </div>
</template>

<script>
import emitter from "./utils/eventbus";
export default {
  methods: {
    btnClick() {
      emitter.emit("why", { name: "why", age: 18 });
    },
  },
};
</script>

<style scoped>
</style>