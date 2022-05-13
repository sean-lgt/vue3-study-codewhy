<template>
  <div>
    Home Page
    <h2>{{ message }}</h2>
    <h2>当前计数: {{ state.counter }}</h2>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
import { reactive } from "vue";

export default {
  props: {
    message: {
      type: String,
      required: true,
    },
  },
  setup() {
    const state = reactive({
      counter: 100,
    });

    // 局部函数
    const increment = () => {
      state.counter++;
      console.log(state.counter);
    };

    return {
      state,
      increment,
    };
  },
};
</script>

<style scoped>
</style>