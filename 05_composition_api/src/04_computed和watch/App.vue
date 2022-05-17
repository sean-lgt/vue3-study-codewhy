<template>
  <div>
    <h2 ref="title">{{ info.name }}</h2>
    <button @click="changeData">修改数据</button>
  </div>
</template>

<script>
import { ref, reactive, watch } from "vue";

export default {
  setup() {
    // 1.定义可响应式的对象
    const info = reactive({
      name: "why",
      age: 18,
      friend: {
        name: "kobe",
      },
    });

    // 2.侦听器watch
    watch(
      () => ({ ...info }),
      (newInfo, oldInfo) => {
        console.log(newInfo, oldInfo);
      },
      {
        deep: true,
        immediate: true,
      }
    );

    const changeData = () => {
      info.friend.name = "james";
    };

    return {
      changeData,
      info,
    };
  },
};
</script>

<style scoped>
</style>