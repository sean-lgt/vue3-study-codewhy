<template>
  <h1>我是Vue渲染出来的</h1>
  <h2>{{ title }}</h2>
  <hello-world></hello-world>
</template>

<script>
import HelloWorld from "./HelloWorld.vue";
export default {
  components: {
    HelloWorld,
  },
  data() {
    return {
      title: "Hello world",
    };
  },
};
</script>

<style scoped>
h2 {
  color: #0096ff;
}
</style>