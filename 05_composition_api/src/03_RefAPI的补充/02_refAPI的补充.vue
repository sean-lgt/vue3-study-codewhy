<template>
  <div>{{ info }}</div>
  <button @click="changeInfo">修改Info</button>
</template>

<script>
import { ref, shallowRef, triggerRef } from "vue";
export default {
  setup() {
    const info = shallowRef({
      name: "why",
    });

    const changeInfo = () => {
      info.value.name = "james";
      triggerRef(info);
    };

    return {
      info,
      changeInfo,
    };
  },
};
</script>

<style scoped>
</style>