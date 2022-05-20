<template>
  <div>
    <home />
    <h2>App counter:{{ counter }}</h2>
    <button @click="increment">App 中的+1</button>
  </div>
</template>

<script>
import { provide, ref, readonly } from "vue";
import Home from "./Home.vue";
export default {
  components: {
    Home,
  },
  setup() {
    const name = ref("coderwhy");
    const counter = ref(100);
    provide("name", readonly(name));
    provide("counter", readonly(counter));

    const increment = () => counter.value++;

    return {
      increment,
      counter,
    };
  },
};
</script>

<style scoped>
</style>