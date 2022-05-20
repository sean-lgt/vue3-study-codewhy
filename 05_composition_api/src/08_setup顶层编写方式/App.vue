<template>
  <div>
    <h2>当前计数：{{ counter }}</h2>
    <button @click="increment">+1</button>
    <hello-world message="ahaha" @increment="getCounter"></hello-world>
  </div>
</template>

<script setup>
import { ref } from "vue";
import HelloWorld from "./HelloWorld.vue";
const counter = ref(0);
const increment = () => {
  counter.value++;
};
const getCounter = (payLoad) => {
  console.log("🚀【子组件 emit】", payLoad);
};
</script>

<style scoped>
</style>