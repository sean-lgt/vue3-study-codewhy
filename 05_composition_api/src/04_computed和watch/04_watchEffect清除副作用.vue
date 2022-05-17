<template>
  <div>
    <h2>{{ name }}-{{ age }}</h2>
    <button @click="changeName">修改name</button>
    <button @click="changeAge">修改age</button>
  </div>
</template>

<script>
import { ref, watchEffect } from "vue";
export default {
  setup() {
    // watchEffect 自动收集响应式的依赖
    const name = ref("why");
    const age = ref(18);

    const changeName = () => (name.value = "kobe");
    const changeAge = () => {
      age.value++;
      if (age.value > 25) {
        stop(); //停止收集依赖
      }
    };

    const stop = watchEffect((onInvalidate) => {
      const timer = setTimeout(() => {
        console.log("🚀【网络请求成功】");
      }, 2000);

      // 根据name和ag两个变量发送网络请求，可清除副作用
      onInvalidate(() => {
        // request.cancel()
        clearTimeout(timer);
        console.log("onInvalidate");
      });

      console.log(`name:${name.value},age:${age.value}`);
    });

    return {
      name,
      age,
      changeName,
      changeAge,
    };
  },
};
</script>

<style scoped>
</style>