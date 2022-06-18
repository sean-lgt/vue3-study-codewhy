<template>
  <div>
    <h2>当前计数: {{ $store.state.rootCounter }}</h2>
    <hr />
    <button @click="incrementAction">+1</button>
    <button @click="decrementAction">-1</button>
    <button @click="add">+1</button>
    <button @click="sub">-1</button>
    <hr />
  </div>
</template>

<script>
import { onMounted } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();

    onMounted(() => {
      const promise = store.dispatch("getHomeMultidata");
      promise
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  },
};
</script>

<style scoped>
</style>