<template>
  <div>
    <h2>当前计数: {{ $store.state.rootCounter }}</h2>
    <hr />
    <button @click="increment">+1</button>
    <button @click="add">+1</button>
    <button @click="decrement">-1</button>
    <button @click="increment_n({ n: 10 })">+10</button>
    <hr />
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";

import { INCREMENT_N } from "../store/mutation-types";

export default {
  methods: {
    ...mapMutations(["increment", "decrement", INCREMENT_N]),
    ...mapMutations({
      add: "increment",
    }),
  },
  setup() {
    const storeMutations = mapMutations([
      "increment",
      "decrement",
      INCREMENT_N,
    ]);

    return {
      ...storeMutations,
    };
  },
};
</script>

<style scoped>
</style>