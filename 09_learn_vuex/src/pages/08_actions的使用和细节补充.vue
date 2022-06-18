<template>
  <div>
    <h2>当前计数: {{ $store.state.rootCounter }}</h2>
    <hr />
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
    <hr />
  </div>
</template>

<script>
export default {
  methods: {
    increment() {
      this.$store.dispatch("incrementAction", { count: 100 });
    },
    decrement() {
      // 派发风格（对象类型）
      this.$store.dispatch({
        type: "decrementAction",
      });
    },
  },
  mounted() {
    this.$store.dispatch("getHomeMultidata");
  },
};
</script>

<style scoped>
</style>