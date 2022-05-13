<template>
  <div>
    Home Page
    <h2>{{ message }}</h2>
    <!-- 当我们在template模板中使用ref对象, 它会自动进行解包 -->
    <h2>当前计数: {{ counter }}</h2>
    <!-- ref的解包只能是一个浅层解包(info是一个普通的JavaScript对象) -->
    <h2>当前计数: {{ info.counter.value }}</h2>
    <!-- 当如果最外层包裹的是一个reactive可响应式对象, 那么内容的ref可以解包 -->
    <h2>当前计数: {{ reactiveInfo.counter }}</h2>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
import { ref, reactive } from "vue";

export default {
  props: {
    message: {
      type: String,
      required: true,
    },
  },
  setup() {
    let counter = ref(100);

    const info = {
      counter,
    };

    const reactiveInfo = reactive({
      counter,
    });

    // 局部函数
    const increment = () => {
      counter.value++;
      console.log(counter.value);
    };

    return {
      counter,
      info,
      reactiveInfo,
      increment,
    };
  },
};
</script>

<style scoped>
</style>