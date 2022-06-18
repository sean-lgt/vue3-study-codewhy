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
import { mapActions } from "vuex";

export default {
  methods: {
    // ...mapActions(["incrementAction", "decrementAction"]),
    // ...mapActions({
    //   add: "incrementAction",
    //   sub: "decrementAction"
    // })
  },
  setup() {
    const actions = mapActions(["incrementAction", "decrementAction"]);
    const actions2 = mapActions({
      add: "incrementAction",
      sub: "decrementAction",
    });

    return {
      ...actions,
      ...actions2,
    };
  },
};
</script>

<style scoped>
</style>