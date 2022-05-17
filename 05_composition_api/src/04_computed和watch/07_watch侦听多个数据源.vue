<template>
  <div>
    <div>
      <h2>{{ info.name }}</h2>
      <button @click="changeDate">修改数据</button>
    </div>
  </div>
</template>

<script>
import { ref, reactive, watch } from "vue";
export default {
  setup() {
    // 定义可响应式的对象
    const info = reactive({
      name: "why",
      age: 18,
    });
    const name = ref("why");

    // 侦听器
    watch(
      [() => ({ ...info }), name],
      ([newInfo, newName], [oldInfo, oldName]) => {
        console.log(newInfo, newName, oldInfo, oldName);
      }
    );

    const changeDate = () => {
      info.name = "kobe";
    };

    return {
      changeDate,
      info,
    };
  },
};
</script>

<style scoped>
</style>